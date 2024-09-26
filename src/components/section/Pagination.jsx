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
import { Input } from '@/components/ui/input';

const Page = ({ page, setPage, maxPage }) => {
    const { handlePrevPage, handleNextPage } = usePagination(setPage);

    return (
        <>
            <Pagination>
                <PaginationContent>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row justify-center items-center mt-4'>
                            {page > 1 && (
                                <PaginationItem>
                                    <PaginationLink onClick={handlePrevPage} className='cursor-pointer'>{Number(page) - 1}</PaginationLink>
                                </PaginationItem>
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
                                </>
                            )}
                        </div>
                        <div className='flex flex-row justify-center items-center mt-2'>
                            {page > 1 && (
                                <PaginationItem>
                                    <PaginationPrevious onClick={handlePrevPage} className='cursor-pointer' />
                                </PaginationItem>)}
                            {page < maxPage && (
                                <PaginationItem>
                                    <PaginationNext onClick={handleNextPage} className='cursor-pointer' />
                                </PaginationItem>
                            )}
                        </div>
                    </div>

                </PaginationContent>
            </Pagination>
            <p className='pt-2 w-full text-center'>{page} of {maxPage}</p>
        </>
    );
};

export default Page;
