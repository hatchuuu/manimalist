
import { axiosInstance } from '@/lib/utils'
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

// export const fetchAnimeLimit = (params) => {
//   const keyword = Number(params)
//   return useQuery({
//     queryKey: ['fecthAnimeLimit'],
//     queryFn : async () =>{
//       const response = await axiosInstance(`/top/anime?limit=${keyword}`)
//       console.log(response.data)
//       return response.data
//     }
//   })
// }

// export const fecthAnimeByPage = (params)=>{
// const page = Number(params)
//  return useQuery({
//   queryKey: ['fecthAnimeByPage'],
//   queryFn : async ()=>{
//     const response = await axiosInstance(`/top/anime?page=${page}`)
//     return response.data
//   }
//  })
// }


//tanpa menggunakan axios
// export const fetchingDataAnime = (route,query)=>{
// return useQuery({
//   queryKey: ['fetchingDataAnime'],
//   queryFn: async()=>{
//     const url = await query 
//     ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/${route}?${query}`
//     : `${process.env.NEXT_PUBLIC_BASE_API_URL}/${route}`
//     const response = await fetch(url)
//     console.log(url)
//     const anime = await response.json() //hanya berubah disini
//     console.log(anime)
//     return anime
//   }
// })
// }
// export const fetchingDataAnime = async (route, query) => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${route}?${query}`)
//   const data = await response.json() //hanya berubah disini
//   // console.log(data)
//   return data
// }

//OP
export const fetchingDataAnime = (route, query) => {
  return useQuery({
    queryKey: ['fetchingDataAnime', route, query],  // Tambahkan id sebagai bagian dari queryKey
    queryFn: async () => {
      const url = query 
        ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/${route}?${query}`
        : `${process.env.NEXT_PUBLIC_BASE_API_URL}/${route}`
        
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const anime = await response.json()
      return anime
    },
    keepPreviousData: true, // Opsional: ini akan menyimpan data sebelumnya saat loading data baru
  })
}