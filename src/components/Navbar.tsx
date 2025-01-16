
'use client';

import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-primarylight shadow-lg z-50">
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MyBrand
            </Link>
          </div>

          {/* Menu for Large Screens */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              Fitur
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:textprimary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-textprimary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute w-full bg-primarylight z-50 shadow-lg md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">


            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-textprimary hover:bg-textprimary hover:text-primarylight">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-textprimary hover:bg-textprimary hover:text-primarylight">
              Fitur
            </Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-textprimary hover:bg-textprimary hover:text-primarylight">
              Services
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-textprimary hover:bg-textprimary hover:text-primarylight">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
