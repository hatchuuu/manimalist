import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AnimeItems = ({ id, images, title }) => {
    return (
        <div className='sm:hover:neu group rounded-xl transition-all duration-300 ease-in-out p-3 border-border bg-white border-2 min-w-[70px] h-full w-full max-h-[700px]'>
            <Link className='' href={`/anime/${id}`}>
                <div className='flex justify-center mb-2 sm:mb-4'>
                    <Image src={images} width={1080} height={1080} alt='' className='rounded-xl w-full max-h-[300px] object-cover' />
                </div>
                <p className='w-fit group-hover:bg-main ease-in-out transition-all duration-200 p-2 rounded-xl font-semibold text-base md:text-xl'>{title}</p>
            </Link>
        </div>

    )
}

export default AnimeItems