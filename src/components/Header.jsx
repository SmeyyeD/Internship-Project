import React from 'react';

function Header() {
    return (

        <div class="relative flex items-center justify-center px-4 sm:px-6 md:px-8 bg-[#FDCA09] h-[250px] sm:h-[300px] md:h-[376px] lg:h-[500px] xl:h-[600px]">

            <img
                src="images/Bg-Shape.png"
                alt="Background Shape"
                class="absolute bottom-0 left-0 w-full h-full object-contain"
            />


            <h1 class="absolute text-center top-[20%] text-black text-[16px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[60px] font-bold z-10">
                Let’s create something <br /> great together.
            </h1>


            <img
                src="images/Hero.png"
                alt="Hero Image"
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[65%] h-auto z-20"
            />
        </div>
    )
}

export default Header;