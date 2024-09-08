"use client"
import React from 'react'
import VideoComponent from '../components/VideoComponent'
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from '@/context/ThemeContext';


const HeroSection = () => {
    const { isDarkMode: isOn } = useTheme();

    return (
        <header className='pt-16 flex flex-col gap-20'>
            <div className='flex flex-col gap-14 max-w-[38rem] mx-auto p-5'>
                <h1 className={`mx-auto text-center text-4xl md:text-6xl  md:font-bold ${isOn?"text-purple-500":""}`}>Build, Evaluate and Improve Prompts 10x faster</h1>
                <p className=' text-center mx-auto'>Empower your team to build, evaluate, and deploy high-performing prompts for LLM-based applications. Pype streamlines collaboration, version control, and performance analysis, helping you deliver reliable AI solutions faster.</p>
            </div>
            <VideoComponent videoLink='https://www.youtube.com/embed/-y_KrosGWaU' />
            <div className='flex justify-center md:gap-10 gap-5'>
                <button className='md:py-3 md:px-16 py-5 px-7 bg-black text-gray-300 text-sm rounded-xl shadow-md'>Launch App</button>
                <button className='flex  gap-3 place-items-center py-5 px-5 md:py-3 md:px-14 bg-blue-600 text-white text-sm rounded-xl shadow-md'>Book a demo
                    <span>
                    <FaArrowRight />
                    </span>
                </button>
            </div>
        </header>
    )
}

export default HeroSection