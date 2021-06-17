import injectContext from "./store/appContext"
import {BrowserRouter,Route} from "react-router-dom";
import Personajes from "./views/personajes";
import PersonaDetalle from "./views/PersonaDetalle";
import Navbar from "./Components/navbar";
import Header from "./Components/Header";
import Home from "./views/Home";



function App(){

        

    return(
        <>
            <BrowserRouter>
            <Header/>
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/personajes" component={Personajes}/>
            <Route exact path="/:name/:url/" component={PersonaDetalle}/>
            </BrowserRouter>            
        </>
    )
}

export default injectContext(App); 