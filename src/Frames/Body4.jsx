import React from 'react'
import Frame from '../Images/Frame (1).png'
import safe from '../Images/cardsafe.png'
import star from '../Images/star.png'
import search from '../Images/search.png'

const Body4 = () => {
    return (
        <div>
            <div className="bd4-main w-[1440px] h-[1560px] relative ">
                <h1 className='w-[338px] h-[108px] sort font-black inf2 absolute top-[274px] hh1 left-[228px] ' >
                    How the scenes fit together
                </h1>
                <p className='pp w-[360px] text-[#163A24] h-[81px] absolute top-[409px] left-[228px] ' >
                    Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.
                </p>
                <img src={Frame} className='absolute top-[180px] right-[228px] ' alt="" />
                <h1 className="hh1 absolute top-[721px] left-[357px]  w-[727px] h-[54px] inf2 font-black  ">
                    Consider everyone's best interest
                </h1>
                <p className="pp w-[343px] h-[27px] font-normal text-[#163A24] absolute top-[800px] left-[550px] ">
                    HR is for everyone. Clerksy can help you.
                </p>
                <div className="cards flex flex-wrap justify-evenly w-[1180px] h-[430px] items-center absolute bottom-[120px] left-[130px] ">
                    <div className="one w-[353px] relative h-[393px] pl-[40px] bg-[#E9E4D5] rounded-[15px] ">
                        <img src={safe} className='absolute top-[50px] ' alt="" />
                        <h1 className='w-[160px] absolute top-[145px] text-[#163A24] h-[63px] text-wrap font-[900] text-[28px] leading-[31px] inf2 ' >
                            Protect Your Company
                        </h1>
                        <ul className='w-[273px] h-[96px] text-[#163A24] text-[16px] absolute top-[231px] items-start ' >
                            <li>&#8226;  Compliance Audits & Training</li>
                            <li>&#8226;  Employee Data Storage</li>
                            <li>&#8226;  Policy Drafting</li>
                        </ul>
                    </div>
                    <div className="one w-[353px] relative h-[393px] pl-[40px] bg-[#E9E4D5] rounded-[15px] ">
                        <img src={star} className='absolute top-[50px] ' alt="" />
                        <h1 className='w-[260px] absolute top-[145px] text-[#163A24] h-[63px] text-wrap font-[900] text-[28px] leading-[31px] inf2 ' >
                            Set Your Employees Up For Success
                        </h1>
                        <ul className='w-[273px] h-[96px] text-[#163A24] text-[16px] absolute top-[231px] items-start ' >
                            <li>&#8226;  Learning & Development</li>
                            <li>&#8226;  Employee Relations</li>
                            <li>&#8226;  Benefit Management</li>
                            <li>&#8226;  Employee Performance</li>
                        </ul>
                    </div>
                    <div className="one w-[353px] relative h-[393px] pl-[40px] bg-[#E9E4D5] rounded-[15px] ">
                        <img src={search} className='absolute top-[50px] ' alt="" />
                        <h1 className='w-[301px] absolute top-[145px] text-[#163A24] h-[63px] text-wrap font-[900] text-[28px] leading-[31px] inf2 ' >
                            Know Your Industry's Legal Landscape
                        </h1>
                        <ul className='w-[273px] leading-[21px] h-[96px] text-[#163A24] text-[16px] absolute top-[231px] items-start ' >
                            <li>&#8226;  Work Place Investigations</li>
                            <li>&#8226;  Employee Mediations</li>
                            <li>&#8226;  Performance Tracking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body4