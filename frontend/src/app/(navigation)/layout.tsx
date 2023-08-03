import Link from "next/link";

export default function NavigationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="navbar bg-white">
        <div className="flex-none">
          {/* ハンバーガーメニュー */}
          <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden bg-white border-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 ml-8">
          <Link href="/top" className="text-primary">
            ai単語
          </Link>
        </div>
      </header>
      <main className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">{children}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-white text-base-content">
            <li>
              <Link href="/top">Top</Link>
            </li>
            <li>
              <Link href="/words">Words</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
