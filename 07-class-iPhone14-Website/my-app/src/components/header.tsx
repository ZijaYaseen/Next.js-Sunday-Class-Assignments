"use client";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger Menu Icon
import { RxCross2 } from "react-icons/rx"; // cross button
import { useState } from "react"; // State management

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white font-sans">
      <div className="flex items-center p-4 md:mx-36 justify-between">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="Logo" />
        </div>

        {/* Search bar (visible on desktop only, hide when mobile menu is open) */}
        <div className={`hidden md:flex items-center p-4 bg-[#F5F5F5] w-[372px] h-[56px] rounded-lg ${isOpen ? 'hidden' : ''}`}>
          <CiSearch size={24} className="text-[#989898]" />
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-2 w-full bg-[#F5F5F5] text-[#989898] font-medium text-sm font-sans outline-none"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex">
          <ul className="flex gap-[40px] font-medium text-base text-[#989898]">
            <li className="hover:text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/">About</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/">Contact Us</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className={`hidden md:flex gap-6 ${isOpen ? 'hidden' : ''}`}>
          <CiHeart size={32} />
          <CiShoppingCart size={32} />
          <CiUser size={32} />
        </div>

        {/* Hamburger Menu Icon (visible on mobile only) */}
        <div className="md:hidden">
          <GiHamburgerMenu size={32} onClick={() => setIsOpen(true)} />
        </div>
      </div>

      {/* Mobile Menu - full screen and cross button in top right */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="flex justify-between items-center mb-8">
            {/* Cross button aligned to the top right */}
            <RxCross2 size={32} onClick={() => setIsOpen(false)} className="ml-auto" />
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col items-start gap-8 text-xl">
            <li className="hover:text-black">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-black">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="hover:text-black">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li className="hover:text-black">
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
