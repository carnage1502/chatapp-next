import getCurrentUser from "@app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@app/libs/prismadb";
import { pusherServer } from "@app/libs/pusher";

type IProps = {
  conversationId?: string;
};

export async function DELETE(req: Request, { params }: { params: IProps }) {
  try {
    const { conversationId } = params;
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const existingConversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    if (!existingConversation) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    const deletedConversation = await prisma.conversation.deleteMany({
      where: {
        id: conversationId,
        userIds: {
          hasSome: [currentUser.id],
        },
      },
    });

    existingConversation.users.forEach((user) => {
      if (user.email) {
        pusherServer.trigger(
          user.email,
          "conversation:remove",
          existingConversation
        );
      }
    });

    return NextResponse.json(deletedConversation);
  } catch (error: any) {
    console.log(error, "Error conversation delete");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
