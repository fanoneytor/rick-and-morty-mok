import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Paginacion from "./components/Paginacion";
import Busqueda from "./components/Busqueda";
import Personajes from "./components/Personajes";


function App() {

  const [numeroPagina, setNumeroPagina] = useState(1)
  const [numeroPaginaDoce, setNumeroPaginaDoce] = useState(1)
  const [listaPosiciones, setListaPosiciones] = useState([1, 1, 12, 1, 20, 0, 11])//[pagVt, dcIni, dcFin, vtIni, vtFin, finIni, finFin] [1, 1, 12, 1, 20, 0, 11]
  const [personajes, setPersonajes] = useState([])
  const [personajesFinal, setPersonajesFinal] = useState([])
  const [info, setInfo] = useState({})
  const [buscar, setBuscar] = useState("")

  var api = "https://rickandmortyapi.com/api/character/?page=" + numeroPagina + "&name=" + buscar;

  function posiciones(pag) {
    let posiciones = []
    let iterador = 1
    let posVeinteIni = iterador * 20 - 19
    let posVeinteFin = iterador * 20
    let posDoceIni, posDoceFin, posFinalIni, posFinalFin
    for (let i = 1; i <= pag; i++) {
      posDoceIni = i * 12 - 11
      posDoceFin = i * 12
      if (posDoceFin > posVeinteFin) {
        iterador++
      }
      posVeinteIni = iterador * 20 - 19
      posVeinteFin = iterador * 20
    }
    if (posDoceIni < posVeinteIni) {
      posFinalIni = 0
      posFinalFin = posDoceFin % 10
      posiciones = [iterador, posDoceIni, posDoceFin, posVeinteIni, posVeinteFin, posFinalIni, posFinalFin]
      setListaPosiciones(posiciones)
    } else {
      posFinalFin = posDoceFin - posVeinteIni
      posFinalIni = posFinalFin - 11
      posiciones = [iterador, posDoceIni, posDoceFin, posVeinteIni, posVeinteFin, posFinalIni, posFinalFin]
      setListaPosiciones(posiciones)
    }
  }

  function prueba(result) {
    console.log("ENTRA")
    let lstPosiciones = listaPosiciones
    let personajesFinalst = personajesFinal
    let pagVt = lstPosiciones[0]
    let finIni = lstPosiciones[5]
    let finFin = lstPosiciones[6]
    if (personajesFinalst.length > 0 && personajesFinalst.length < 12) {
      let listaAux = []
      listaAux = result.slice(20 - (12 - finFin), 20)
      personajesFinalst = personajesFinalst.reverse().concat(listaAux.reverse())
      setPersonajesFinal(personajesFinalst)
      setPersonajes(personajesFinalst.reverse())
    } else {
      if (finFin - finIni === 11) {
        setPersonajes(result.slice(finIni, finFin + 1))
      } else {
        personajesFinalst = result.slice(finIni, finFin)
        setPersonajesFinal(personajesFinalst)
        setNumeroPagina(pagVt - 1)
      }
    }
  }

  function fetchPersonajes(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setPersonajes(data.error);
        }
        else {
          setInfo(data.info);
          prueba(data.results)
        }
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchPersonajes(api);
  }, [api]);

  useEffect(() => {
    posiciones(numeroPaginaDoce)
  }, [numeroPaginaDoce])

  useEffect(() => {
    const lista = listaPosiciones
    setNumeroPagina(lista[0])
    console.log(numeroPagina)
  }, [listaPosiciones])

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-5">
        <Busqueda setBuscar={setBuscar} />
        <Paginacion setNumeroPaginaDoce={setNumeroPaginaDoce} info={info} />
        <Personajes personajes={personajes} />
      </div>
    </>
  );
};
export default App;