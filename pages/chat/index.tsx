import DefaultLayout from "@/layouts/default";
import { MatchListOnChat } from "@/components/matchs/matchListOnChat";
import CHatList from "@/components/chat/chatList";

export default function ChatPage() {
  return (
    <DefaultLayout>
        <h4 className=" flex items-center font-bold text-large mb-2"> Matches </h4>
        <MatchListOnChat/>
        <h4 className=" flex items-center font-bold text-large mb-2 mt-2"> Chat </h4>
        <CHatList/>
    </DefaultLayout>
  );
}
