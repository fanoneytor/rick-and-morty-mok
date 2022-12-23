import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Personajes from './Personajes';

const Paginacion = ({ prev, next, onAnterior, onSiguiente }) => {

    const handleAnterior = () => {
        onAnterior();
    }

    const handleSiguiente = () => {
        onSiguiente();
    }
    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
                {prev ?
                    <li className='page-item'>
                        <button className='page-link ' onClick={handleAnterior}>
                            Anterior
                        </button>
                    </li>
                    :
                    null}
                {next ?
                    <li className='page-item'>
                        <button className='page-link' onClick={handleSiguiente}>
                            Siguiente
                        </button>
                    </li>
                    :
                    null}
            </ul>
        </nav>
    )
};

export default Paginacion;

/*
function Paginacion({ personajes, info }) {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    let currentItems = personajes.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(info.count / itemsPerPage);


    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % personajes.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Personajes personajes={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="siguiente >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< anterior"
                renderOnZeroPageCount={null}
            />
        </>
    );
};

*/

