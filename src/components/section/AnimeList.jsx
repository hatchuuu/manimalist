'use client'
import React from 'react'
import AnimeItems from './AnimeItems'
import { Loading, Header } from './allItems';

const AnimeList = ({ api, link, title, linkTitle }) => {
    return (
        <div className='sm:mx-[30px] mx-5'>
            {
                api? <Header title={title} link={link} linkTitle={linkTitle} />
                    : <Loading />
            }
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-4 md:gap-y-5  my-6'>
                {
                    api.data?.map((data) => {
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

export default AnimeList