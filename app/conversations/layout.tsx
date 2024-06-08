import getConversations from "@app/actions/getConversations";
import getUsers from "@app/actions/getUsers";
import ConversationList from "@components/conversation/ConversationList";
import Sidebar from "@components/sidebar/Sidebar";

export default async function Conversationslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
