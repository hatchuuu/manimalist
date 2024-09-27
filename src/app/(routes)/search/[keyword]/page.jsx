
import { AnimeItems, Loading, Header } from '@/components/section/allItems.js'
import { getAnimeData } from '@/services'
import React from 'react'

const page = async ({ params }) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const data = await getAnimeData('anime', `q=${decodedKeyword}`)
    return (
        data ?
            <div className='sm:mx-[30px] mx-5'>
                <Header title={decodedKeyword} link={'link'} linkTitle={'linkTitle'} />
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
            :
            <Loading />
    )
}

export default page