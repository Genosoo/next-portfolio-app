import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

interface ButtonMenuProps {
    toggleMenu: () => void;
    isMenuOpen: boolean
}

export default function ButtonMenu({ toggleMenu, isMenuOpen }: ButtonMenuProps) {
  return (
    <div className="navbarMenu">
        <button onClick={toggleMenu} className="buttonMenu">
          {isMenuOpen ? <IoClose/> : <FaBars />}
        </button>
      </div>
  )
}
