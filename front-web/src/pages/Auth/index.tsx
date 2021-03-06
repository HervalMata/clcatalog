import React from "react";
import { Route, Switch } from 'react-router-dom';
import { ReactComponent as AuthImage } from 'core/assets/images/auth.svg';

const Auth = () => (
    <div className="auth-container">
        <div className="auth-info">
            <h1 className="auth-info-title">
                Divulgue seus produtos <br /> no Cris Laços
            </h1>
            <p className="auth-info-subtitle">
                Faça parte do nosso catalogo de divulgação e <br /> aumente a venda dos seus produtos.
            </p>
            <AuthImage />
        </div>
        <div className="auth-content">
            <Switch>
                <Route path="/admin/auth/login">
                    <h1>Login</h1>
                </Route>
                <Route path="/admin/auth/register">
                    <h1>Cadastro</h1>
                </Route>
                <Route path="/admin/auth/recover">
                    <h1>Recuperar</h1>
                </Route>
            </Switch>
        </div>
    </div>
);

export default Auth;