import React from 'react'
import AnimeList from '@/components/section/AnimeList' 

const Page = () => {
  return (
    <>
      <AnimeList title={`Top Anime`} linkTitle={`Lihat Semuanya`} link={`/populer`}/>
      </>
  )
}

export default Page