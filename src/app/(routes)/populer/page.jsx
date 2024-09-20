"use client";
import React, { useState, useEffect } from "react";
import AnimeItems from "@/components/section/AnimeItems";
import { fetchingDataAnime } from "@/services";
import { Page, Loading, Header } from "@/components/section/allItems";

const page = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, refetch: refetchPage } = fetchingDataAnime(`top/anime`,`page=${page}`);

    const maxPage = data?.pagination.last_visible_page

    useEffect(() => {
        refetchPage()
    }, [page, refetchPage])


    return (
        <div className="sm:mx-[30px] mx-5">
            {isLoading ? <Loading /> : <Header title="Anime Populer" />}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-4 md:gap-y-5  my-6">
                {data?.data.map((data) => {
                    return (
                        <div
                            key={data.mal_id}
                            className=" flex justify-center items-center"
                        >
                            <AnimeItems
                                id={data.mal_id}
                                title={data.title}
                                images={data.images.webp.image_url}
                            />
                        </div>
                    );
                })}
            </div>
            <Page page={page} setPage={setPage} maxPage={maxPage} />
        </div>
    );
};

export default page;
