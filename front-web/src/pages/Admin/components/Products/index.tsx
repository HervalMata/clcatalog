import React from "react";
import {Route, Switch} from "react-router-dom";
import List from "./List";
import Form from "./Form";

const Products = () => {
    return (
        <div>
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/products" exact>
                        <List />
                    </Route>
                    <Route path="/admin/products/create">
                        <Form />
                    </Route>
                    <Route path="/admin/products/:productId">
                        <h1>Editar um produto</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Products;