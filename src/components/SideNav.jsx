import React from 'react';
import logo from '../assets/logo.png'

const SideNav = () => {
  const menuItems = [ 'Cart', 'Market', 'Setting', 'Input'];

  return (
    <>
      <div className='w-[357px] h-[1020px]   relative'>
        <ul className='w-[300px] text-center fixed top-0 h-full'>
            <li className=" w-full bg-white mb-2 p-14 text-center "><div className='w-[58.15px] text-center h-[36.10px] mx-auto'><img className='w-[58.15px] h-[36.10px] mx-auto'  src={logo} alt="" /></div></li>
          {menuItems.map((item, index) => (
            <li className=" w-full bg-white mb-2 p-10 text-opacity-30 hover:bg-slate-400" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
