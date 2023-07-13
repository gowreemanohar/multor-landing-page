import React from 'react'

const VideoSection = () => {
  return (
    <div className="videoSection bg-teritiary lg:p-16 lg:my-12 mt-4 p-4">
        <div className="text lg:w-1/2 mx-auto text-center ">
            <h1 className='text-4xl font-semibold'>Show visitors what they're signing up for</h1>
            <h6 className='text-lg mt-8'>Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).</h6>
        </div>
        <div className="div w-full h-full">
            <iframe className='lg:w-full w-full h-96 mt-8 mx-auto' width="108" height="108" src="https://www.youtube.com/embed/zCzjzcqvzMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
    </div>
  )
}

export default VideoSection