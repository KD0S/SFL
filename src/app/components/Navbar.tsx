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
        <nav className='top-0 w-full h-12 bg-black absolute flex justify-between z-10 px-5'>
            <Link href={prevPageLink} className='w-24 my-auto font-bold font-univers drop-shadow-xl text-[18px] hover:text-[#937666] transition-all'>{`${prevPage}`}</Link>
            <span className={`${colourScheme[color]} text-[16px] font-kelly my-auto mx-auto`}>
                {dateTime.toLocaleDateString("en-GB")}&nbsp;&nbsp;{String(dateTime.getUTCHours() + 3).padStart(2, "0")}:{String(dateTime.getUTCMinutes()).padStart(2, "0")}</span>
            <Link href={"/shop"} className='w-24 my-auto font-bold font-univers drop-shadow-xl text-[18px]  hover:text-[#937666] transition-all'>SHOP</Link>
        </nav>
    )
}

