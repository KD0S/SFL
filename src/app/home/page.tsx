import React from 'react'

export default function Home() {
    return (
        <main className='h-screen w-screen bg-cloud bg-cover bg-center animate-backgroundShift'>
            <div className='h-full w-full'>
                <p className="text-white text-[16px] font-kelly absolute top-6 left-1/2 transform -translate-x-1/2 font-bold">08/05/2024 22:00 EST</p>
                <div className='grid place-content-center min-h-full'>
                    <h1 className="text-6xl font-bold bg-black rounded-2xl px-6 py-3 tracking-wider">sfl</h1>
                </div>
            </div>
        </main>
    )
}
