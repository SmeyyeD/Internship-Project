import React from 'react'

function NavBar() {
    return (
        <div class="flex flex-col items-center justify-center w-full text-left px-4 sm:px-8 mt-[50px] sm:mt-[70px] md:mt-[90px]">
            <h1 class="font-bold text-xl sm:text-2xl md:text-3xl text-left w-full max-w-7xl">
                Who we are
            </h1>
            <p class="mt-10 sm:mt-7 text-left sm:max-w-5xl md:max-w-7xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success. We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
            </p>
            <img src="images/MidImage.png" alt="" class="w-[1300px] h-auto mt-10 pt-16" />
        </div>
    )
}

export default NavBar