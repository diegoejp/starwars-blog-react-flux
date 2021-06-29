import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function PersonaDetalle({ history, Location, match, ...props }) {
  // const { name, url } = match.params;

  const { store, actions } = useContext(Context);
  const { personajeSeleccionado, infoPersonajeN } = store;
  // let superUrl = personajeSeleccionado[personajeSeleccionado.length-1]
  useEffect(() => {
    fetch(personajeSeleccionado.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfoPersonaje({
          personaje: data,
        });
        actions.agregarInfoPersonaje(data);
        // actions.marcarPersonajeFavorito(data)
      })
      .catch();
  }, []);

  //Personaje
  const [infoPersonaje, setInfoPersonaje] = useState({
    personaje: [],
  });

  const { personaje } = infoPersonaje;
  const { result } = personaje;

  console.log(personaje);
  console.log(result);
  console.log(personajeSeleccionado);
  // console.log(infoPersonajeN.result.properties.mass);
  function getName(name) {
    return name.toLowerCase().split(" ").join("-") + ".jpg";
  }
  return (
    <>
      {
        !!result && !!infoPersonajeN.result && (
          <div className="container-fluid">
            <div className="row justify-content-center dContainer round">
              <div className="col-12 col-md-3 bg-dark p-3">
                <div className="col-12 col-md-6 text-center">
                  <img
                    className="imagen border mt-4 "
                    src={`/img/personajes/${getName(
                      infoPersonajeN.result.properties.name
                    )}`}
                    alt=""
                  />
                  <h1 className="text-white">
                    {/* {result.properties.name} */}
                    {infoPersonajeN.result.properties.name}
                  </h1>
                </div>
              </div>
              <div className="col-md-3 text-center bg-dark p-3 round">
                <ul className="list-group bg-dark mt-4">
                  <li className="list-group-item list-group-item-secondary">
                    <span className="float-start  fw-bold">
                      Descripción Física{" "}
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <span className="float-start  fw-bold">Mass:</span>{" "}
                    <span className="float-end ">
                      {infoPersonajeN.result.properties.mass}
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <span className="float-start  fw-bold">Altura:</span>{" "}
                    <span className="float-end ">
                      {infoPersonajeN.result.properties.height}
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <span className="float-start  fw-bold">Gender:</span>{" "}
                    <span className="float-end ">
                      {infoPersonajeN.result.properties.gender}
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <span className="float-start  fw-bold">Color de Ojos:</span>{" "}
                    <span className="float-end ">
                      {infoPersonajeN.result.properties.eye_color}
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <span className="float-start  fw-bold">Skin Color:</span>{" "}
                    <span className="float-center ">
                      {infoPersonajeN.result.properties.skin_color}
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <span className="float-start  fw-bold">Color Pelo:</span>{" "}
                    <span className="float-end ">
                      {infoPersonajeN.result.properties.hair_color}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 text-center bg-dark p-3 round">
                <ul className="list-group mt-4">
                  <li className="list-group-item list-group-item-secondary">
                    <span className="float-start  fw-bold">
                      Información Biográfica{" "}
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <span className="float-start  fw-bold">Planeta Natal:</span>{" "}
                    <span className="float-center">
                      {infoPersonajeN.result.properties.homeworld}
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <span className="float-start  fw-bold">Nacimiento:</span>{" "}
                    <span className="float-end ">
                      {infoPersonajeN.result.properties.birth_year}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Esto mapeo el objeto */}
              {/* <ul className="list-grup">


            
           {personajeSeleccionado&&
          Object.entries(result.properties).map((propiedad,valor)=>{
            console.log(personajeSeleccionado.name);
            
            return(
              <>
              <li className="list-group-item">
                {propiedad[0]} : {propiedad[1]}
              </li>
              </>
            )
          })} 
          </ul> */}
            </div>{" "}
            {/*Fin ROW*/}
            <div className="row justify-content-center dContainer p-3">
              <div className="col-3">
                <Link className="btn btn-secondary  " to="/personajes">
                  A Personajes
                </Link>
              </div>
            </div>
          </div>
        ) /*Fin container */
      }
    </>
  );
}

export default PersonaDetalle;
