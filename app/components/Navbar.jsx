"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-around items-center  py-3 px-5 fixed top-0 left-0 right-0  backdrop-blur-md z-50 ">
        <div className="navbar-left ">
          <h1 className="font-bold font-mono text-5xl text-foreground">ABK</h1>
        </div>
        <div className="navbar-right flex items-center gap-6 text-sm">
          <div className="nav-links gap-6 hidden md:flex">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/contact" className="nav-link">
              Contact Us
            </Link>
          </div>

          <div className="contact flex items-center gap-2">
            <a
              href="https://wa.me/201097156104"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 text-foreground"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
              </svg>
              <span className="hidden md:flex">+20 109 715 6104</span>
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {isOpen && (
            <div className="mobile-menu absolute top-16 right-10 bg-white shadow-md rounded-md py-4 px-6 flex flex-col gap-4 md:hidden w-56">
              <Link
                href="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/projects"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
