import React, { useState } from 'react';

function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-10 w-full flex flex-wrap sm:justify-start sm:flex-nowrap bg-white text-sm py-4">
      <div className="w-full mx-auto" style={{ width: '90%' }}>
        <nav className="mx-auto px-4 sm:flex sm:items-center sm:justify-between text-black" aria-label="Global">
          <div className="flex items-center justify-between">
            <a className="flex-none" href="#">
              <img className="h-10 w-auto" src="https://edxplor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.581b5eb4.png&w=128&q=75" alt="Brand" />
            </a>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg   bg-black text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent  dark:text-black dark:hover:bg-white/10" onClick={toggleMenu} aria-label="Toggle navigation">
                <svg className={isMenuOpen ? "hs-collapse-open:block hidden flex-shrink-0 size-6" : "hs-collapse-open:hidden flex-shrink-0 size-6"} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className={isMenuOpen ? "hs-collapse-open:hidden flex-shrink-0 size-6" : "hs-collapse-open:block hidden flex-shrink-0 size-6"} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className={isMenuOpen ? "hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" : "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"}>
            <div className="flex  space-x-5 flex-col gap-5 mt-5 sm:flex-row sm:items-center  sm:justify-end sm:mt-0 sm:ps-5">
              <a className="font-bold text-xl " href="#" aria-current="page" style={{ color: 'coral' }}>Home</a>
              <a className="font-bold text-xl text-blue-500 hover:text-orange-500 " href="#">About Us</a>
              <a className="font-bold text-xl text-blue-500 hover:text-orange-500 " href="#">Colleges</a>
              <a className="font-bold text-xl text-blue-500 hover:text-orange-500 " href="#">Compare</a>
              <a className="font-bold text-xl text-blue-500 hover:text-orange-500 " href="#">Courses</a>
              <a className="font-bold text-xl text-blue-500 hover:text-orange-500 " href="#">Contact Us</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavigationMenu;
