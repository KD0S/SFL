
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from "next/link"


export default function Home() {

    return (
        <main className={`fixed h-full w-full bg-cloud bg-cover bg-center animate-backgroundShift`}>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-1"></div>
            <Navbar color="cloud" prevPage="HOME" prevPageLink="/home" />
            <div className="absolute w-screen">
                <h1 className='text-[48px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>AUDIO</h1>
                <div className="flex flex-col mt-[100px] gap-4">
                    <Link href="/audio/sfx" className='text-[28px] mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]'>SFX</Link>
                    <Link href="/audio/production" className='text-[28px] mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]'>PRODUCTION</Link>
                    <Link href="/audio/mixnmaster" className='text-[28px] mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]'>MIX & MASTER</Link>
                </div>
            </div>
            <Footer />
        </main >
    )
}

