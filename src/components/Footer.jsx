import React from 'react'

function Footer() {
    return (
        <div className="w-full flex justify-between items-center pt-[600px] pb-[100px] ">
            {/* Görsel Alanı */}
            <div className="w-full md:w-1/2">
                <img
                    src="images/SideImage.png"
                    alt="Footer Image"
                    className="w-[50%] h-[500px] object-cover rounded-md mx-auto shadow-[0px_6px_6px_rgba(0,0,0,0.3)]"
                />
            </div>

            {/* Form Alanı */}
            <div className="w-200 md:w-1/2 flex flex-col justify-center items-end px-1">
                <div className="text-right mb-4">
                    <p className="text-3xl font-bold mr-12">We'd love to hear</p>
                    <p className="text-3xl font-bold mt-1 mr-12">from you</p>
                </div>

                <form className="w-full px-12">
                    {/* İsim */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name*"
                            className="w-full py-3 px-4 border border-black rounded-md text-black placeholder-black"
                        />
                    </div>

                    {/* E-posta */}
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email*"
                            className="w-full py-3 px-4 border border-black rounded-md text-black placeholder-black "
                        />
                    </div>

                    {/* Web Sitesi */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Website URL*"
                            className="w-full py-3 px-4 border border-black rounded-md text-black placeholder-black"
                        />
                    </div>

                    {/* Proje Detayları */}
                    <div className="mb-4">
                        <textarea
                            placeholder="Project Details*"
                            className="w-full py-3 px-4 border border-black rounded-md text-black placeholder-black"
                        />
                    </div>

                    {/* Gönderme Butonu */}
                    <div className="flex justify-center">
                        <button className="bg-black text-white py-3 px-8 rounded-md  transition duration-200 w-full">
                            Send Proposal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer