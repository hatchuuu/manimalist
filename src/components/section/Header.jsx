import React from 'react'
import Link from 'next/link'

const Header = ({ title, link, linkTitle }) => {
    return (
        <div className='flex justify-between'>
            <p className='mt-5 text-base sm:text-lg sm:font-semibold'>{title}</p>
            {
                (link && linkTitle) && <Link href={`${link}`} className='mt-5 text-base sm:text-lg hover:underline'>{linkTitle}</Link>
            }
        </div>
    )
}

export default Header