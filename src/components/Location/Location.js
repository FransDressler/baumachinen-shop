import React from 'react';

function Location() {
  return (
    <section>
        <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0 pt-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18851.701350139898!2d12.190566160504563!3d53.79905048194751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ac3ff2f56d1307%3A0x8c51f235c8bb32ae!2sBaumaschinen%20und%20Ger%C3%A4te%20GmbH!5e0!3m2!1sen!2sde!4v1693235606476!5m2!1sen!2sde" className="w-screen h-screen md:pt-[5em] lg:pt-[4em]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="p-6 mr-2 sm:hidden absolute top-0 bg-amber-800/70 rounded-lg backdrop-blur-sm drop-shadow-lg z-10 md:top-[6.2em] lg:top-[6em] md:right-3 lg:right-4 hidden md:block">
            <h1 className="text-4xl sm:text-5xl text-gray-100  font-extrabold tracking-tight  ">
                Standort
            </h1>
            <div className="flex items-center mt-8 text-gray-50 ">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-200">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-full text-3xl">
                Glasewitzer Chaussee 17 <br/>
                18273 Güstrow
                </div>
            </div>
        </div>
    </section>





  );
}

export default Location;
