import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import usePagination from '@/hooks/usePagination'; // Pastikan path sesuai
import { Input } from '../ui/input';

const Page = ({ page, setPage, maxPage }) => {
    const { inputRef, handlePrevPage, handleNextPage, handleInput } = usePagination(page, setPage, maxPage);

    return (
        <>
            <Pagination>
                <PaginationContent>
                    {page > 1 && (
                        <>
                            <PaginationItem>
                                <PaginationPrevious onClick={handlePrevPage} className='cursor-pointer' />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink onClick={handlePrevPage} className='cursor-pointer'>{Number(page) - 1}</PaginationLink>
                            </PaginationItem>
                        </>
                    )}
                    <PaginationItem>
                        <PaginationLink href="#" isActive className='bg-slate-200'>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                    {page < maxPage && (
                        <>
                            <PaginationItem>
                                <PaginationLink onClick={handleNextPage} className='cursor-pointer'>{Number(page) + 1}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <Input placeholder='page' ref={inputRef} className='w-20' onKeyDown={handleInput} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext onClick={handleNextPage}  className='cursor-pointer'/>
                            </PaginationItem>
                        </>
                    )}
                </PaginationContent>
            </Pagination>
            <p className='pt-2 w-full text-center'>{page} of {maxPage}</p>
        </>
    );
};

export default Page;
