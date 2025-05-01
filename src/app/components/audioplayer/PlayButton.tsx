import React, { useState } from 'react'

type PlayButtonProps = {
  onClick: () => void;
  isPaused: boolean;
}

const PlayButton = ({onClick, isPaused}: PlayButtonProps) => {

    const handleClick = () => {
        // Logic to play the current song
         onClick();
        console.log(isPaused); // Log the current state of isPaused
    };

  return (
    <button onClick={handleClick} className='items-center justify-center rounded-full active:bg-black/20 hover:scale-105 hover:shadow-lg transition duration-200 ease-in-out'>
        {isPaused ? (<img className='w-8' src={`/play-button.png`}></img>) : (<img className='w-8' src={`/pause-button.png`}></img>)}
    </button>
  )
}

export default PlayButton