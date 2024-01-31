import React from 'react'
import Stepper from './Stepper'
const Header = () => {
  return (
    <>
       <div className="flex sticky top-[100px] bg-white flex-row w-full h-[107px] p-10 justify-between my-1 mx-1">
        <div>
        <div className="text-black text-[32px] font-bold font-['Switzer']">Choose your new site</div>
        </div>
        <div>
       <Stepper />
        </div>
      </div>
    </>
  )
}

export default Header
