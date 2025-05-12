import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className="flex fixed z-50 top-0 left-0 w-full font-PPNeueMontreal text-4xl font-bold">
        <h1>YJS</h1>&nbsp;/&nbsp;
        <nav className="flex">
          <ul className="flex">
            <li>
              <Link to="/" className="block pr-4">
                EXPERIENCE.
              </Link>
            </li>
            <li>
              <Link to="/" className="block pr-4">
                OTHETS.
              </Link>
            </li>
            <li>
              <Link to="/" className="block pr-4">
                ABOUT.
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
