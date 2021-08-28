import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../containers/Home"
import Layout from "../components/Layout"
import NotFound from '../components/NotFound';
import RickMorty from '../containers/RickMorty';
import newYearCounter from '../containers/NewYearCounter';
import QuizApp from "../containers/QuizApp"


const App = () =>{
    return(
            <BrowserRouter>
                <Layout>       
                    <Switch>
                        <Route exact path="/portafolio" component={Home} />
                        <Route exact path="/portafolio/RickMorty" component={RickMorty} />
                        <Route exact path="/portafolio/NewYearCounter" component={newYearCounter} />
                        <Route exact path="/portafolio/QuizApp" component={QuizApp} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
    )
}

export default App