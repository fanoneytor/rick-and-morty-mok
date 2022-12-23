import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Paginacion from "./components/Paginacion";
import Busqueda from "./components/Busqueda";
import Personajes from "./components/Personajes";


function App() {

  const [personajes, setPersonajes] = useState([])
  const [info, setInfo] = useState({})
  const [buscar, setBuscar] = useState("")

  var api = "https://rickandmortyapi.com/api/character/?name=" + buscar;


  function fetchPersonajes(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setPersonajes(data.error);
        }
        else {
          setPersonajes(data.results)
          setInfo(data.info);
        }
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchPersonajes(api);
  }, [api]);

  const onAnterior = () => {
    fetchPersonajes(info.prev);
  };

  const onSiguiente = () => {
    fetchPersonajes(info.next);
  }

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-5">
        <Busqueda setBuscar={setBuscar} />
        <Paginacion prev={info.prev} next={info.next} onAnterior={onAnterior} onSiguiente={onSiguiente} />
        <Personajes personajes={personajes.slice(0,12)}/>
        <Paginacion prev={info.prev} next={info.next} onAnterior={onAnterior} onSiguiente={onSiguiente} />
      </div>
    </>
  );
};
//<Paginacion prev={info.prev} next={info.next} onAnterior={onAnterior} onSiguiente={onSiguiente} />
export default App;

/*
const [personajesRestantes, setPersonajesRestantes] = useState([])
function validacionApi(next, results) {
    let listaAuxiliar = []
    let listaPersonajesTem = []
    let listaAuxiliarRestantes = personajesRestantes
    if (next == null) {
      for (const personaje of results) {
        if (listaPersonajesTem.length < 12) {
          listaPersonajesTem.push(personaje)
        } else {
          listaAuxiliar.push(personaje)
        }
      }
      setPersonajes(listaPersonajesTem);
      setPersonajesRestantes(listaAuxiliar)
    } else {
      for (const personaje of results) {
        console.log("auxiliar: ", listaAuxiliarRestantes)
        if (listaAuxiliarRestantes.length < 12) {
          listaAuxiliarRestantes.push(personaje)
        } else {
          listaAuxiliar.push(personaje)
        }
      }
      setPersonajesRestantes(listaAuxiliar)
      setPersonajes(listaAuxiliarRestantes);
    }

  }
  
  const onSiguiente = () => {
    if (personajesRestantes.length > 12) {
      validacionApi(null, personajesRestantes)
    } else {
      fetchPersonajes(info.next);
    }
  };*/
