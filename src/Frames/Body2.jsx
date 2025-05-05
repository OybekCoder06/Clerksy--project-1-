import React from 'react'
import chat from '../Images/chat.png'
import safe from '../Images/safe.png'
import table from '../Images/table.png'
import girl from '../Images/girl.png'

const Body2 = () => {
    return (
        <div>
            <div className="bd-main2 w-[1440px] h-[568px] bg-[#163A24] relative ">
                <h1 className='w-[823px] h-[54px] text-[48px] font-extrabold absolute top-[66px] left-[340px] inf2 text-white ' >
                    HR Production of the Highest Quality
                </h1>
                <ul className='flex justify-around flex-wrap absolute w-[1180px] h-[254px] top-[205px] left-[130px] items-center ' >
                    <p className='text-center text-[18px] font-normal grid justify-items-center text-[#FBFAF7] ' > <img src={chat} alt="" /> Educates & Informs <br /><p>Employee Expectations</p></p>
                    <p className='text-center text-[18px] font-normal grid justify-items-center text-[#FBFAF7] ' > <img src={safe} alt="" /> Protects Your Business <br /><p>Just in Case</p></p>
                    <p className='text-center text-[18px] font-normal grid justify-items-center text-[#FBFAF7] ' > <img src={table} alt="" /> Manages & Stores <br /><p>Important Documents</p></p>
                    <p className='text-center text-[18px] font-normal grid justify-items-center text-[#FBFAF7] ' > <img src={girl} alt="" /> Create a Healthy <br /><p>Work Environment</p></p>
                </ul>
            </div>
        </div>
    )
}

export default Body2