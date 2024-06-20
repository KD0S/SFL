'use client'

import { useState } from 'react';
import Footer from '../components/Footer'

export default function Home() {

    const [playVid, setPlayVid] = useState(false);

    setTimeout(() => {
        setPlayVid(true);
    }, 2700);


    return (
        <main className={`flex flex-col h-screen w-screen bg-cloud bg-cover bg-center animate-backgroundShift`}>
            {playVid?
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                            <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            >
                                <source src="/videos/CompressedClouds.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                :<div></div>
            }
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-5"></div>

            <div className='z-10 h-5/6 w-full'>
                <p className="text-white text-[16px] font-kelly absolute top-6 left-1/2 transform -translate-x-1/2 font-bold">08/05/2024&nbsp;&nbsp;&nbsp;&nbsp;22:00 EST</p>
                <div className='grid place-content-center h-full w-full my-5'>
                    <div className='p-12 grid place-content-center'>
                        <button className='text-5xl text-white italic font-bold font-univers drop-shadow-3xl'>ABOUT</button>
                    </div>
                    <div className='flex justify-between gap-20'>
                        <button className='text-5xl text-white italic  text-center font-bold font-univers drop-shadow-3xl'>MUSIC</button>
                        <div className='bg-black rounded-2xl px-6 py-3 shadow-2xl'>
                            <h1 className="text-4xl text-white text-center font-univers italic font-bold tracking-wide">sfl</h1>
                        </div>
                        <button className='text-5xl text-white italic text-center font-bold font-univers drop-shadow-3xl'>VIDEOS</button>
                    </div>
                    <div className='p-12 grid place-content-center'>
                        <button className='text-5xl text-white italic font-bold font-univers drop-shadow-3xl'>EVENTS</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}
