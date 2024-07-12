import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import Button from '../Button';
import Logo from '../Logo';
import HomeIcone from '../Icones/HomeIcone';
import HamburgerMenu from '../Icones/HamburgerMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const clickHandler = () => {
    router.push('/sign-in');
  };

  const clickhandler = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='relative z-30'>
      <div className='flex justify-between md:flex-col md:items-center'>
        <div className='mb-3'>
          <Logo />
        </div>
        <div className='flex items-center justify-end w-[50%] p-3 md:hidden'>
        <Button txt='Sign In' onclick={clickHandler} textSize={undefined} />
          {/* <HomeIcone /> */}
        <NavbarItems href='/' txt='Home' />
          <HamburgerMenu onclick={clickhandler} />
        </div>
        <div className='hidden md:flex md:justify-between md:min-w-[40%] md:m-auto'>
          <NavbarItems href='/' txt='Home' />
          <NavbarItems href='/product' txt='Products' />
          <NavbarItems href='/' txt='Shop' />
          <NavbarItems href='/about' txt='About' />
          <Button txt='Sign In' onclick={clickHandler} textSize={undefined} />
        </div>
      </div>

      {menuOpen && (
        <div className=' fixed top-1 right-10 text-wrap rounded-xl hover:transition-all hover:duration-6000 hover:ease-in-out bg-Primary sm:w-[90%] h-[10%] justify-center bg-primary z-40 flex  items-center p-2'
        onMouseLeave={closeMenu}>
          <NavbarItems href='/product' txt='Products' />
          <NavbarItems href='/' txt='Shop' />
          <NavbarItems href='/about' txt='About' />
        </div>
      )}
    </div>
  );
};

export default Navbar;
