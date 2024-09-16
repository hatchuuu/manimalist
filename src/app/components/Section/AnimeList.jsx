import React from 'react'
import AnimeItems from './AnimeItems'
import fetchAnimeList from './fetchAnimeList.js'
import Link from 'next/link'

const AnimeList = async () => {
    const topAnime = await fetchAnimeList()
    return (
        <div className='sm:mx-[30px] mx-5'>
            <div className = 'flex justify-between'>
            <p className='mt-5 text-base sm:text-lg '>Top Anime</p>
            <Link href='#' className='mt-5 text-base sm:text-lg hover:underline'>Lihat Semua...</Link>

            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-4 md:gap-y-5  my-6'>
                {topAnime.data.map((data) => {
                    return (
                    <div key={data.mal_id} className=' flex justify-center items-center'>
                        <AnimeItems api={data} />
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default AnimeList