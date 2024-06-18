export default function VideoIntro() {
    return (
        <main className="h-screen w-screen bg-white">
            <video className="h-full w-full object-fill" autoPlay muted>
                <source src="/intro.mp4" type="video/mp4" />
            </video>
        </main>
    )
}
