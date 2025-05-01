'use client'

import React, { ChangeEvent, useEffect } from 'react'
import CurrentTrackComponent from './CurrentTrackComponent'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'
import PlayButton from './PlayButton'
import { useState, useRef } from 'react'

export default function AudioPlayer() {

    const audioRef = useRef<HTMLAudioElement>(null)

    const [songId, setSongId] = useState<number>(1)
    const [triggerAudio, setTriggerAudio] = useState<boolean>(true)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPaused,setIsPaused] = useState(true);

    const [tracklist, setTracklist] = useState<string[]>(['onedove - CHOCKLAND (OFFICIAL MUSIC VIDEO)', 'DANN¥ & AbiShake - INTERNET CASH (Performance Video)', 'SFL Family (DANN¥ & AbiShake) (Audio Video)','Duski - Diego Costa (Official Video)']);

    const mod = (n : number, m : number) => ((n % m) + m) % m;

    function handlePausePlay() {
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) {
            audio.play();
            return false;
        } else {
            audio.pause();
            return true;
        }
    }

    function handleSongChange(isNext: boolean) {

        switch(isNext) {
            case true: setSongId((prev) => { return mod((prev+1),tracklist.length) })
            break; // Increment songId and wrap around if it exceeds the length of the tracklist
            case false: setSongId((prev) => { return mod((prev-1),tracklist.length) }) 
            break;// Decrement songId and wrap around if it goes below 0
        }
        setTriggerAudio(!triggerAudio) // Increment num to trigger useEffect
    }

    function handleNextSong () {
        setSongId((prev) => { return mod((prev+1),tracklist.length) }) // Increment songId and wrap around if it exceeds the length of the tracklist
        setTriggerAudio(!triggerAudio) // Increment num to trigger useEffect
    }

    const formatTime = (time : number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };

    useEffect(() => {

    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
        setCurrentTime(audio.currentTime);
    };

    const setAudioData = () => {
        setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('play', () => setIsPaused(false));
    audio.addEventListener('pause', () => setIsPaused(true));
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('ended', handleNextSong);

    return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('loadedmetadata', setAudioData);
        audio.removeEventListener('ended', handleNextSong);
        audio.removeEventListener('play', () => setIsPaused(false));
        audio.removeEventListener('pause', () => setIsPaused(true));
    };
    }, []); 

    // This function will be called when the songId changes,  It will update the audio source and play the new song
    useEffect(() => {

        var audio = audioRef.current;

        if (!audio) return;

        audio.src = `/audio/tracklist/${tracklist[songId]}.mp3` // Update the audio source when songId changes
        audio.load() // Load the new audio source
    

        const handleCanPlay = () => {
            audioRef.current?.play().catch((error) => console.error('Playback error:', error));
          };
      
          audioRef.current?.addEventListener('canplaythrough', handleCanPlay);
      
          return () => {
            audioRef.current?.removeEventListener('canplaythrough', handleCanPlay);
          };

    },[triggerAudio])
    

    function handleSliderChange(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
    }

    return (
            <div className='bg-white border border-black drop-shadow-3xl p-3 rounded-xl flex flex-row items-center'>
                {/*
                Let's keep it simple: 
                - We need an audioref (for playing audio)
                - We need a songId (for the current song) - we can even have this as filename ([songId]-[songName].mp3)
                */}

                <audio ref={audioRef} src={`/audio/tracklist/CHOCKLAND.mp3`} autoPlay={true}/>

                <div className='flex flex-row items-center justify-center gap-2 mr-3'>
                    <PreviousButton onClick={handleSongChange}/>
                    <PlayButton onClick={handlePausePlay} isPaused={isPaused}/>
                    <NextButton onClick={handleSongChange}/>
                </div>

                <CurrentTrackComponent tracklist={tracklist} songId={songId}/>

                {/* <div className="mt-4 w-full flex items-center gap-2">
                    <span className="font-univers text-xs text-black p-[0.1rem] pl-[0.4rem] pr-[0.5rem]">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        step="0.1"
                        value={currentTime}
                        onChange={handleSliderChange}
                        className="w-full cursor-pointer accent-black"
                    />
                    <span className="font-univers text-xs text-black p-[0.1rem] pl-[0.4rem] pr-[0.5rem]">{formatTime(duration)}</span>
                </div> */}

                {/* <AudioSlider/> */}
                
                {/* <ShuffleButton/>
                <PreviousButton/>
                <PlayButton/>
                <NextButton/>
                <LoopButton/>
                <AudioSlider/> */}
                {/* <AudioSlider/> */}
            </div>
    )
}
