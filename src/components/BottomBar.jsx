import React from 'react'

function BottomBar() {
    return (

        <div>
            <div className="flex mt-[100px] justify-center text-center">
                <h1 className="text-black text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold  ">
                    Meet the heroes behind the magic
                </h1>
            </div>

            <div className="flex flex-wrap sm:flex-row justify-center items-center gap-6 mt-16">
                {["Founder", "Developer", "Designer"].map(role => (
                    <img
                        key={role}
                        src={`images/${role}.png`}
                        alt={role}
                        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-cover"
                    />
                ))}
            </div>

            <div className="bg-black bg-opacity-80 py-7 mt-[150px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "350 +", label: "Client Worldwide" },
                        { value: "20 +", label: "Team Members" },
                        { value: "100 +", label: "Project Completed" },
                        { value: "85M +", label: "Revenue Generated" },
                    ].map((item, index) => (
                        <div key={index}>
                            <p className="text-yellow-500 text-[24px] sm:text-[28px] md:text-[32px] font-bold">{item.value}</p>
                            <p className="text-white text-[16px] sm:text-[18px] md:text-[20px]">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default BottomBar