import { useState } from "react";

export default function VideoIntro() {
    const [text, setText] = useState('stewforlife');

    setTimeout(() => {
        setText('sfl')
    }, 2000);

    return (
        <main className="h-screen w-screen bg-black grid place-content-center">
            <h1 className="text-6xl text-white font-univers font-bold italic tracking-wide animate-fadeInOut">
                {text}
            </h1>
        </main >
    )
}
