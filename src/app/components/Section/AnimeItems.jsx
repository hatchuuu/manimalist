import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const AnimeItems = ({ api }) => {
    return (


        <div className='hover:scale-105 transition-all duration-300 ease-in-out p-3 border-black border-2 min-w-[70px] h-full w-full max-h-[700px] rounded-md'>
            <Link className='' href={`/${api.mal_id}`}>
                <div className='flex justify-center'>
                    <Image src={api.images.webp.image_url} width={1080} height={1080} className='w-full max-h-[300px] object-cover' />
                </div>
                <p className='p-2 font-semibold text-base md:text-xl'>{api.title}</p>
            </Link>
        </div>

    )
}

export default AnimeItems