import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { FaTrash } from "react-icons/fa";

function Navbar() {
   const { store } = useContext(Context);
  const {favoritos} = store;
  return (
    <>
      <div className="row navbar-contenedor container-fluid m-0">
        <div className="col-md-12 d-flex justify-content-center" >
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/personajes">
            Characters
          </Link>
          <Link className="navbar-link">Worlds</Link>
          <Link className="navbar-link">Vehicules</Link>
             <div className="dropdown">
            <button className="navbar-link bg-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              🎇Favoritos
            </button>
            <ul className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuButton1">
                {favoritos.map((value,index)=>{
                  return(
                    <>
                      <li className="dropdown-item text-dark">
                        <div className="d-flex justify-content-between">

                        <Link className="text-dark fw-bold dropdown-item" to={"/" + value.substring(0,value.length-1) + "/" + value[value.length-1]}>🙎‍♂️{value.substring(0,value.length-1)}</Link><span className="text-end text-danger"><FaTrash/></span>
                        </div>
                      </li>
                    </>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
