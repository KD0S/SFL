import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from "next/link"

export default function Concepts() {

    return (
        <main className={`fixed h-full w-full bg-cloud bg-cover bg-center animate-backgroundShift`}>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-1"></div>
            <Navbar color="cloud" prevPage="HOME" prevPageLink="/home" />
            <div className="absolute w-screen">
                <h1 className='text-[48px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>CONCEPTS</h1>
                <div className="w-full flex mt-20 p-20 flex-col lg:flex-row">
                    <Link className='mx-auto w-fit flex-1 text-[24px]  text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]' href={"/concepts/808s-in-the-stew"}>
                        808'S IN THE STEW
                    </Link>
                    <Link className='mx-auto my-4 lg:my-0 flex-1 w-fit text-[24px] text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]' href={"/concepts/sfl-selecta"}>
                        SFL SELECTA
                    </Link>
                    <Link className='mx-auto flex-end w-fit text-[24px] text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]' href={"/concepts/in-the-views"}>
                        IN THE VIEWS
                    </Link>
                </div>

            </div>
            <Footer />
        </main >
    )
}

