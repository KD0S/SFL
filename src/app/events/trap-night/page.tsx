'use client'
import React from "react"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Youtube from "react-youtube"


export default function TrapNight() {

    const opts = {
        height: '400',
        width: '800',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            loop: 1,
        },
    };

    return (
        <main className="bg-trap w-screen overflow-scroll">
            <Navbar color="trap" prevPage="HOME" prevPageLink="/home" />
            <img src="/trapblack.png" alt="trap" className="mx-auto mt-20 w-[450px]" />
            <p className="text-[#EB00FF] font-kelly text-[24px] w-[900px] mx-auto text-center mt-20 bg-black p-2 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-60">
                "TRAP NIGHT" isn't driven by a pursuit of fortune or fame; it's a manifestation of the unwavering love for the culture.
                <br />
                It's a gathering of minds, souls, and energies, all converging under the same roof.
                <br />
                This is more than a DJ set; it's an invitation to immerse yourself in a movement and a space where culture is
                celebrated.
            </p>
            <iframe className="rounded-2xl mx-auto m-20 shadow-lg shadow-[#EB00FF]" width="710" height="400" src="http://www.youtube.com/embed/-J6SdRomd_0?autoplay=1&loop=1"></iframe>
        </main >
    )
}

