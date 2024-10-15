import DefaultLayout from "@/layouts/default";
import { useRouter } from 'next/router'
import ChatUserProfile from "@/components/chat/chatUserProfile";
import { Message } from "@/components/chat/message";
const ChatSlugPage = () => {
    const router = useRouter()

  return (
    <div className="p-2">
        <ChatUserProfile/>
        <Message/>
    </div>
  );
}

export default ChatSlugPage
