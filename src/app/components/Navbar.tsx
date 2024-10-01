'use client'
import { transformSync } from 'next/dist/build/swc';
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
    const [isHoveredLink1, setIsHoveredLink1] = useState(false);
    const [isHoveredLink2, setIsHoveredLink2] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 30 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])

    const transitionStyle = {
        transition: 'color 0.4s ease-in-out',
    };

    const colourHexCode: { [key: string]: string } = {
        'cloud': '#937666',
        'trap': '#EB00FF',
        'visual': '#b4708e',
        'stori': '#ff8726'
    }

    const colourScheme: { [key: string]: string } = {
        'cloud': 'text-[#937666]',
        'trap': 'text-[#EB00FF]',
        'visual': 'text-[#b4708e]',
        'stori': 'text-[#ff8726]'
    }

    return (
        <nav className='top-0 w-full h-12 bg-black absolute flex justify-between z-10 px-5'>

            <Link href={prevPageLink} onMouseEnter={() => setIsHoveredLink1(true)} onMouseLeave={() => setIsHoveredLink1(false)} className={`w-24 my-auto text-start font-bold font-univers drop-shadow-xl text-[18px]transition-all`} style={isHoveredLink1 ? {
                ...transitionStyle,
                'color': colourHexCode[color]
            } : { 'color': 'white' }}>{`${prevPage}`}</Link>

            <span className={`${colourScheme[color]} text-[16px] font-kelly my-auto mx-auto`}>
                {dateTime.toLocaleDateString("en-GB")}&nbsp;&nbsp;{String(dateTime.getUTCHours() + 3).padStart(2, "0")}:{String(dateTime.getUTCMinutes()).padStart(2, "0")}</span>

            <Link href={"/shop"} onMouseEnter={() => setIsHoveredLink2(true)} onMouseLeave={() => setIsHoveredLink2(false)} className={`w-24 my-auto text-end font-bold font-univers drop-shadow-xl text-[18px]transition-all`} style={isHoveredLink2 ? {
                ...transitionStyle,
                'color': colourHexCode[color]
            } : { 'color': 'white' }}>SHOP</Link>

        </nav>
    )
}

