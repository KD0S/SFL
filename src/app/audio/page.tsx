'use client'
import React, { useContext, useEffect } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from "next/link"
import VideoPlayer from "../components/VideoPlayer"
import YoutubePlaylist from "../components/YoutubePlaylist"
import { DataContext } from '@/context/DataContext'


export default function Home() {

    const { audioWorks, embedId, setEmbedId } = useContext(DataContext);

    useEffect(()=>{

        setEmbedId(audioWorks[0].embedId);

    }, [audioWorks])

    return (
        <main className={`fixed h-full w-full bg-cloud bg-cover bg-center animate-backgroundShift`}>
            <Navbar color="cloud" prevPage="HOME" prevPageLink="/home" />
                <h1 className='text-[2.5rem] mt-20 mb-4 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>AUDIO</h1>
                <div className="mx-6 flex justify-center flex-wrap md:flex-nowrap gap-4  gap-10 h-[70%]">
                <VideoPlayer embedId={embedId}/>
                <YoutubePlaylist playlist={audioWorks}/>
                </div>
        </main >
    )
}

