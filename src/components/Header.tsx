import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  const menuItems = [
    { name: 'EXPERIENCE', href: '/#experience' },
    { name: 'OTHERS', href: '/#others' },
    { name: 'ABOUT', href: '/#about' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-PPNeueMontreal font-bold">
      <div className="flex px-6 py-4">
        <h1 className="text-4xl pr-4">
          <Link to="/">YJS / </Link>
        </h1>
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="absolute top-4 right-6 md:hidden text-4xl">
          MENU
        </button>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-4xl">
            {menuItems.map(({ name, href }) => (
              <li key={name}>
                <Link to={href}>{name}.</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center space-y-8 text-3xl">
            {menuItems.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                onClick={() => setIsOpen(false)}
                className="block">
                {name}.
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
