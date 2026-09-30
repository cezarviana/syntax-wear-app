import IconMenu from '@/assets/images/icon-menu.png'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import type { NavLink } from '../Header'
import { IoMdClose } from 'react-icons/io'

interface MenuMobileProps {
  navLinks: NavLink[]
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <img src={IconMenu} alt="menu icon" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 transition-opacity duration-500 z-30 ${
          menuIsOpen
            ? 'visible bg-black/70 opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {/* Drawer */}
        <div
          className={`absolute top-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 ${menuIsOpen ? 'translate-x-0' : '-translate-x-full'} `}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="bg-black p-5 text-white">
            <nav className='flex justify-between'>
              <Link to="/sign-in" className="flex items-center gap-3">
                <FaRegUserCircle className="h-6 w-6" />
                <p>Hello! Log in here</p>
              </Link>
              <IoMdClose className='cursor-pointer text-2xl' onClick={() => setMenuIsOpen(!menuIsOpen)} />
            </nav>
          </header>

          <ul className="flex flex-col gap-3 p-4 overflow-y-auto scrollbar-hide h-[calc(100%_-_140px)]">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                {link.name}
              </Link>
            ))}

            <li>
              <Link to="/our-stores" onClick={() => setMenuIsOpen(!menuIsOpen)}>Stores</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuIsOpen(!menuIsOpen)}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
