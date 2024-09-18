
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

export const fetchAnimeLimit = (params) => {
  const keyword = Number(params)
  return useQuery({
    queryKey: ['fecthAnimeLimit'],
    
    queryFn : async () =>{
      const response = await axiosInstance(`/top/anime?limit=${keyword}`)
      return response.data
    }
  })
}

export const fecthAnimeByPage = (params)=>{
const page = Number(params)
 return useQuery({
  queryKey: ['fecthAnimeByPage'],
  queryFn : async ()=>{
    const response = await axiosInstance(`/top/anime?page=${page}`)
    return response.data
  }
 })
}


export const fetchAnimeByName =(keyword) =>{
  return useQuery({
    queryKey: ['fetchAnimeByName'],
    queryFn : async () =>{
      const response = await axiosInstance(`/anime?q=${keyword}`)
      return response.data
    }
  })
}