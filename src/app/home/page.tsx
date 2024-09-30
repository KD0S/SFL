'use client'

import Tilt from 'react-parallax-tilt'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from 'next/link'

export default function Home() {

    return (
        <main className={`fixed flex flex-col justify-center h-screen w-screen bg-cloud bg-cover bg-center animate-backgroundShift`}>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-2"></div>
            <Navbar color='cloud' prevPage='CONTACT' prevPageLink='/contact' />
            <Tilt tiltMaxAngleY={20} tiltMaxAngleX={20} perspective={1500} transitionEasing='cubic-bezier(.5,.98,.52,.99)'>
                <div>
                    <div className='flex justify-center flex-row'>
                        <Link href={'/about'}>
                            <button className='text-[48px] w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>ABOUT</button>
                        </Link>
                    </div>
                    <div className='w-full flex justify-between lg:flex-nowrap flex-wrap'>
                        <div className='flex-1 flex md:justify-end justify-center md:min-w-0 min-w-full'>
                            <Link className='my-auto' href={'/audio'}>
                                <button className='text-[48px] text-white italic  text-center font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>AUDIO</button>
                            </Link>
                        </div>
                        <div className='flex-1 flex justify-center mx-20 my-20 items-center'>
                            <Link href={'/concepts'}>
                                <button className="text-[36px] text-white font-univers pr-5 italic hover:drop-shadow-glow bg-black p-3 rounded-lg">CONCEPTS</button>
                            </Link>
                        </div>
                        <div className='flex-1 flex md:justify-start justify-center md:min-w-0 min-w-full'>
                            <Link className='my-auto' href={'/visual'}>
                                <button className='text-[48px] text-white italic text-center font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>VISUAL</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center'>
                        <Link href={'/events'}>
                            <button className='text-[48px] text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>EVENTS</button>
                        </Link>
                    </div>
                </div>
            </Tilt>
            <Footer />
        </main >
    )
}
