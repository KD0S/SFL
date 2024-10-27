"use client"

import React, { useContext, useEffect } from "react"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Link from "next/link"
import VideoPlayer from "@/app/components/VideoPlayer"
import YoutubePlaylist from "@/app/components/YoutubePlaylist"
import { DataContext } from "@/context/DataContext"


export default function Stew() {

    const { stew808, embedId, setEmbedId } = useContext(DataContext);

    useEffect(()=>{

        setEmbedId(stew808[0].embedId);

    }, [stew808])

    return (
        <main className={`fixed h-full w-full bg-cloud bg-cover bg-center animate-backgroundShift`}>
            {/* <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-1"></div> */}
            <Navbar color="cloud" prevPage="HOME" prevPageLink="/home" />
            {/* <div className="absolute w-screen">
                <h1 className='text-[48px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>808'S IN THE STEW</h1>
                <p className="text-white font-kelly text-[24px] w-full mx-auto text-center mt-20 p-5">
                    Series of videos showing the process of making music from the perspective of artists.
                    <br />
                    The series showcases artists from different backgrounds and genres coming together to make a track.</p>
            </div> */}

            <h1 className='text-[1.5rem] mt-[5rem] mb-0 pb-0 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>808'S IN THE STEW</h1>
            <p className="text-white font-kelly text-[0.9rem] w-full mx-auto text-center p-5 pt-0">
            Series of videos showing the process of making music from the perspective of artists.
            The series showcases artists from different backgrounds and genres coming together to make a track.</p>
                

            <div className="mx-6 flex justify-center flex-wrap md:flex-nowrap gap-4  gap-10 h-[70%]">
            <VideoPlayer embedId={embedId}/>
            <YoutubePlaylist playlist={stew808}/>
            </div>
            {/* <Footer /> */}
        </main >
    )
}

