import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center flex-1 md:flex-none">
            <a href="#" className="flex items-center">
              <img src="/vite.svg" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="font-semibold text-lg">AfghanSaffron</span>
            </a>
          </div>

          {/* Center: Menu (desktop) */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
            </div>
          </div>

          {/* Right: Icons + Mobile hamburger */}
          <div className="flex items-center gap-4">
            {/* icons (hidden on small when hamburger present) */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button aria-label="User" className="p-2 rounded hover:bg-gray-100">
                {/* user icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a4 4 0 100 8 4 4 0 000-8zM2 18a8 8 0 1116 0H2z" clipRule="evenodd" />
                </svg>
              </button>

              <button aria-label="Cart" className="relative p-2 rounded hover:bg-gray-100">
                {/* cart icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.98-1.74L23 6H6" />
                </svg>
                {/* optional badge */}
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold leading-none text-white bg-red-600 rounded-full">3</span>
              </button>

              <button aria-label="Language" className="p-2 rounded hover:bg-gray-100">
                {/* globe icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 010 20" />
                </svg>
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Products</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">About Us</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Blog</a>
          </div>
          <div className="px-4 py-3 border-t flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button aria-label="User" className="p-2 rounded hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a4 4 0 100 8 4 4 0 000-8zM2 18a8 8 0 1116 0H2z" clipRule="evenodd" />
                </svg>
              </button>
              <button aria-label="Cart" className="p-2 rounded hover:bg-gray-100 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.98-1.74L23 6H6" />
                </svg>
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold leading-none text-white bg-red-600 rounded-full">3</span>
              </button>
            </div>
            <div>
              <button aria-label="Language" className="p-2 rounded hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 010 20" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;