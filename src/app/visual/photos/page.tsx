import React from "react"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Link from "next/link"


export default function Visual() {

    return (
        <main className={`w-screen bg-visual-blur animate-fadeIn overflow-scroll`}>
            <Navbar color="visual" prevPage="HOME" prevPageLink="/home" />
            <h1 className='text-[48px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>PHOTOS</h1>
            <div className="flex flex-col p-10 gap-20">
                <div className="flex justify-between px-20">
                    <img src="/photos/1.png" alt="1" className="h-[600px]" loading="lazy" />
                    <img src="/photos/2.png" alt="2" className="h-[600px]" loading="lazy" />
                </div>
                <div className="flex justify-between px-20">
                    <img src="/photos/3.png" alt="3" className="h-[600px]" loading="lazy" />
                    <img src="/photos/4.png" alt="4" className="h-[600px]" loading="lazy" />
                </div>
                <div className="flex justify-between px-20">
                    <img src="/photos/5.png" alt="5" className="h-[600px]" loading="lazy" />
                    <img src="/photos/6.png" alt="6" className="h-[600px]" loading="lazy" />
                </div>

                <img src="/photos/7.png" alt="7" loading="lazy" className="h-[600px] w-[1000px] mx-auto" />
                <img src="/photos/8.png" alt="8" loading="lazy" className="h-[600px] w-[800px] mx-auto" />
                <img src="/photos/9.png" alt="9" loading="lazy" className="h-[600px] w-[1000px] mx-auto" />

                <div className="flex justify-between px-20">
                    <img src="/photos/10.png" alt="10" className="h-[600px]" loading="lazy" />
                    <img src="/photos/11.png" alt="11" className="h-[600px]" loading="lazy" />
                </div>

                <img src="/photos/12.png" alt="12" loading="lazy" className="h-[700px] mx-auto" />
                <img src="/photos/13.png" alt="13" loading="lazy" className="h-[700px] mx-auto" />
                <img src="/photos/14.png" alt="14" loading="lazy" className="h-[700px] mx-auto" />

                <div className="flex justify-between gap-4 px-20">
                    <img src="/photos/15.png" alt="15" className="h-[600px]" loading="lazy" />
                    <img src="/photos/16.png" alt="16" className="h-[500px] my-20" loading="lazy" />
                </div>

                <img src="/photos/17.png" alt="17" loading="lazy" className="h-[700px] mx-auto" />
                <img src="/photos/18.png" alt="18" loading="lazy" className="h-[700px] mx-auto" />

            </div>


        </main >
    )
}

