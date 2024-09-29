'use client'

import Tilt from 'react-parallax-tilt'

export default function Home() {
    return (

        <main className={`fixed flex flex-col justify-center h-screen w-screen bg-cloud bg-cover bg-center animate-backgroundShift`}>

            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-2"></div>

            <nav className='top-0 w-full h-12 bg-black absolute flex justify-between px-4 z-10'>
                <button className='font-bold font-univers drop-shadow-xl text-[18px] hover:text-[#937666] transition-all'>CONTACT</button>
                <span className="text-white border-solid text-[16px] font-kelly my-auto">08/05/2024&nbsp;&nbsp;&nbsp;&nbsp;22:00 EST</span>
                <button className='font-bold font-univers drop-shadow-xl text-[18px]  hover:text-[#937666] transition-all'>SHOP</button>
            </nav>

            <div className='fixed top-0 left-4 w-full h-full flex flex-col flex-1 justify-center items-center'>

                <Tilt tiltMaxAngleY={20} tiltMaxAngleX={20} perspective={1500} transitionEasing='cubic-bezier(.5,.98,.52,.99)'>
                    <div className='w-3/4 mx-auto flex-col justify-center grid place-content-center'>
                        <div className='flex justify-center flex-row'>
                            <button className='text-[48px] w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>ABOUT</button>
                        </div>
                        <div className='w-screen flex justify-between lg:flex-nowrap flex-wrap'>
                            <div className='flex-1 flex md:justify-end justify-center md:min-w-0 min-w-full'>
                                <button className='text-[48px] text-white italic  text-center font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>MUSIC</button>
                            </div>
                            <div className='flex-1 flex justify-center mx-20 my-20 items-center'>
                                <h1 className="text-[36px] text-white font-univers pr-5 italic hover:drop-shadow-glow bg-black p-3 rounded-lg">CONCEPTS</h1>
                            </div>
                            <div className='flex-1 flex md:justify-start justify-center md:min-w-0 min-w-full'>
                                <button className='text-[48px] text-white italic text-center font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>VIDEOS</button>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <button className='text-[48px] text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>EVENTS</button>
                        </div>
                    </div>
                </Tilt>
            </div>
        </main>
    )
}
