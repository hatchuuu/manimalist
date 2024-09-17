
import { useState } from 'react'
import { axiosInstance } from '@/lib/utils'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

// export const fetchAnimeByNameE = (params) => {
//     const [anime, setAnime] = useState([])
//     const fetchAnime = async () => {
//       try {
//         const response = await axiosInstance(`/anime?q=${params.keyword}`)
//         setAnime(response.data.data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     useEffect(() => {
//       fetchAnime()
//     }, [])
//     return {
//       data: anime
//     }
// }

export const fetchAnimeList = (params) => {
  const keyword = Number(params)
  let limit;
  params && (limit = `?limit=${keyword}`)

  const {data, isLoading} = useQuery({
    queryFn : async () =>{
      const response = await axiosInstance(`/top/anime${limit}`)
      return response.data
    }
  })
  return{
    data, isLoading
  }
}





export const fetchAnimeByName =(keyword) =>{
  return useQuery({
    queryFn : async () =>{
      const response = await axiosInstance(`/anime?q=${keyword}`)
      return response.data
    }
  })
}