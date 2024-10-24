import React from 'react';
import { Navbar, Link } from '@nextui-org/react';

const VerticalNavbar = () => {
  return (
   <div className='overflow-y-auto data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] h-full max-h-full py-[10vh]'>
<div className='w-full relative flex flex-col gap-1 p-1 list-none'>
<a href="">halo</a>
</div>
   </div>
  );
};

export default VerticalNavbar;
