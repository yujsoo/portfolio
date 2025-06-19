import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { projectItems } from '../data/projectItems'
import { otherItems } from '../data/otherItems'
import { frontItems } from '../data/frontItems'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  const menuItems = [
    { name: '기술 스택 및 툴', href: '/#skill' },
    {
      name: '주요 프로젝트',
      href: '/#experience',
      count: `${projectItems.length + frontItems.length}`,
    },
    { name: '개인 프로젝트', href: '/#others', count: `${otherItems.length}` },
    { name: '현재', href: '/#current' },
    { name: '프로필', href: '/#profile' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-PPNeueMontreal font-bold">
      <div className="flex justify-between px-6 py-4 sm:justify-center">
        <h1 className="sm:text-4xl text-3xl">
          <Link to="/">(/home/jisoo)</Link>
        </h1>
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="block absolute top-4 right-6 lg:hidden sm:text-4xl text-3xl hover:text-primary">
          메뉴
        </button>
        <nav className="hidden lg:block">
          <ul className="flex space-x-4 text-3xl pl-4">
            {menuItems.map(({ name, href, count }) => (
              <li key={name}>
                <Link
                  to={href}
                  className="hover:text-primary transition-all duration-200 ease-in-out">
                  {name}
                  {count && (
                    <span className="text-[10px] align-top leading-none">
                      ({count})
                    </span>
                  )}
                </Link>
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
            className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center space-y-8 text-3xl sm:text-4xl">
            <ul>
              {menuItems.map(({ name, href }) => (
                <li className="text-center">
                  <Link
                    key={name}
                    to={href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 hover:text-primary transition-all duration-200 ease-in-out">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
