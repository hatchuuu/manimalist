
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
export const getAnimeData = async (route, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${route}?${query}`)
  const data = await response.json() //hanya berubah disini
  return data
}

export const getNestedAnime = async (resource, objectProperties) =>{
  const response = await getAnimeData(resource)
  const result = response.data?.flatMap(items => items.entry)
  return result
}

//OP
// export const fetchingDataAnime = (resource, query) => {
//   return useQuery({
//     queryKey: ['fetchingDataAnime'],  // Tambahkan id sebagai bagian dari queryKey
//     queryFn: async () => {
//       const url = query
//         ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/${resource}?${query}`
//         : `${process.env.NEXT_PUBLIC_BASE_API_URL}/${resource}`

//       const response = await fetch(url)
//       if (!response.ok) {
//         throw new Error('Failed to fetch data')
//       }
//       const anime = await response.json()
//       console.log(anime)
//       return anime
//     },
//     keepPreviousData: true, // Opsional: ini akan menyimpan data sebelumnya saat loading data baru
//   })
// }

// export const fetchingNestedRecommended = (resource, objectProperty) => {
//   const {data} = fetchingDataAnime(resource)
//   const response = data
//   // console.log(response)
//   const result = response?.data.flatMap(items => items.entry)
//   console.log(result)
//   return result
// }
