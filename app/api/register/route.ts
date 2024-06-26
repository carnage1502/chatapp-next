import bcrypt from "bcrypt";

import prisma from "@app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (error: any) {
    console.log("Registration error", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
