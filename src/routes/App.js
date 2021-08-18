import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../containers/Home"
import Layout from "../components/Layout"
import NotFound from '../components/NotFound';
import RickMorty from '../containers/RickMorty';


const App = () =>{
    return(
            <BrowserRouter>
                <Layout>       
                    <Switch>
                        <Route exact path="/Portafolio" component={Home} />
                        <Route exact path="/Portafolio/RickMorty" component={RickMorty} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
    )
}

export default App