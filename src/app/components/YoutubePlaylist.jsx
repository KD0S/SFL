'use client'
import React, { useContext } from 'react'
import PlaylistItem from './PlaylistItem.jsx'
import DataProvider, { DataContext } from '@/context/DataContext';

const YoutubePlaylist = () => {

    const {playlist} = useContext(DataContext);
    console.log(playlist)

  return (
    <div className='text-black h-[60%] flex-1 w-[500px] md:w-auto basis-auto md:h-full rounded-md overflow-hidden' style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
        <div className='px-2 py-2 flex justify-between bg-white items-center border-b opacity-100 overflow-hidden rounded-t-md '>
            <div className='flex items-center'>
                <div className='font-bold text-sm mr-1'>
                    SFL - 
                </div>
                <div  className='text-sm'>
                    {Object.values(playlist).length} videos
                </div>
            </div>
            <img src="/photos/YTLogo.png" alt="YTLogo" loading="lazy" className="h-[1rem]" />
        </div>
        <div className='h-full w-full my-0 bg-white bg-opacity-20 rounded-b-md p-2 pb-12 flex flex-col gap-2 overflow-y-scroll'>

        {Object.values(playlist).map((item) =>  <PlaylistItem embedId={item.embedId} title={item.title} channel={item.channel} date={item.daysAgoPublished} imgsrc={item.maxresThumbnail}/>)}
        
        </div>
    </div>
  )
}

export default YoutubePlaylist