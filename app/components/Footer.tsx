import React from 'react'
import { ImLinkedin } from "react-icons/im";


const Footer = () => {
  return (
    <footer className='pt-5 pb-8 border-t-2  px-10 border-gray-100 mt-10 flex flex-col gap-4 md:flex-row justify-between place-items-center '>
        <p className='text-sm'>© Singularity Corp Pvt. Ltd. 2024. All rights reserved. Privacy Policy.</p>
        <ImLinkedin size={22} className='' color='gray'/>
    </footer>
  )
}

export default Footer