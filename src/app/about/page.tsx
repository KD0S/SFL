import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from "next/link"


export default function About() {

    return (
        <main className={`fixed h-full w-full bg-cloud bg-cover bg-center animate-backgroundShift`}>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-1"></div>
            <Navbar color="cloud" prevPage="HOME" prevPageLink="/home" />
            <div className="absolute w-screen">
                <h1 className='text-[48px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow'>ABOUT</h1>
                <p className="text-white font-kelly text-[24px] w-[579px] mx-auto text-center mt-4">
                    Founded by DANN¥ and Abi in the summer of 2023,
                    SFL quickly became a multi creative production house
                    specializing in audio, visual, merchandise and events.
                    <br />
                    <br />
                    “WE DO IT ALL”</p>
                <div className="flex justify-between px-40">
                    <div>
                        <Link href={"/about/sfl-artists"}>
                            <button className='text-[24px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]'>SFL ARTISTS</button>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/about/sfl-family"}>
                            <button className='text-[24px] mt-20 mx-auto w-fit text-white italic font-bold font-univers drop-shadow-3xl hover:drop-shadow-glow hover:text-[#e7ccbe]'>SFL FAMILY</button>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </main >
    )
}

