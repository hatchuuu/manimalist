"use client"
import React from 'react'
import { Input} from '@/components/ui/input'
import { MagnifyingGlass } from "@phosphor-icons/react"
import { Button } from '@/components/ui/button'

const Search = () => {
  return (
    <div className="flex items-center justify-end w-full">
      <Input className =" w-full sm:w-[200px]" type="text" placeholder="Search Anime ..." />
      <Button type="submit">
        <MagnifyingGlass className='w-max' />
      </Button>
    </div>
  )
}

export default Search