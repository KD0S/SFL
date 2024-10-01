import React from 'react'

export default function Footer() {
    return (
        <div className='flex w-full justify-end absolute bottom-0'>
            <div className='flex-col p-4'>
                <img className='w-[150px] mx-auto' src="./mixer.png" alt="mixer" />
                <span className='text-white font-universe drop-shadow-3xl italic text-[14px] font-bold'>DUSKI - GHETTOFLUNSSA</span>
            </div>
        </div>
    )
}
