import React from "react"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Link from "next/link"


export default function Stew() {

    return (
        <main className={`fixed h-full w-full bg-cloud bg-cover bg-center animate-backgroundShift`}>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-1"></div>
            <Navbar color="cloud" prevPage="HOME" prevPageLink="/home" />
            <div className="absolute w-screen">
                <h1 className='text-[48px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>808'S IN THE STEW</h1>
                <p className="text-white font-kelly text-[24px] w-full mx-auto text-center mt-20 p-5">
                    Series of videos showing the process of making music from the perspective of artists.
                    <br />
                    The series showcases artists from different backgrounds and genres coming together to make a track.</p>
            </div>
            <Footer />
        </main >
    )
}

