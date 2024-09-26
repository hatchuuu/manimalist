'use client'
import { Loading } from '@/components/section/allItems'
import { Button } from '@/components/ui/button'
import VideoPlayer from '@/components/utils/VideoPlayer'
import { fetchingDataAnime } from '@/services'
import Image from 'next/image'
import React from 'react'

const page = ({ params }) => {
  const { id } = params
  // const { data } = fetchingDataAnime(`anime/${id}/full`)

  const { data } = fetchingDataAnime(`anime/${id}/full`)

  return (
    data ?
      <div className='sm:mt-10 sm:mx-10 sm:mb-5 m-6'>
        <div className="p-5 sm:p-8 border-2 border-border rounded-xl bg-white">
          <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-lg sm:text-xl sm:font-bold'>{(data.data.title).toUpperCase()}</h1>
            <Button className='sm:text-base sm:font-semibold active:neu-pressed'>{data.data.year}</Button>
          </div>
          <div className='flex sm:flex-nowrap flex-wrap pt-5 gap-3'>
            <Image src={data?.data.images.webp.image_url} width={1080} height={1080} alt={data?.data.images.jpg.image_url} className='rounded-lg min-w-[200px]  md:max-h-[350px]' />

            <div className='flex flex-col md:ps-5 sm:ps-4'>
              <div className='gap-2 flex flex-wrap mb-4 mt-2'>
                <Button className='sm:text-base sm:font-bold active:neu-pressed font-semibold h-max flex justify-end items-center flex-col'>
                  <p>PERINGKAT</p>
                  <p>#{data.data.rank}</p>
                </Button>
                <Button className='sm:text-base sm:font-bold active:neu-pressed font-semibold h-max flex justify-end items-center flex-col'>
                  <p>SKOR</p>
                  <p>{data.data.score}</p>
                </Button>
                <Button className='sm:text-base sm:font-bold active:neu-pressed font-semibold h-max flex justify-end items-center flex-col'>
                  <p>ANGGOTA</p>
                  <p>{data.data.members}</p>
                </Button>
                <Button className='sm:text-base sm:font-bold active:neu-pressed font-semibold h-max flex justify-end items-center flex-col'>
                  <p>EPISODE</p>
                  <p>{data.data.episodes}</p>
                </Button>
              </div>

              {/* Sinopsis (akan berada di atas pada layar < sm dan di bawah pada layar > sm) */}
              <div className='sm:text-lg'>
                <p className='font-semibold pb-1'>Sinopsis</p>
                <p className='text-justify'>{data.data.synopsis}</p>
              </div>
            </div>

          </div>
        </div>
        
        
        <VideoPlayer youtubeId={data.data.trailer.youtube_id}/>
   
      </div>
      :
      <Loading />
  )
}

export default page
