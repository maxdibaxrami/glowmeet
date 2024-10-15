import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { Nav } from "@/components/Navbar/nav";
import {BottonMenu} from "@/components/BottonMenu/BottonMenu"
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      {/** */}
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-4">
        {children}
      </main>
      <BottonMenu/>
    </div>
  );
}
