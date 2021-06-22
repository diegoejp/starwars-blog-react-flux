const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajes: [],
      favoritos: [],
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
        setStore({
          favoritos: valor
        });
      },
    },
  };
};

export default getState;
