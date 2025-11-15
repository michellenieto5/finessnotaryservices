"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Services from "@/components/Services";

const NavLinks = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 text-lg md:text-xl winky-font">
      <Link href="#about">About</Link>
      <Link href="#services">Services and Pricing</Link>
      <Link href="#book">Book an Appointment</Link>
      <Link href="#contact">Contact</Link>
      <Link href="#reviews">Reviews</Link>
      <Link href="#call">Call Today</Link>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-end p-10">

      <div className="hidden md:flex">
        <NavLinks />
      </div>

      <div className="md:hidden">
        <button onClick={toggleNavbar}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-8 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 md:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Nav;

