import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-screen z-50 mt-0">
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={isOpen ? "w-full block flex-grow ease-in duration-300 lg:flex lg:items-center lg:w-auto" : "w-full block hidden flex-grow ease-in duration-300 lg:flex lg:items-center lg:w-auto"}>
                <div className="text-sm lg:flex-grow">
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-gray-50 mr-4 font-medium font-mono">
                        Home
                    </a>
                    <a href="/Produkte" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-gray-50 mr-4 font-medium font-mono">
                        Produkte
                    </a>
                    {/* <a href="/Standort" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-gray-50 mr-4 font-medium font-mono">
                        Standort
                    </a> */}
                    <a href="/Kontakt" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-gray-50 mr-4 font-medium font-mono">
                        Kontakt
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;