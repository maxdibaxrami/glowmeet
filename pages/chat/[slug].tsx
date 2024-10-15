import DefaultLayout from "@/layouts/default";
import { useRouter } from 'next/router'

const ChatSlugPage = () => {
    const router = useRouter()

  return (
    <DefaultLayout>
        <p>{router.query.slug}</p>
    </DefaultLayout>
  );
}

export default ChatSlugPage
