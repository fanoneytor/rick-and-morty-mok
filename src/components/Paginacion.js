import React from 'react'
import ReactPaginate from 'react-paginate';

function Paginacion({setNumeroPaginaDoce, info}) {
    const handleSiguiente = (data) => {
        setNumeroPaginaDoce(data.selected+1);
    }
    return (
        <>
            <ReactPaginate
                className='pagination justify-content-center my-4'
                breakLabel='...'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                nextLabel="Siguiente"
                previousLabel="Anterior"
                nextClassName='page-item'
                nextLinkClassName='page-link'
                previousLinkClassName='page-link'
                previousClassName='page-item'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                activeClassName='active'
                pageCount={Math.ceil(info.count/12)}
                onPageChange={handleSiguiente}                
            />
        </>
    );
};

export default Paginacion;