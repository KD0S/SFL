import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from "next/link"


export default function Visual() {

    return (
        <main className={`fixed h-full w-full bg-visual bg-cover bg-center animate-fadeIn`}>
            <Navbar color="visual" prevPage="HOME" prevPageLink="/home" />
            <h1 className='text-[48px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>VISUAL</h1>
            <div className="flex flex-col w-fit mx-auto mt-[150px] gap-10">
                <Link href={'/visual/photos'} className='text-[24px] text-center mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#90384b]'>PHOTOS</Link>
                <Link href={'/visual/music-videos'} className='text-[24px] text-center mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#90384b]'>MUSIC VIDEOS</Link>
            </div>

            <Footer />
        </main >
    )
}

