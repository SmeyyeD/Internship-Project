import React from 'react'

function Footer() {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-[50px] mb-16 space-y-10 md:space-y-0">
            <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-1/4 xl:w-1/8 mt-20 mb-16 md:mb-0 mr-0 md:mr-8">
                <img
                    src="images/SideImage.png"
                    alt="Side Image"
                    className="w-3/4 sm:w-2/3 md:w-full mx-auto shadow-lg shadow-gray-500 rounded-lg"
                />
            </div>


            <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center md:items-end px-1">
                <div className="text-center md:text-right mb-4">
                    <p className="text-3xl font-bold mr-12">We'd love to hear <br /> from you</p>
                </div>

                <form className="w-full px-4 sm:px-12">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name*"
                            className="w-full py-3 px-4 border border-black rounded-md text-black placeholder-black"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email*"
                            className="w-full py-3 px-4 border border-black rounded-md text-black placeholder-black"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Website URL*"
                            className="w-full py-3 px-4 border border-black rounded-md text-black placeholder-black"
                        />
                    </div>

                    <div className="mb-4">
                        <textarea
                            placeholder="Project Details*"
                            className="w-full py-3 px-4 border border-black rounded-md text-black placeholder-black"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-black text-white py-3 px-8 rounded-md transition duration-200 w-full">
                            Send Proposal
                        </button>
                    </div>
                </form>
            </div>
        </div >








    )
}

export default Footer