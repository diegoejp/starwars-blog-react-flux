import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

function PersonaDetalle({history,Location,match,...props}){
     useEffect(()=>{
         fetch(`https://www.swapi.tech/api/people/${url}`)
         .then((response)=>{return response.json()})
         .then((data)=>{
             setInfoPersonaje({
                 personaje : data
                });
         })
         .catch()
     },[])
    const {name,url} = match.params;
    console.log(name);

    //Personaje
    const [infoPersonaje, setInfoPersonaje]=useState({
        personaje : []
    });
    
         const {personaje}= infoPersonaje;
        const{result} = personaje;
    
   

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




    
    return(
        <>
            <h1>Hola{name} y mi url es {url}</h1>
            
            {
                !!result&&
                <div className="bg-success">
                    <p>Mass: {result.properties.mass}</p>
                    <p>Color de Ojos: {result.properties.eye_color}</p>
                    <p>Color Pelo: {result.properties.hair_color}</p>
                    <p>Skin Color: {result.properties.skin_color}</p>
                    <p>Altura: {result.properties.height}</p>
                    <p>Gender: {result.properties.gender}</p>
                    <p>Mundo: {result.properties.homeworld}</p>
                </div>
            
            }
        </>
    )
}

export default PersonaDetalle;