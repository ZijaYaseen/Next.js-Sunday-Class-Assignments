"use client";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger Menu Icon
import { useState } from "react"; // 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  return (
    <header className="flex justify-between items-center p-4 md:mx-36 font-sans">
      {/* Logo */}
      <div>
        <Image src={Logo} alt="Logo" />
      </div>

      {/* Search bar (visible on desktop only) */}
      <div className="hidden md:flex p-4 bg-[#F5F5F5] w-[372px] h-[56px] rounded-lg">
        <CiSearch size={24} className="text-[#989898]" />
        <p className="ml-2 text-[#989898] font-medium text-sm font-sans">Search</p>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex">
        <ul className="flex gap-[40px] font-medium text-base text-[#989898]">
          <li className="hover:text-black">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex gap-6">
        <CiHeart size={32} />
        <CiShoppingCart size={32} />
        <CiUser size={32} />
      </div>

      {/* Hamburger Menu Icon (visible on mobile only) */}
      <div className="md:hidden">
        <GiHamburgerMenu size={32} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Menu
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white p-4 shadow-lg z-50 md:hidden">
          <ul className="flex flex-col items-center gap-4">
            <li className="hover:text-black">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
          </ul>
        </div>
      )} */}
    </header>
  );
}
