import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from "next/link"


export default function Events() {

    return (
        <main className={`fixed h-full w-full bg-cloud bg-cover bg-center animate-backgroundShift bg-blend-darken`}>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-2"></div>
            <Navbar color="cloud" prevPage="HOME" prevPageLink="/home" />
            <h1 className='text-[48px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>EVENTS</h1>
            <div className="flex flex-col w-fit mx-auto mt-[150px] gap-10">
                <Link href={'/events/stori'} className='text-[24px] text-center mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]'>STORI</Link>
                <Link href={'/events/trap-night'} className='text-[24px] text-center mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]'>TRAP NIGHT</Link>
            </div>
            <Footer />
        </main >
    )
}

