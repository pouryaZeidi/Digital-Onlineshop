import React from 'react'
import NavbarItems from './NavbarItems'
import Button from '../Button'
import Logo from '../Logo'
import HomeIcone from '../Icones/HomeIcone'
import HamburgerMenu from '../Icones/HamburgerMenu'
const Navbar = () => {
  return (
    <div className='flex justify-between md:flex-col md:items-center relative  z-30'>
    <div className='mb-3'>
    <Logo/>
    </div>
    <div className='flex items-center justify-end w-[50%] p-3 md:hidden'>
    <HomeIcone/>    
    <HamburgerMenu/>
    </div>
    <div className='hidden md:flex md:justify-between md:min-w-[40%] md:m-auto ' >
      <NavbarItems href='/' txt='Home' />
      <NavbarItems href='/' txt='Products' />
      <NavbarItems href='/' txt='Shop' />
      <NavbarItems href='/about' txt='About' />
      <Button txt='Sign In'/>
      
    </div>
    </div>
    
   
  )
}

export default Navbar