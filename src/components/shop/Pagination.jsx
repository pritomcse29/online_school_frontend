import React from 'react';

const Pagination = ({ totalPages, handlePageChange, currentPage}) => {
    return (
        <div className='py-8 text-center'>
            {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} onClick={()=>handlePageChange(i+1)}
                className={`mx-1 px-3 py-1 border rounded bg-emerald-500 ${currentPage===i+1?"bg-rose-400 text-white":"bg-emerald-500"} hover:bg-gray-500`}>
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
