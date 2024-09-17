"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { MagnifyingGlass } from "@phosphor-icons/react"
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

const Search = () => {

  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (event) => {
    const keyword = searchRef.current.value
    if(!keyword) return
    if(event.key === "Enter" || event.type === 'click'){
      event.preventDefault()
      router.push(`/search/${keyword}`)
    }
  }

  return (
    <div className="flex items-center justify-end w-full">
      <Input className="w-full sm:w-[200px]" type="text" placeholder="Search Anime ..."
        ref={searchRef} onKeyDown={handleSearch} />
      <Button type="submit" onClick={handleSearch}>
        <MagnifyingGlass className='w-max' />
      </Button>
    </div>
  )
}

export default Search