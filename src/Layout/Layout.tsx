import React from 'react'
import { Inter } from "next/font/google";
import Navbar from '@/components/navbar/Navbar';
import { navbarprops } from '@/types/type';


const inter = Inter({ subsets: ["latin"] });

const Layout = ({children}:navbarprops) =>{
  return (
    <div className={`${inter.className}`}>
        <div className=''>
            <Navbar/>
        </div>
        <div className=''>{children}</div>
        
    </div>
  )
}

export default Layout