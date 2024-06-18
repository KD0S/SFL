import Link from "next/link"

export default function MainPage() {



    return (
        <main className="bg-black h-screen w-screen grid place-content-center animate-fadeIn" >
            <div>
                <button className="text-5xl bg-btnpurple w-[290px] h-[77px] font-bold italic rounded-full grid place-content-center">
                    <Link href="/home">
                        <img src="./start.png" alt="start" width='180px' height='63px' />
                    </Link>
                </button>
                <p className="text-center text-yellow-200 m-10 text-md font-kelly animate-pulse">08/05/2024 22:00 EST</p>
            </div>
        </main >
    )
}
