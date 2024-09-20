"use client"

import * as React from "react"

import Link from "next/link"
import Search from "./Search"


const Navbar = () => {
    return (
        <div className="bg-white grid grid-cols-2 sm:grid-cols-2 border-b-4 text-center border-black px-5 py-8 sm:p-[30px]">
            <Link href={'/'} className=" font-semibold text-2xl sm:text-3xl flex items-center"><span>Manimalist Anime</span></Link>
            <div className='mt-2 sm:mt-0 w-full flex items-center justify-end col-span-2 sm:col-span-1'>
                <Search />
            </div>
        </div>

    )
}

export default Navbar