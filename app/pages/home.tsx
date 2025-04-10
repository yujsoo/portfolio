import { Link } from "react-router";

export default function Home() {
  return <>
    <header className="fixed z-50 top-0 left-0 w-full font-poppins">
      <div className="realtive max-w-screen-xl mx-auto py-6">
        <h1><Link to="/" className="text-2xl">y &deg;</Link></h1>
        <nav className="absolute top-0 left-1/2 -translate-x-1/2">
          <h2 className="sr-only">대메뉴</h2>
          <ul className="flex font-poppins text-2xl">
            <li className="p-6"><Link to="/">I'm</Link></li>
            <li className="p-6"><Link to="/">Project</Link></li>
            <li className="p-6"><Link to="/">Others</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    <main className="max-w-screen-xl mx-auto">
      {/* 메인 소개글 */}
      <section className="h-screen">

      </section>
    </main>
  </>
}
