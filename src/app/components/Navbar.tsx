'use client'
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react'

type navProps = {
    color: string,
    prevPage: string,
    prevPageLink: string

}

export default function Navbar({ color, prevPage, prevPageLink }: navProps) {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 30 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []); useEffect(() => {

    }, [])

    const colourScheme: { [key: string]: string } = {
        'cloud': 'text-[#937666]',
        'trap': 'text-[#EB00FF]',
        'visual': 'text-[#b4708e]'
    }

    return (
        <nav className='top-0 w-full h-12 bg-black absolute flex justify-between px-4 z-10'>
            <Link className='my-auto' href={`${prevPageLink}`}>
                <button className='font-bold font-univers drop-shadow-xl text-[18px] hover:text-[#937666] transition-all'>{`${prevPage}`}</button>
            </Link>
            <span className={`${colourScheme[color]} text-[16px] font-kelly my-auto ml-[-40px]`}>
                {dateTime.toLocaleDateString("en-GB")}&nbsp;&nbsp;{String(dateTime.getUTCHours() + 3).padStart(2, "0")}:{String(dateTime.getUTCMinutes()).padStart(2, "0")}</span>
            <button className='font-bold font-univers drop-shadow-xl text-[18px]  hover:text-[#937666] transition-all'>SHOP</button>
        </nav>
    )
}

