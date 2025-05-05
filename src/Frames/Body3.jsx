import React from 'react'
import Humans from '../Images/Humans.png'

const Body3 = () => {
    return (
        <div>
            <div className="w-[1440px] relative h-[775px] bg-[#F2EFE6] grid justify-center  bd3-main">
                <h1 className='text-wrap  text-[58px] w-[739px] absolute top-[114px] left-[350px] h-[108px] text-center leading-[54px] font-semibold text-[#163A24] inf2 ' >
                    Employees come in all shapes and sizes. Find the right fit.
                </h1>
                <p className='w-[760px] h-[54px] text-wrap text-[18px] text-center font-normal absolute top-[249px] left-[350px] leading-[27px]  ' >
                    Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts and make sure you are compliant with work and safety boards.
                </p>
                <img src={Humans} className='absolute top-[305px] left-[130px] ' alt="" />
            </div>
        </div>
    )
}

export default Body3