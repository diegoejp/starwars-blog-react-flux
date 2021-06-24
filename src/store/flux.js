const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajes: [],
      favoritos: [],
      personajeSeleccionado : [],
      infoPersonajeN : []
    },
    actions: {
      getPersonajes: (url) => {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setStore({
              personajes: data,
            });
          })
          .catch((error) => {});
      },
      getVehicles: () => {
        fetch()
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
          });
      },
      agregarFavorito: (valor) => {
        let {favoritos} = getStore();
     
        setStore({
          favoritos: favoritos.concat(valor)
        });
      },
      marcarPersonajeFavorito:(valor) =>{
        
        setStore({
          personajeSeleccionado: valor
        })
      },
      agregarInfoPersonaje:(valor)=>{
        setStore({
          infoPersonajeN : valor
        })
      }
    },
  };
};

export default getState;
