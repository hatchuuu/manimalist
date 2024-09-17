'use client'

import React, { useEffect } from 'react'
import AnimeItems from '@/components/section/AnimeItems'
import { fetchAnimeByName } from '@/anime/useAnime'

const Page = ({ params }) => {
  const { keyword } = params
  const { data, isLoading } = fetchAnimeByName(keyword)

  const decodedKeyword = decodeURI(keyword)

  return (
    <div className='sm:mx-[30px] mx-5'>
      {
        isLoading ?
          <div className='flex min-h-screen w-full justify-center items-center'>
            <div className="loading"></div>
          </div>
          :
          <p className='mt-5 text-base sm:text-lg '>Pencarian untuk {decodedKeyword}</p>

      }
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-4 md:gap-y-5  my-6'>
        {data?.data.map((data) => {
          return (
            <div key={data.mal_id} className=' flex justify-center items-center'>
              <AnimeItems title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Page



