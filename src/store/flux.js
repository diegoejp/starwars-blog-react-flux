const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            
            
        },
        actions: {
            
            getPersonajes: () => {
                fetch("https://www.swapi.tech/api/people?page=1&limit=9")
                    .then((response) => {return response.json(); })
                    .then((data) => {
                        console.log(data);
                        setStore({
                            personajes: data
                        });
                     })
                    .catch((error) => { });
            },
          
        }
    }
}

export default getState;