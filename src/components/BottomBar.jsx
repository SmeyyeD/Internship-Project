import React from 'react'

function BottomBar() {
    return (

        <div>
            <div className="flex mt-[300px] justify-center text-center">
                <h1 className="text-black text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px] font-bold">
                    Meet the heroes behind the magic
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-7 mt-10">
                <img src="images/Founder.png" alt="Hero 1" className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto object-cover" />
                <img src="images/Developer.png" alt="Hero 2" className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto object-cover" />
                <img src="images/Designer.png" alt="Hero 3" className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto object-cover" />
            </div>
        </div>




        /* 
                //     <div class="flex flex-wrap justify-center gap-6 pt-10">
                //         <img src="images/Founder.png" alt="" class="w-[200px] sm:w-[300px] md:w-[400px] h-auto" />
                //         <img src="images/Developer.png" alt="" class="w-[200px] sm:w-[300px] md:w-[400px] h-auto" />
                //         <img src="images/Designer.png" alt="" class="w-[200px] sm:w-[300px] md:w-[400px] h-auto" />
                //     </div>
        
        
                //     <div class="bg-zinc-800 bg-opacity-90 py-10  sm:px-12 text-white mt-20 w-[1519px] ">
                //         <div class="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        
                //             <div class="flex flex-col items-center flex-1 min-w-[150px]">
                //                 <p class="text-yellow-500 text-3xl md:text-4xl font-bold">350 +</p>
                //                 <p class="mt-2 text-sm md:text-lg whitespace-nowrap">Client Worldwide</p>
                //             </div>
        
        
                //             <div class="flex flex-col items-center flex-1 min-w-[150px]">
                //                 <p class="text-yellow-500 text-3xl md:text-4xl font-bold">20 +</p>
                //                 <p class="mt-2 text-sm md:text-lg whitespace-nowrap">Team Members</p>
                //             </div>
        
        
                //             <div class="flex flex-col items-center flex-1 min-w-[150px]">
                //                 <p class="text-yellow-500 text-3xl md:text-4xl font-bold">100 +</p>
                //                 <p class="mt-2 text-sm md:text-lg whitespace-nowrap">Projects Completed</p>
                //             </div>
        
        
                //             <div class="flex flex-col items-center flex-1 min-w-[150px]">
                //                 <p class="text-yellow-500 text-3xl md:text-4xl font-bold">85M +</p>
                //                 <p class="mt-2 text-sm md:text-lg whitespace-nowrap">Revenue Generated</p>
                //             </div>
                //         </div>
                //     </div>
                // </div> */

    )
}

export default BottomBar