import React from 'react'

const VideoPlayer = (props) => {
  return (
    <div className=" h-[50%] flex-1 w-[500px] md:w-auto basis-auto md:h-full overflow-hidden rounded-lg" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
    <iframe
      className="w-full h-full"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  )
}

export default VideoPlayer