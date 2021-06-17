import { useContext } from "react";
import { Context } from "../store/appContext";
import Tarjeta from "./tarjeta";

import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Personajes() {
  // const {store} = useContext(Context);
  // const {personajes} = store;
  // const {results} = personajes;
  // console.log(results);
  const { store } = useContext(Context);
  const { personajes } = store;
  const { results } = personajes;

  return (
    <>
      <div className="row m-0 personajes dContainer">
        <div className="col-md-12 text-center p-2 mb-3">
          <h1>Characters</h1>
        </div>
        <div className="row centrado">
          {!!results &&
            results.map((personaje) => {
              return (
                <>
                  <div className="col-md-4 text-center mb-4 cont-personaje p-0">
                    <h3>{personaje.name}</h3>
                    <div className="d-flex justify-content-center">
                      <Link to={"/" + personaje.name + "/" + personaje.uid}>
                        <img
                          src="https://spoiler.bolavip.com/__export/1609270241566/sites/bolavip/img/2020/12/29/skywalker_star_wars_the_mandalorian_crop1609270240914.jpg_1902800913.jpg"
                          alt=""
                          width="300px"
                          height="200px"
                        />
                      </Link>
                    </div>
                    <div className="d-flex justify-content-around">
                      <span className="favorite p-2">
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
        <p>"-1,2,3,4,5...--"</p>
      </div>
    </>
  );
}

export default Personajes;
