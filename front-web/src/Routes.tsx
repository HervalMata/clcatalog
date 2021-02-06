import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Home from './pages/home';
import Admin from './pages/admin';
import Catalog from './pages/catalog';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/catalog">
                <Catalog />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;