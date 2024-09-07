import React from 'react'
import Image from 'next/image'

interface FeatureBoxProps {
    name: String,
    description: String,
    link?: string 
}

const FeatureBox = ({ name, description, link }: FeatureBoxProps) => {
    console.log(link)
    return (
        <div className=' w-full  border-2 rounded-xl '>
            <div className='p-10 flex flex-col gap-2'>
                <h1 className='text-left text-xl font-bold'>{name}</h1>
                <p className='text-left text-md text-gray-500 font-medium'>{description}</p>
            </div>
            {link  ?
                <div className='relative bottom-0 right-0 h-96 w-[90%] ml-auto'>
                    <Image src={link} fill className='rounded-xl' alt={link} />
                </div> : ""
            }
        </div>
    )
}

export default FeatureBox