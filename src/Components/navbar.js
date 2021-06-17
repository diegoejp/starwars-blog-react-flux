import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="row navbar-contenedor container-fluid m-0">
        <div className="col-md-12">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/personajes">
            Characters
          </Link>
          <Link className="navbar-link">Worlds</Link>
          <Link className="navbar-link">Vehicules</Link>
          <Link className="navbar-link">Favoritos</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
