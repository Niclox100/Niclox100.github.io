import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../containers/Home"
import Layout from "../components/Layout"
import NotFound from '../components/NotFound';


const App = () =>{
    return(
            <BrowserRouter>
                <Layout>       
                    <Switch>
                        <Route exact path="/Portafolio" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
    )
}

export default App