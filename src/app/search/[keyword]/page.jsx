'use client'

import React from 'react'
import AnimeItems from '@/components/section/AnimeItems'
import { fetchAnimeByName } from '@/anime/useAnime'
import {Header, Loading} from '@/components/section/allItems'

const Page = ({ params }) => {
  const { keyword } = params
  const { data, isLoading } = fetchAnimeByName(keyword)

  const decodedKeyword = decodeURI(keyword)

  return (
    <div className='sm:mx-[30px] mx-5'>
      {
         isLoading ?
         <Loading />
          :
          <Header title={`Pencarian untuk ${decodedKeyword}`}/>

      }
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-4 md:gap-y-5  my-6'>
                {
                data?.data.map((data) => {
                    return (
                        <div key={data.mal_id} className=' flex justify-center items-center'>
                            <AnimeItems id={data.mal_id} title={data.title} images={data.images.webp.image_url} />
                        </div>
                    )
                })}
            </div>

    </div>
  )
}

export default Page



