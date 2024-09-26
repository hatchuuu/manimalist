'use client'
import React, { useState } from 'react'
// import YouTube from 'react-youtube'
import { Button } from '../ui/button'
import YouTube from 'react-youtube'

const VideoPlayer = ({ youtubeId }) => {
    const[isOpen,setIsOpen] = useState(true)

    
const handleClick = () =>{
    setIsOpen((prevOpen) => !prevOpen)
}

    const option = {
        height: '180',
        width: '270',
    }
    return (
        <div className='md:flex md:flex-col md:fixed md:bottom-6 md:right-6 mt-8 '>
            <div className="flex justify-end w-full">
                <Button onClick={handleClick} className='px-4 py-2 active:neu-pressed mb-2 hidden md:block'>{isOpen ? 'X' : 'V'}</Button>
            </div>
            { isOpen &&
                <div className="md:h-max md:w-max p-2 sm:py-4 flex justify-center items:center md:rounded-lg rounded-xl bg-main border-border sm:p-8 border-2">
                <YouTube
                    className=''
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option} />
            </div>
                }
        </div>
    )
}

export default VideoPlayer