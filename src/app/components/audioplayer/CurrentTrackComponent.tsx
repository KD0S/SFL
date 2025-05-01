import React, { useState } from 'react'
import SongSelectionDropdown from './SongSelectionDropdown'
import Marquee from 'react-fast-marquee';

type CurrentSongProps = {
  tracklist: string[];
  songId: number;
};

const CurrentTrackComponent = ({ tracklist, songId } : CurrentSongProps) => {

  return (
    <div>
      <div className='flex flex-row gap-2'>
        <h1 className='font-univers text-xs bg-black text-white p-1'>Now Playing:</h1>
       
        <h1 className='font-univers text-xs bg-black text-white p-1 w-[15rem]'>
        <Marquee>
        <div className='mr-5'>{tracklist[songId]}</div>
        </Marquee>
        </h1> 
        {/* <SongSelectionDropdown/> */}
      </div>
    </div>
  );
};

export default CurrentTrackComponent