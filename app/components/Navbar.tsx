import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-3'>
      <div className='md:hidden flex justify-between w-[100%] place-items-center border-gray-100 border-b-2 pb-3  max-w-sm mx-auto '>
        <Image src={"/logo.png"} height={80} width={80} alt='Pype Logo' />
        <p className='text-2xl font-semibold text-gray-600 font-sans'>Pype AI</p>
      </div>
      <div className='hidden md:flex justify-between w-[100%] border-gray-100 border-b-2 pb-3 px-[5%]'>
        <div className='flex place-items-center gap-8'>
          <Image src={"/logo.png"} height={80} width={80} alt='Pype Logo' />
          <p className='text-2xl font-semibold text-gray-600 font-sans'>Pype AI</p>
        </div>
        <div className='flex place-items-center gap-10'>
          <button>Features</button>
          <button className='py-3 px-4 bg-black text-gray-300 text-sm rounded-xl shadow-md' >Launch App</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar