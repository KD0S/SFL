'use client'
import React from "react"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Youtube from "react-youtube"
import Link from "next/link"


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
            <iframe className="mx-auto shadow-xl shadow-[#EB00FF] my-20 rounded-xl" width="710" height="400" src="https://www.youtube.com/embed/-J6SdRomd_0?si=LNxcxG8AOZXP_QGG&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe>
            <div className="h-[500px] m-10 overflow-hidden shadow-2xl shadow-[black] rounded-md transition-all">
                <div className="flex h-full w-[2700px] animate-slideshow">
                    <img src="/trapnight-photos/1.jpg" alt="1" />
                    <img src="/trapnight-photos/2.jpg" alt="2" />
                    <img src="/trapnight-photos/3.jpg" alt="1" />
                    <img src="/trapnight-photos/4.jpg" alt="1" />
                    <img src="/trapnight-photos/5.jpg" alt="1" />
                    <img src="/trapnight-photos/6.jpg" alt="1" />
                    <img src="/trapnight-photos/7.jpg" alt="1" />
                    <img src="/trapnight-photos/8.jpg" alt="1" />
                    <img src="/trapnight-photos/9.jpg" alt="1" />
                    <img src="/trapnight-photos/10.jpg" alt="1" />
                    <img src="/trapnight-photos/11.jpg" alt="1" />
                </div>
            </div>
            <a href="https://www.instagram.com/stewforlife/">
                <img src="/insta.png" alt="insta-icon" className="mx-auto mb-4 w-[30px] hover:bg-[#dfaee3] rounded-lg transition-all hover" />
            </a>
        </main >
    )
}

