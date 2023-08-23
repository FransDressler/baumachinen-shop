import React from 'react';

function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0 pt-20">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid items-center lg:grid-cols-2 p-5 lg:pl-10">
                        <div className="p-6 mr-2 bg-amber-50/40 rounded-lg backdrop-blur-sm drop-shadow-lg z-10">
                            <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                Kontaktdaten
                            </h1>
                            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                Oder fülle einfach die Form aus.
                            </p>
    
                            <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                Glasewitzer Chaussee 17
                                18273 Güstrow
                                </div>
                            </div>
    
                            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-50">
                                    <a href="tel:03843212123" className="underline hover:text-gray-500">+49 (0) 03843 212123 </a> <br/>
                                    <a href="tel:03843215912" className="underline hover:text-gray-500">+49 (0) 3843 215912  </a> <br/>
                                    Fax: -215913
                                </div>
                            </div>
    
                            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40 underline hover:text-gray-500">
                                <a href="mailto:info@dressler-baumaschinen.de">info@dressler-baumaschinen.de</a>
                                </div>
                            </div>
                        </div>
                        <div className="md:mb-12 lg:mb-0 drop-shadow-lg lg:-ml-10 lg:w-3/4">
                                <img src="https://plus.unsplash.com/premium_photo-1677707057044-65a4e662ae27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                    className="rounded-lg shadow-lg dark:shadow-black/20 lg:w-5/6" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Contact;
