import React from 'react';

function Header() {
    return (
        <div className="relative w-full h-[700px] flex justify-center items-center overflow-hidden">
            {/* Background Image */}
            <img
                src="images/BG.png"
                alt="Background Image"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Background Shape (Responsive boyutlandırma eklendi) */}
            <img
                src="images/Bg-Shape.png"
                alt="Background Shape"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-[80%] sm:w-[90%] lg:w-[1100px] h-auto"
            />

            {/* Hero Image (Responsive genişlik ve konumlandırma) */}
            <img
                src="images/Hero.png"
                alt="Hero Image"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                       w-[70%] sm:w-[85%] lg:w-[95%] max-w-[1200px] h-auto"
            />

            {/* Text Section (Responsive margin ve yazı boyutları) */}
            <div className="absolute top-16 w-full text-center z-10 px-4">
                <p className="text-black text-2xl sm:text-4xl lg:text-7xl font-bold">
                    Let's create something
                </p>
                <p className="text-black text-2xl sm:text-4xl lg:text-7xl font-bold">
                    great together.
                </p>
            </div>
        </div>
    );
}

export default Header;