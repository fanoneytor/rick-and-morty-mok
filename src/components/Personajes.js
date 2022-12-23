import React from 'react'

const Personajes = ({ personajes = [] }) => {
    return (
        <>
            {
                personajes == "There is nothing here" ?
                    (
                        //mostrar mensaje de error
                        <div className="alert alert-info mt-2">
                            <h6 className='text-center'>No hay coincidencia en ningun personaje</h6>
                        </div>

                    ) : (<div className='row'>
                        {
                            personajes.map((item, index) => (
                                <div key={index} className='col mb-4'>
                                    <div className='card bg-dark text-white rounded-100' style={{minWidth: "200px", maxWidth: "400px"}}>
                                        <img src={item.image} />
                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.name}</h5>
                                            <hr />
                                            <p>Estatus: {item.status}</p>
                                            <p>Especies: {item.species}</p>
                                            <p>Genero: {item.gender}</p>
                                            <p>Location: {item.location.name}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>)
            }

        </>
    )
}

export default Personajes;
