import { FaGithub, FaLinkedin, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="row dContainer header container-fluid m-0">
        <div className="col-md-12 d-flex justify-content-between p-4">
          <div>
            <a
              className="enlace p-2"
              href="https://www.linkedin.com/in/diegoejp/"
            >
              <FaGithub />
            </a>
            <a className="enlace p-2" href="https://github.com/diegoejp">
              <FaLinkedin />
            </a>
          </div>
          <h1>Star Wars</h1>
          <div>
            <input
              type="text"
              className="busqueda"
              placeholder="Busca en Star Wars"
            />
            <span>
              <FaSearch />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
