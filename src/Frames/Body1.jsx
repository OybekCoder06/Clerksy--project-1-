import React from 'react'
import bd_pic from '../Images/Frame3.png'
import bd_pic2 from '../Images/Frame4.png'
import stripe from '../Images/stripe.png'
import google from '../Images/google.png'
import gusto from '../Images/gusto.png'
import notion from '../Images/notion.png'
import aircall from '../Images/aircall.png'

const Body1 = () => {
    return (
        <div>
            <div className="bd-main relative w-[1440px] h-[1225px] ">
                <img src={bd_pic} alt="" className='absolute left-[228px] top-[0.06px] ' />
                <h1 className='text-wrap inf2 w-[325px] h-[108px] text-[48px] text-[#163A24] absolute top-[149px] left-[818px] leading-[54px] font-bold ' >
                    Put the human back in HR.
                </h1>
                <p className='text-wrap inf3 w-[374px] h-[54px] text-[18px] text-[#163A24] absolute top-[284px] left-[818px] leading-[27px] ' >
                    Your employees are the real stars. Show the love and help them perform!
                </p>
                <h1 className='text-wrap inf2 w-[376px] h-[108px] text-[48px] text-[#163A24] absolute top-[615px] left-[228px] leading-[54px] font-extrabold' >
                    You don’t have to play all the parts.
                </h1>
                <p className='absolute top-[750px] left-[228px] text-wrap w-[380px] h-[54px] leading-[27px] text-[#163A24] text-[18px] ' >
                    Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.
                </p>
                <img src={bd_pic2} className='absolute left-[720px] top-[510px]  ' alt="" />
                <h1 className='font-extrabold text-[48px] inf2 text-[#163A24] absolute top-[1045px] left-[450px] ' >
                    We partner with the best
                </h1>
                <div className="ads absolute top-[1166px] left-[228px] w-[984px] h-[60px] flex justify-evenly items-center px-10 ">
                    <a href=""><img className=' ' src={stripe} alt="" /></a>
                    <a href=""><img className=' ' src={google} alt="" /></a>
                    <a href=""><img className=' ' src={notion} alt="" /></a>
                    <a href=""><img className=' ' src={gusto} alt="" /></a>
                    <a href=""><img src={aircall} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Body1