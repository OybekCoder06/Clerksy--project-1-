import React from 'react'
import Logo from '../Images/Frame.png'
import Pic from '../Images/Frame2.png'

const Header = () => {
    return (
        <div>
            <div className="head-main w-[1440px] h-[642px] bg-[#163A24] ">
                <div className="hd-nav relative">
                    <a href=""><img src={Logo} className='absolute top-5 left-[130px] ' alt="" /></a>
                    <a className='absolute top-[41px] left-[959px] text-white gap-4 ' href="">Log In</a>
                    <a className='absolute top-[41px] left-[1033px] text-white gap-4 ' href="">+998946988376</a>
                    <a className='absolute top-[26px] left-[1159px] ' href=""><button className='text-white btn btn-accent w-[141px] h-[51px] rounded-[20px] bg-[#198C36] ' >Get Started</button></a>
                </div>
                <div className="hd-bottom relative ">
                    <h1 className='w-[391px] capt h-[196px] text-wrap text-[48px] absolute top-[218px] left-[130px] text-[#FBFAF7] ' >
                        Running the show has never been so easy.
                    </h1>
                    <p className='text-wrap inf absolute w-[475px] h-[81px] text-[18px] text-[#FBFAF7] leading-[27px] ' >
                        Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant workplace.
                    </p>
                    <img src={Pic} className=' absolute left-[622px] top-[99px] ' alt="" />
                </div>

            </div>
        </div>
    )
}

export default Header