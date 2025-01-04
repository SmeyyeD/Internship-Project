import React from 'react'

function Header() {
    return (

        <div class="relative w-full h-[600px] flex justify-center items-center overflow-hidden">
            <img src="images/BG.png" alt="Background Image" class="absolute top-0 left-0 w-full h-[1000px] object-cover" />
            <img src="images/Bg-Shape.png" alt="Background Shape" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-auto w-[1000px] object-cover" />]
            <img src="images/Hero.png" alt="Hero Image" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1100px] h-auto object-cover" />

            <div class="relative text-black text-center text-7xl font-bold z-8 font-sans bottom-20">
                Let's create something <span class="block font-bold text-7xl ">great together.</span>
            </div>

        </div>
    )
}

export default Header