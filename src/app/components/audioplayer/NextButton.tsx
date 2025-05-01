import React from 'react'

type NextButtonProps = {
    onClick: (isNext: boolean) => void;
}

const NextButton = ({onClick} : NextButtonProps) => {

    const handleClick = () => {
        onClick(true); // Call the onClick function with true to indicate next song
    };

  return (
    <button onClick={handleClick} className='items-center justify-center pl-2 pr-1 rounded-full active:bg-black/20 hover:scale-110 transition duration-200 ease-in-out'>
            <img className='w-8' src={`/next-button.png`}></img>
    </button>
  )
}

export default NextButton