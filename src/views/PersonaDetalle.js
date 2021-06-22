import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PersonaDetalle({ history, Location, match, ...props }) {
  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfoPersonaje({
          personaje: data,
        });
      })
      .catch();
  },[]);
  const { name, url } = match.params;
  console.log(name);

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

  console.log(result);

  return (
    <>
      <h1 className="text-center">
        {name} 
      </h1>

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
              <span className="float-start fs-5 fw-bold">Mass:</span> <span className="float-end fs-5">{result.properties.mass}</span>
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
