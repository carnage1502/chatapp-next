import getConversations from "@app/actions/getConversations";
import ConversationList from "@components/ConversationList";
import Sidebar from "@components/sidebar/Sidebar";

export default async function Conversationslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
