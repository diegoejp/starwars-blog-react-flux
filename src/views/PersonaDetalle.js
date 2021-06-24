import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function PersonaDetalle({ history, Location, match, ...props }) {
  const { name, url } = match.params;
  console.log(name);
  const {store,actions} = useContext(Context);
  const {personajeSeleccionado,infoPersonajeN} = store;
  let superUrl = personajeSeleccionado[personajeSeleccionado.length-1]
  useEffect(() => {
    fetch(personajeSeleccionado.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfoPersonaje({
          personaje: data,
        });
        actions.agregarInfoPersonaje(data)
        actions.marcarPersonajeFavorito(data)
        actions.agregarInfoPersonaje(data)
      })
      .catch();
  },[]);
  
  

  //Personaje
  const [infoPersonaje, setInfoPersonaje] = useState({
    personaje: [],
  });

  const { personaje } = infoPersonaje;
  const { result } = personaje;
  
  

  // const {store} = useContext(Context);
  // const {personajes} = store;
  // const {results} = personajes;
  // let urlPersonaje = "";
  // if(results!==null){
  //     for(let personaje of results){
  //     if(personaje.uid === url){
  //         urlPersonaje = personaje.url
  //     }
  // }
  // }
  // console.log(infoPersonajeN.result.properties.name);

  console.log(personaje);
  console.log(result);
  console.log(personajeSeleccionado)

  return (
    <>
      
      
      <h2>{personajeSeleccionado.mass}</h2>
      <h2>{personajeSeleccionado.height}</h2>
     

      {!!result && (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-3">
              <div>
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
            </div>
            <div className="col-3 text-center">
                 <ul className="list-group bg-dark">
            <li className="list-group-item">
              <span className="float-start fs-5 fw-bold">Mass:</span> <span className="float-end fs-5">{result.properties.name}</span>
            </li>
             <li className="list-group-item">
              <span className="float-start fs-5 fw-bold">Altura:</span> <span className="float-end fs-5">{result.properties.height}</span>
            </li>
             <li className="list-group-item">
              <span className="float-start fs-5 fw-bold">Gender:</span> <span className="float-end fs-5">{result.properties.gender}</span>
            </li>
            <li className="list-group-item">
              <span className="float-start fs-5 fw-bold">Color de Ojos:</span > <span className="float-end fs-5">{result.properties.eye_color}</span>
            </li>
            <li className="list-group-item">
              <span className="float-start fs-5 fw-bold">Skin Color:</span> <span className="float-end fs-5">{result.properties.skin_color}</span>
            </li>
            <li className="list-group-item">
              <span className="float-start fs-5 fw-bold">Color Pelo:</span> <span className="float-end fs-5">{result.properties.hair_color}</span>
            </li>
            <li className="list-group-item">
              <span className="float-start fs-5 fw-bold">Mundo:</span> <span className="float-end fs-5">{result.properties.homeworld}</span>
            </li>
          </ul>
            </div>
           {personajeSeleccionado&&
          Object.entries(result.properties).map((propiedad,valor)=>{
            console.log(personajeSeleccionado.name);
            return(
              <>
              <li>
                {propiedad[0]} : {propiedad[1]}
              </li>
              </>
            )
          })} 
          </div>
         
         
         
        </div>
      )}
      <div>
        <Link to="/personajes">Atrás</Link>
      </div>
    </>
  );
}

export default PersonaDetalle;
