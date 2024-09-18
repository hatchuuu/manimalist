import React, { useRef }from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const Page = ({ page, setPage, maxPage }) => {

    const inputRef = useRef()

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1)
        scrollTop()
    }
    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1)
        scrollTop()
    }

    const handleInput = (event) => {
        const page = inputRef.current.value
        if(!page) return
        if (event.key == 'Enter' ) {
            setPage(page)
            inputRef.current.value = ""
        }
    }


    return (
        <>
            <Pagination>
                <PaginationContent>
                    {
                        !(Number(page) <= 1) &&
                        <>
                            <PaginationItem>
                                <PaginationPrevious onClick={handlePrevPage} className='hover:bg-slate-200 cursor-pointer' />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink onClick={handlePrevPage} className='hover:bg-slate-200 cursor-pointer'>{Number(page)- 1}</PaginationLink>
                            </PaginationItem>
                        </>
                    }

                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            {page}
                        </PaginationLink>
                    </PaginationItem>


                    {
                        !(Number(page) == maxPage) &&
                        <>
                            <PaginationItem>
                                <PaginationLink onClick={handleNextPage} className='hover:bg-slate-200 cursor-pointer'>{Number(page) + 1}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <input placeholder='to the page' ref={inputRef} className='w-20' onKeyDown={handleInput} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext onClick={handleNextPage} className='hover:bg-slate-200 cursor-pointer' />
                            </PaginationItem>
                        </>
                    }
                </PaginationContent>
            </Pagination>

            <p className='pt-2 w-full text-center'>{page} of {maxPage}</p>

        </>
    )
}

export default Page