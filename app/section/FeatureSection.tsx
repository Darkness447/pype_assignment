import { features } from '@/lib/companylogo'
import Image from 'next/image'
import React from 'react'
import FeatureBox from '../components/FeatureBox'

const FeatureSection = () => {
    return (
        <div className='flex flex-col gap-5 p-5 max-w-[78rem] mx-auto'>
            <button className='flex gap-1 place-items-center mx-auto border-2 rounded-2xl py-1 px-2 shadow-inner'>
                <Image src={"/3start.svg"} height={15} width={15} alt="3star" />
                Features</button>
            <h1 className='text-center text-3xl font-medium'>Turbocharge your LLM apps development</h1>
            <div className='grid gap-7  justify-center items-start grid-cols-1 md:grid-cols-2'>
                {
                    features.map((item, index) => {
                        return (
                            <div className='flex items-center justify-center'>
                                <FeatureBox
                                    description={item.description}
                                    name={item.title}
                                    key={index}
                                    link={item.link}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default FeatureSection