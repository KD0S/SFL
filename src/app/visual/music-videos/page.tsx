'use client'
import React, { useContext, useEffect } from 'react'
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Link from "next/link"
import YoutubePlaylist from '@/app/components/YoutubePlaylist'
import VideoPlayer from '@/app/components/VideoPlayer'
import { DataContext } from '@/context/DataContext'

const page = () => {

    const { musicVideos, embedId, setEmbedId } = useContext(DataContext);

    useEffect(()=>{

        setEmbedId(musicVideos[0].embedId);

    }, [musicVideos])

    return (
        <main className={`fixed h-full w-full bg-musicvid bg-cover bg-center animate-fadeIn`}>
            <Navbar color="visual" prevPage="HOME" prevPageLink="/home" />
            <h1 className='text-[2rem] mt-20 mb-8 mx-auto w-fit text-white font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>MUSIC VIDEOS</h1>
            <div className="mx-6 flex justify-center flex-wrap md:flex-nowrap gap-4  gap-10 h-[70%]">
            <VideoPlayer embedId={embedId}/>
            <YoutubePlaylist playlist={musicVideos}/>
            </div>
        </main >
    )
}

export default page