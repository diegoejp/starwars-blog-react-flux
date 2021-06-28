import {  useContext, useRef} from "react";
import { Context } from "../store/appContext";


import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Personajes() {
  // const {store} = useContext(Context);
  // const {personajes} = store;
  // const {results} = personajes;
  // console.log(results);
  let regexNum = /[0-9]/;
  
  const { store, actions } = useContext(Context);
  const { personajes } = store;
  

  const { results } = personajes;

  function nextPage(t) {
    console.log(t);
    actions.getPersonajes(t);
  }
  function backPage(t) {
    console.log(t);
    actions.getPersonajes(t);
  }
  function inicioPage(t) {
    console.log(t);
    actions.getPersonajes(t);
  }
  
 const corazon = useRef("diego")
 
  function aFavorito(valor) {
    
    actions.agregarFavorito(valor)
    corazon.current.classList.add("gustado")
    console.log(corazon.current);
    
     
  }
  function aDetalle(valor){
    actions.marcarPersonajeFavorito(valor)

  }


  
  // function desactivarBoton() {
  //   if (btnNext !== null) {
  //     btnNext.classList.add("bg-primary");
  //   }
  // }
 
  function pagina() {
    let paginaM = 10;

    if (personajes.length !== 0) {
      if (personajes.next) {
        let a = personajes.next[39];
        let b = personajes.next[40];
        if (regexNum.test(b)) {
          paginaM = a + b;
          console.log(a);
          console.log(b);
          console.log(paginaM);

          return paginaM - 1;
        } else {
          paginaM = parseInt(a);
          // console.log(paginaM);

          return paginaM - 1;
        }
      } else {
        // desactivarBoton();
        return paginaM;
      }
    }
  }
  function getName(name){
    return name.toLowerCase().split(" ").join("-")+".jpg"
  }
  return (
    <>
      <div className="row m-0 personajes dContainer">
        <div className="col-md-12 text-center p-2 mb-3">
          <h1>Characters</h1>
        </div>
        <div>
       
        </div>
        <div className="row centrado">
          {!!results &&
            results.map((personaje) => {
              return (
                <>
                  <div className="col-md-4 text-center mb-4 cont-personaje p-0">
                    <h3>{personaje.name}</h3>
                    <div className="d-flex justify-content-center">
                      <Link onClick={() => {
                          aDetalle(personaje);
                        }} to="PersonaDetalle">
                        <img
                          className="imagen"
                          src={`/img/personajes/${getName(personaje.name)}`}
                          alt=""
                          
                          
                        />
                      </Link>
                    </div>
                    <div className="d-flex justify-content-around">
                      <span
                        ref={corazon}
                        className="favorite p-2 activeDJ"
                        onClick={() => {
                          aFavorito(personaje);
                        }}
                      >
                        <FaHeart />
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className="row m-0 text-center">
        <div className="paginacion d-flex justify-content-center">
          <p>{pagina()}</p>
          <button
            
            className="btn btn-dark m-1"
            onClick={() => {
              nextPage(personajes.next);
            }}
          >
            Next
          </button>

          <button
            className="btn btn-dark m-1"
            onClick={() => {
              backPage(personajes.previous);
            }}
          >
            Back
          </button>
          <button
            className="btn btn-dark m-1"
            onClick={() => {
              inicioPage("https://www.swapi.tech/api/people?page=1&limit=9");
            }}
          >
            Pagina 1
          </button>
        </div>
      </div>
    </>
  );
}

export default Personajes;
