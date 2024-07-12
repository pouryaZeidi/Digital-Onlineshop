import Button from '@/components/Button'
import SignInput from '@/components/SignInput'
import React from 'react'

const signup = () => {
  return (
    <>
    <div className='w-[90%] sm:ml-3 ml-1  md:ml-6 '>
        <span 
        className='text-Primary text-opacity-50 flex justify-center text-nowrap md:w-[45%] mb-1   w-[55%]  border  lg:text-[34px] sm:text-[26px] rounded-2xl bg-red-300 bg-opacity-50 p-3'>
            Create a new   <span className='text-black ml-1 sm:ml-2 md:ml-3'>
             account</span></span>
    </div>
    <div className='mt-4 border rounded-lg w-[95%] sm:w-[80%] m-auto h-[calc(100vh-170px)] flex-col sm:flex-row flex sm: justify-between '>
        <div className=' w-[30%] mt-4 mb-4 flex flex-col  justify-around'>
        <SignInput txt={'Name'} placeholder={' Type Your Name'}/>
        <SignInput txt={'Family'} placeholder={'Type Your familyname'}/>
        <SignInput txt={'E-mail'} placeholder={'Type your E-mail'}/>
        <SignInput txt={'password'} placeholder={'Password'}/>
        <SignInput txt={'confirm password'} placeholder={'Confirm your password'}/>
        </div>
        <div className='w-[50%] h-[100%] flex items-center  justify-center  sm:ml-5'>
            <Button txt={'Submit'} onclick={function () {
                      throw new Error('Function not implemented.')
                  } } textSize={undefined}/>
        </div>
    </div>
            </>
  )
}

export default signup