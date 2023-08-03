import Image from "next/image";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

export default function Home() {
  return (
    <>
      <header className="navbar bg-background">
        <div className=" text-primary text-xl tracking-wider ml-8">daisyUI</div>
      </header>
      <main className="flex flex-col	gap-y-12 items-center	justify-center h-[calc(100vh-64px)]">
        <Image src="/logo.png" alt="logo" width="200" height="245" />
        <Link
          href="/top"
          className="btn px-12 text-2xl tracking-wider font-light bg-white text-primary border-primary drop-shadow-base hover:bg-hover hover:border-primary relative"
        >
          start
          <MdNavigateNext className="inline-block w-5 h-5 stroke-current absolute right-2" />
        </Link>
      </main>
    </>
  );
}
