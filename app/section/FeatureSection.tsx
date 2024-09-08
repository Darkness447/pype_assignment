"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FeatureBox from '../components/FeatureBox'
import { data } from '../query'


interface FeatureBoxProps {
    title: string,
    description: string,
    link?: string,
    path?: string
}

const FeatureSection: React.FC = () => {

    const [features, setFeatures] = useState<FeatureBoxProps[]>([]);

    useEffect(() => {

        (async function () {
            const response = await data();
            // @ts-expect-error response
            setFeatures(response);
        }
        )()

    }, [])

    return (
        <div className='flex flex-col gap-5 p-5 max-w-[78rem] mx-auto'>
            <button className='flex gap-1 place-items-center mx-auto border-2 rounded-2xl py-1 px-2 shadow-inner'>
                <Image src={"/3start.svg"} height={15} width={15} alt="3star" />
                Features</button>
            <h1 className='text-center text-3xl font-medium'>Turbocharge your LLM apps development</h1>
            <div className='flex flex-col justify-center gap-7 md:flex-row'>
                <div className='flex flex-col gap-7'>
                    {
                        features ? features.slice(0, features.length / 2).map((item, index) => {
                            return (
                                <div className='flex items-start ' key={index}
                                >
                                    <FeatureBox
                                        description={item.description}
                                        name={item.title}
                                        link={item?.link}
                                        path={item?.path}
                                    />
                                </div>
                            );
                        }) : ""
                    }
                </div>
                <div className='flex flex-col gap-7'>
                    {
                        features ? features.slice((features.length / 2)).map((item, index) => {
                            return (
                                <div className='flex items-start ' key={index}
                                >
                                    <FeatureBox
                                        description={item.description}
                                        name={item.title}
                                        link={item?.link}
                                        path={item?.path}
                                    />
                                </div>
                            );
                        }) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default FeatureSection