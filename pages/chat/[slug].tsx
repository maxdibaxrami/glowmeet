import DefaultLayout from "@/layouts/default";
import { useRouter } from 'next/router'

export default function ChatPageSlug() {
    const router = useRouter()

  return (
    <DefaultLayout>
        <p>{router.query.slug}</p>
    </DefaultLayout>
  );
}
