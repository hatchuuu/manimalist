import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className='flex items-center justify-center gap-1 mt-3'>
        <div className='h-5 w-5 rounded-full bg-black '></div>
        <p classNme='text-xs sm:text-xl font-semibold'>NOT FOUND</p>
      </div>
      <Link href='/' className=' transition-all duration-200 hover:bg-color-hijau text-black bg-slate-200 p-2 m-2 text-center rounded-xl'>KEMBALI</Link>
    </div>
  )
}

export default NotFound