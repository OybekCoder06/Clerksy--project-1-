import React from 'react'

const Body8 = () => {
    return (
        <div>
            <div className="bd8-main w-[1440px] h-[240px] relative  bg-[#F2EFE6] ">
                <h1 className='hh1 inf2 text-[#163A24] absolute top-[54px] left-[130px] font-black ' >
                    Stay up to date!
                </h1>
                <p className='pp text-[#163A24] absolute top-[134px] left-[130px] font-medium ' >
                    Sign up for the latest Clerksy news.
                </p>
                <input type="email" className='w-[590px] design h-[50px] border-[1px] border-[#645864] rounded-[25px] text-[#162A24] inf2 text-[20px] absolute top-[60px] right-[130px] p-[15px] outline-none  ' />
                <button className='btn btn-success absolute top-[59px] right-[100px] w-[111px] h-[52px] rounded-[25px] text-white border-none text-[15px] bg-[#164A24] ' >Sign Up</button>
                <p className=' text-[17px] text-wrap leading-[27px]  absolute top-[125px] right-[196px] w-[524px] ' >
                    By submitting your email you agree to receive updates about Clerksy. You can unsubscribe at any time. View our full <a className='text-[#169A24]' href="#">Privacy Police</a>
                </p>
                
            </div>
        </div>
    )
}

export default Body8
