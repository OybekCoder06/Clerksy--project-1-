import React from 'react'
import left from '../Images/7left.png'
import right from '../Images/7right.png'

const Body7 = () => {
    return (
        <div>
            <div className="bd7-main w-[1440px] h-[415px] bg-[#163A24] relative ">
                <img src={left} className='absolute left-0 bottom-0' alt="" />
                <img src={right} className='absolute right-0 bottom-0 ' alt="" />
                <h1 className='text-white hh1 inf2 absolute top-[114px] left-[460px]  font-bold ' >
                    Get Started With Clerksy
                </h1>
                <p className='pp text-white absolute top-[194px] left-[560px]  ' >
                    Make sure your business puts people first.
                </p>
                <button className='w-[258px] h-[52px] bg-[#FAB5A0] text-[17px] border-0 rounded-[25px] absolute top-[239px] left-[591px] btn btn-active text-[#163A24] ' >Book a Free Discovery Call</button>
            </div>
        </div>
    )
}

export default Body7