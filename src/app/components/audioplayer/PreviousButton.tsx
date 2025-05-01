import React from 'react'

type PreviousButtonProps = {
  onClick: (isNext: boolean) => void;
}

const PreviousButton = ({onClick} : PreviousButtonProps) => {

    const handleClick = () => {
        onClick(false); // Call the onClick function with false to indicate previous song
    };

  return (
    <button onClick={handleClick} className='items-center justify-center pl-1 pr-2 rounded-full active:bg-black/20 hover:scale-110 transition duration-200 ease-in-out'>
        <img className='w-8' src={`/previous.png`}></img>
    </button>
  )
}

export default PreviousButton