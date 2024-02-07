"use client"
import "./Navbar.css"
import Link from "next/link"
import Image from "next/image";
import { useState } from 'react';
import { usePathname } from "next/navigation"; 
import ButtonMenu from "./ButtonMenu";
import Logo from '@/public/logo.svg'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project', label: 'Project' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  
  return (
    <nav className="navbar">
    <div className="navbarWrapper">
      <Image
          src={Logo}
          alt="Logo"
          height={30}
        />
   
    <div className="navbarLinkWrapper">
    {navLinks.map((link,index) => {
      const isActive = pathname.endsWith(link.href);
      return (
        <Link
          key={index}
          href={link.href}
          onClick={closeMenu}
          className={isActive ? "active_link" : ""}>
          {link.label}
      </Link>
      )
    })}
    </div>
     
     <ButtonMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </div>

    
    {isMenuOpen ?
  <div className="navbarMobileLink">
    {navLinks.map((link,index) => {
      const isActive = pathname.endsWith(link.href);
      return (
        <Link
          key={index}
          href={link.href}
          onClick={closeMenu}
          className={isActive ? "active_link" : ""}
        >
          {link.label}
      </Link>
      )
    })}
  </div>
  : ''}
</nav>
  )
}
