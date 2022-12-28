import React from 'react'

const Busqueda = ({ setBuscar }) => {
    const busqueda = (e) => {
        setBuscar(e.target.value)
    };
    return (
        <>
        <h1>BUSQUEDA DE PERSONAJES</h1>
        <input onChange={busqueda} type="text" placeholder="Ingrese una descripcion" className="form-control" />
        </>
    )
}

export default Busqueda