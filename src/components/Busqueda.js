
import React from 'react'

const Busqueda = ({ setBuscar }) => {
    const busqueda = (e) => {
        setBuscar(e.target.value)
    };
    return (
        <input onChange={busqueda} type="text" placeholder="Barra de Busqueda" className="form-control" />
    )
}

export default Busqueda