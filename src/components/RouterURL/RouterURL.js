import React, { Component } from 'react';
import {
    Route, Switch
} from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Detail from '../Detail/Detail';
import Home from '../Home/Home';
import Pricing from '../Pricing/Pricing';
  

class RouterURL extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/pricing">
                    <Pricing />
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/detail/:id/:slug.html" component={Detail}/> 
                <Route>
                    <Home/>
                </Route>
            </Switch>
        );
    }
}

export default RouterURL;