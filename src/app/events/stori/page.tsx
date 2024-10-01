import React from "react"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"


export default function Stori() {

    return (
        <main className={`fixed h-full w-full bg-stori bg-cover bg-center animate-fadeIn`}>
            <Navbar color="stori" prevPage="HOME" prevPageLink="/home" />
            <div className="absolute w-screen">
                <h1 className='text-[48px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>STORI</h1>
                <p className="text-white font-kelly text-[24px] w-[850px] mx-auto text-center mt-20">
                    An event space for brands, artists, consumers, art and fashion lovers.
                    This is a great opportunity to get to know the true scene in the city.
                    The event also allows you to network and connect with like minded individuals and possibly end up creating art together in the future.
                </p>
            </div>
            <Footer />
        </main >
    )
}

