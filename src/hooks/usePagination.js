import { useRef } from 'react';

const usePagination = (currentPage, setPage, maxPage) => {
    const inputRef = useRef();

    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    };

    // const handlePrevPage = () => {
    //     if (currentPage > 1) {
    //         setPage(prevPage => Math.max(prevPage - 1, 1)); // Pastikan tidak kurang dari 1
    //         scrollTop();
    //     }
    // };

    // const handleNextPage = () => {
    //     if (currentPage < maxPage) {
    //         setPage(prevPage => Math.min(prevPage + 1, maxPage)); // Pastikan tidak lebih dari maxPage
    //         scrollTop();
    //     }
    // };

    // const handleInput = (event) => {
    //     const pageInput = inputRef.current.value;
    //     if (event.key === 'Enter' && pageInput) {
    //         const pageNumber = Math.min(Math.max(Number(pageInput), 1), maxPage); // Validasi input
    //         setPage(pageNumber);
    //         inputRef.current.value = "";
    //     }
    // };

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

    return {
        inputRef,
        handlePrevPage,
        handleNextPage,
        handleInput,
    };
};

export default usePagination;
