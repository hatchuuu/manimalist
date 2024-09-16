const fetchAnimeList = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`)
    const topAnime = await response.json()
    return topAnime
}
export default fetchAnimeList