import React from 'react'

function BottomBar() {
    return (

        <div>
            <div className="flex mt-[250px] justify-center text-center">
                <h1 className="text-black text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">
                    Meet the heroes behind the magic
                </h1>
            </div>

            <div className="flex flex-wrap sm:flex-row justify-center items-center gap-6 mt-10">
                <img src="images/Founder.png" alt="Hero 1" className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-cover" />
                <img src="images/Developer.png" alt="Hero 2" className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-cover" />
                <img src="images/Designer.png" alt="Hero 3" className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-cover" />
            </div>

            <div className="bg-black bg-opacity-80 py-7 mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-yellow-500 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-xl">350 +</p>
                        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px]">Client Worldwide</p>
                    </div>
                    <div>
                        <p className="text-yellow-500 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-xl ">20 +</p>
                        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px]">Team Members</p>
                    </div>
                    <div>
                        <p className="text-yellow-500 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-xl ">100 +</p>
                        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px]">Project Completed</p>
                    </div>
                    <div>
                        <p className="text-yellow-500 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-xl ">85M +</p>
                        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px]">Revenue Generated</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BottomBar