

const usePagination = ( setPage ) => {

    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    };

    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1)
        scrollTop()
    }
    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1)
        scrollTop()
    }

    return {
        handlePrevPage,
        handleNextPage
    };
};

export default usePagination;
