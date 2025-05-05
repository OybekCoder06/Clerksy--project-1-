import React from 'react'
import HR from '../Images/HR.png'

const Body6 = () => {
    return (
        <div>
            <div className="bd6-main w-[1440px] h-[755px]  relative ">
                <div className="bd6-child w-[1180px] h-[515px]  absolute top-[120px] left-[130px] ">
                    <h1 className='inf2 hh1 font-black text-[#163A24] text-wrap w-[360px] h-[108px] absolute top-[136px] left-[98px] ' >
                        Not just another HR resource.
                    </h1>
                    <p className='pp font-medium w-[287px] h-[27px] absolute top-[270px] left-[98px] ' >
                        Simple. Entertaining. Informative.
                    </p>
                    <button className='btn btn-success w-[191px] h-[52px] rounded-[20px] bg-[#15762E] absolute top-[315px] left-[98px] text-white text-[15px] '>Download E-book</button>
                    <img src={HR} className='absolute left-[590px] ' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Body6