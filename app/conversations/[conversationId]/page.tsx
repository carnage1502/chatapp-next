import getConversationById from "@app/actions/getConversationById";
import getMessages from "@app/actions/getMessages";
import ChatBody from "@components/conversation/ChatBody";
import ChatForm from "@components/conversation/ChatForm";
import ChatHeader from "@components/conversation/ChatHeader";
import EmptyState from "@components/EmptyState";

type IParams = {
  conversationId: string;
};

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <ChatHeader conversation={conversation} />
        <ChatBody initialMessages={messages} />
        <ChatForm />
      </div>
    </div>
  );
};

export default ConversationId;
