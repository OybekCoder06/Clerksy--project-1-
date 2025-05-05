import React from 'react'
import Logo from '../Images/logo_green.png'
import fc from '../Images/fc.png'
import tw from '../Images/tw.png'
import im from '../Images/im.png'
import ig from '../Images/ig.png'


const Body9 = () => {


    return (
        <div>
            <div className="bd9-main w-[1440px] h-[194px] relative">
                <img src={Logo} disabled className='absolute top-[40px] left-[130px] ' alt="" />
                <h1 className='text-[24px] leading-[36px] font-bold inf2 text-[#163A24] absolute top-[44px] left-[617px] ' >
                    A people company.
                </h1>
                <div className="social w-auto h-auto ">
                    <a href=""><img className='' src={fc} /></a>
                    <a href=""><img className='' src={tw} /></a>
                    <a href=""><img className='' src={im} /></a>
                    <a href=""><img className='' src={ig} /></a>
                </div>
                <div className="line w-[1180px] h-[1px] bg-slate-400 absolute top-[123px] left-[130px] opacity-[30%] "></div>
                <h3 className='absolute text-[14px] font-medium text-[#163A24] top-[150px] left-[130px] ' >
                    © 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.
                </h3>
                <ul className='footer-ul' >
                    <li><a href="">Privacy Police</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">GDPR</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Press Kit</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Body9