import {Link} from "react-router-dom";

function Tarjeta(props){
    return(
        <>
            <div>
                <p>{props.nombrePersonaje}</p>
                <button>Favoritos</button>
            </div>
        </>
    )
}

export default Tarjeta;