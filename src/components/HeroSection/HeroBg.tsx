import React from 'react'

const HeroBg = () => {
  return (
    <>
      <div className='backd absolute top-0 left-0 w-full sm:w-full h-[100vh] z-20'> </div>
        <div className="w-[100%] h-[100vh] flex justify-center items-center absolute  overflow-hidden  top-[0px] left-0  opacity-70 bg-no-repeat">
        <img src="/blob.svg" alt="blob" className=' scale-50 animate-spin-slow ' />
      </div>
    </>
  )
}

export default HeroBg
