import React from 'react'
import AnimeList from '@/components/section/AnimeList'
import { getAnimeData, getNestedAnime } from '@/services'
import { Loading } from '@/components/section/allItems'

const Page = async () => {
  //fetching data dari service
  const data = await getAnimeData('top/anime', 'limit=8') 
  //fetching data hasil flat-mapping dari service
  let recomendedAnime = await getNestedAnime('recommendations/anime', 'entry')
  //membuat alias
  recomendedAnime = { data: recomendedAnime.slice(0,8) }

  return (
    data ? 
    <div className='flex flex-col'>
      <AnimeList api={data} title={'Top Anime'} link={'/populer'} linkTitle={'Selengkapnya'}/>
      <AnimeList api={recomendedAnime} title={'Rekomendasi Anime'} />
    </div>
    : <Loading/>
  )
}

export default Page