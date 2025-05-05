import React from 'react'
import Header from './Frames/Header'
import Body1 from './Frames/Body1'
import Body2 from './Frames/Body2'
import Body3 from './Frames/Body3'
import Body4 from './Frames/Body4'
import Body5 from './Frames/Body5'
import Body6 from './Frames/Body6'
import Body7 from './Frames/Body7'
import Body8 from './Frames/Body8'
import Body9 from './Frames/Body9'

const App = () => {
  return (
    <div>
      <Header/>
      <div className="space w-[1440px] h-[40px] "></div>
      <Body1/>
      <div className="space w-[1440px] h-[40px] "></div>
      <Body2/>
      <Body3/>
      <Body4/>
      <Body5/>
      <Body6/>
      <Body7/>
      <Body8/>
      <Body9/>
    </div>
  )
}

export default App