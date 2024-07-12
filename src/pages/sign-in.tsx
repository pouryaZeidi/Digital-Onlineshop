import Button from '@/components/Button'
import SignInput from '@/components/SignInput'
import Link from 'next/link';
import React from 'react'
import { MdSwitchAccount } from "react-icons/md";

const SignIn = () => {
  return (
    <div className=' flex flex-col w-[100%] bg-custom-gradient mt-2 justify-center items-center h-[calc(100vh-91px)] md:h-[calc(100vh-122.7px)]'>
          <div className='sm:bg-slate-100 w-[100%]  sm:w-[80%] h-[80%] mt-10 flex flex-col justify-around rounded-full'>
            <div className=' flex items-start flex-col sm:flex-row  justify-center  mt-10 rounded-full'>
              <span className=' text-[29px] sm:text-[40px]  bg-secondary bg-opacity-30 rounded-3xl p-5  font-bold font-serif  '>LOGIN</span>
              <span className=' text-[52px] sm:text-[80px] ml-16'><MdSwitchAccount /></span>
            </div>
          <div className='sm:ml-5 flex flex-col md:flex-row '>
          <SignInput txt={'User Name '} placeholder={ 'Type your Username'}></SignInput>
          <br />
          <SignInput txt={' Password '} placeholder={ 'Your Password'}></SignInput>
          </div>
          <div className='flex justify-center '>
          <Button txt={'SIGN IN'} onclick={function () {
            throw new Error('Function not implemented.');
          } } textSize='text-[40px]'/>
          <div className='m-3 p-2 '>
            <span className='mr-3'>Create an account :</span>
            <Link href='/sign-up' className='sm:text-2xl text-xl text-Primary hover:text-secondary '>"SIGN UP HERE"</Link>
          </div>
          </div>
        
          </div>
    </div>
  )
}

export default SignIn
    // <div className=' flex flex-col w-[100%] bg-custom-gradient mt-2  items-center h-[calc(100vh-91px)] md:h-[calc(100vh-122.7px)]'>
    //   <div className='my-16 m-auto flex flex-col justify-center border border-solid bg-white bg-opacity-35  rounded-full w-[70%] h-[100%]'>
    //   <div className=' flex justify-between items-center w-[100px]'>
    //   <span className='text-3xl w-24 ml-[200px]  mt-24  font-bold font-serif'>LOGIN</span>
    //   <span className='text-3xl'><MdSwitchAccount /></span>
    //   </div>
    //   <div className='flex mt-16 w-[800px]  ml-8 justify-between   '>
    //   <SignInput txt={'User Name '} placeholder={ 'Type your Username'}></SignInput>
    //   <SignInput txt={'Password'} placeholder={ 'Your Password'}></SignInput>
    //   </div>
    //   <div className=' w-[800px] flex justify-center m-8 '>
    //   <Button txt={'SIGN IN'} onclick={function () {} }></Button>
    //   </div>
    //   </div>
    // </div>