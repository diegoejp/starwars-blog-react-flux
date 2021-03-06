import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";

function Navbar() {
  const { store, actions } = useContext(Context);
  // useEffect(() => {
  //   fetch(personajeSeleccionado.url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       actions.agregarInfoPersonaje(data);
  //     })
  //     .catch();
  // }, []);

  const { favoritos } = store;

  function seleccionarpersonaje(valor) {
    actions.getInfoPPP(valor.url);
    actions.marcarPersonajeFavorito(valor);
    // actions.agregarInfoPersonaje(valor);
  }
  const { personajeSeleccionado } = store;
  return (
    <>
      <div className="row navbar-contenedor container-fluid m-0">
        <div className="col-md-12 d-flex justify-content-center">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/personajes">
            Characters
          </Link>
          <Link className="navbar-link" to="/personaDetalle">
            descripcion
          </Link>
          <Link className="navbar-link">Worlds</Link>
          <Link className="navbar-link">Vehicules</Link>
          <div className="dropdown">
            <button
              className="navbar-link bg-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              🎇Favoritos
            </button>
            <ul
              className="dropdown-menu bg-secondary"
              aria-labelledby="dropdownMenuButton1"
            >
              {favoritos.length > 0 &&
                favoritos.map((persona, index) => {
                  return (
                    <>
                      <li className="dropdown-item text-dark">
                        <div className="d-flex justify-content-between">
                          <Link to="/PersonaDetalle">
                            <p
                              onClick={(e) => {
                                seleccionarpersonaje(persona);
                              }}
                            >
                              {persona.name}
                            </p>
                          </Link>
                        </div>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
