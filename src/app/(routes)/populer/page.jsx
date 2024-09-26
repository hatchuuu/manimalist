"use client";
import React, { useState, useEffect } from "react";
import { getAnimeData } from "@/services";
import { Page, Loading } from "@/components/section/allItems";
import AnimeList from "@/components/section/AnimeList";

const page = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([])

    const fetchingData = async () => {
        const data = await getAnimeData('top/anime', `page=${page}`)
        setData(data)
    }

    const maxPage = data.pagination?.last_visible_page


    useEffect(() => {
        fetchingData()
    }, [page])

    return (
        data ?
            <div className='flex flex-col justify-center'>
                <AnimeList api={data} />
                <Page page={page} setPage={setPage} maxPage={maxPage} />
            </div>
            : <Loading />
    );
};

export default page;
