'use client'

import { useState } from 'react';
import Footer from '../components/Footer'
import Tilt from 'react-parallax-tilt'



export default function Home() {

    

    const [playVid, setPlayVid] = useState(false);

    setTimeout(() => {
        setPlayVid(true);
    }, 2700);


    return (
        <main className={`overflow-hidden flex flex-col justify-center h-screen w-screen bg-cloud bg-cover bg-center animate-backgroundShift`}>
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
          
            <div className='z-10 h-full w-screen flex flex-1 justify-center items-center'>
                <p className="text-white text-[16px] font-kelly absolute top-6 left-1/2 transform -translate-x-1/2 font-bold">08/05/2024&nbsp;&nbsp;&nbsp;&nbsp;22:00 EST</p>
                <Tilt className='parallax-effect h-full w-full shadow-2xl' perspective={1500}>
                
                <div className='inner-element flex flex-col  justify-center grid place-content-center h-full w-full  my-5'>
                    <div className='flex flex-row'>
                    <div className='p-12 grid place-content-center'>
                        <button className='text-7xl px-96 py-10 text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>ABOUT</button>
                    </div>
                    </div>
                    <div className='flex justify-between gap-20'>
                        <button className='h-full text-7xl text-white italic  text-center font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>MUSIC</button>
                        <div className='rounded-2xl px-6 py-3'>
                            <h1 className="text-9xl text-white text-center font-univers italic font-bold tracking-wide hover:drop-shadow-glow">sfl</h1>
                        </div>
                        <button className='text-7xl text-white italic text-center font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>VIDEOS</button>
                    </div>
                    <div className='flex flex-row'>
                    <div className='p-12 grid place-content-center'>
                        <button className='text-7xl px-96 py-10 text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>EVENTS</button>
                    </div>
                    </div>
                </div>
                </Tilt>
            </div>
            <Footer></Footer>
        </main>
    )
}
