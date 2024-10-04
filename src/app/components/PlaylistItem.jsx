'use client'
import DataProvider, { DataContext } from '@/context/DataContext';
import React, { useContext, useEffect, useState } from 'react'


const PlaylistItem = (props) => {

  const {setEmbedId, embedId} = useContext(DataContext);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(()=>{

    if(embedId === props.embedId){
      setIsPlaying(true);
    }else{
      setIsPlaying(false);
    }

  }, [embedId])

  const handleClick = () => {

    setEmbedId(props.embedId)


  }
    
  return (
    
    <div onClick={() => handleClick()}  className={`cursor-pointer p-2 pl-0 ${isPlaying ? 'bg-slate-200' : 'bg-white'} bg-opacity-60 h-[6rem] w-full rounded-lg flex justify-left items-center`} style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
        <div className='flex items-center'>
            <div className='mr-2 h-[6rem] flex-shrink-0 rounded-l-lg overflow-hidden'>
            <img src={props.imgsrc} alt="YTLogo" loading="lazy" className="h-[10rem] w-[10rem] object-cover rounded-l-lg -translate-y-[20%]" />
            </div>
            <div className='flex flex-col'>
            <h1 className='text-xs font-bold'>{props.title}</h1>
            <h1 className='text-xs'>{props.channel} • {props.date} days ago</h1>
            </div>
        </div>
        
    </div>
  )
}

export default PlaylistItem