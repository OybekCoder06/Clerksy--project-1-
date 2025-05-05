import React from 'react'
import left from '../Images/left.png'
import right from '../Images/right.png'

const Body5 = () => {
  return (
    <div>
      <div className="bd5-main hh1 w-[1440px] h-[602px] bg-[#F2EFE6] relative ">
        <h1 className='inf2 text-[#163A24] w-[360px] h-[54px] text-[47px] font-black absolute top-[114px] left-[560px] ' >
          It's easy as 1, 2, 3
        </h1>
        <p className='text-[#163A24] pp text-center absolute top-[194px] left-[497px] ' >
          Clerksy can help use your unique business needs. Here's how:
        </p>
        <div className="w-[1180px] h-[186px] flex justify-between items-center absolute top-[240px] left-[130px] over">
          <hey className='text-center' >
          <p className='pp w-[260px] h-[54px] text-wrap text-[#163A24] font-[400] text-center ' >Fill out a form and tell us what you're looking for:</p>
          <h1 className='inf2 text-[28px] text-[#163A24] font-[900]' >5 minutes</h1></hey>
          <img src={left} className='  ' alt="" />
          <hey className='text-center' >
          <p className='pp w-[249px] h-[54px] text-wrap text-[#163A24] font-[400] text-center ' >Time it will take a Clerksy rep to follow up:</p>
          <h1 className='inf2 text-[28px] text-[#163A24] font-[900]' >24 hours</h1></hey>
          <img src={right} className='' alt="" />
          <hey className='text-center' >
          <p className='pp w-[260px] h-[54px] text-wrap text-[#163A24] font-[400] text-center ' >Take advantage of your monthly plans starting at:</p>
          <h1 className='inf2 text-[28px] text-[#163A24] font-[900]' >$969 USD</h1></hey>
        </div>
        <button className='w-[244px] h-[52px] rounded-[160px] bg-[#198C36] text-[20px] btn btn-success absolute top-[426px] left-[598px] text-white ' >Book Free Discovery Call</button>
      </div>
    </div>
  )
}

export default Body5