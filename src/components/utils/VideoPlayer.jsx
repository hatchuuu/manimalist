'use client'
import React from 'react'
// import YouTube from 'react-youtube'
import { Button } from '../ui/button'
import YouTube from 'react-youtube'

const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: '300',
        height: '250'
    }
    return (
        <div>
            <Button>X</Button>
            <YouTube
                className='bg-red w-full'
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={option} />

        </div>
    )
}

export default VideoPlayer