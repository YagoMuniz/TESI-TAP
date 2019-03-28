import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { LojaProvider } from "./context/LojaContext";
import Loja from "./componentes/Loja";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";

ReactDOM.render(
  <LojaProvider>
      {/* <Loja nome="Facisa Store" /> */}
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Loja} ></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/registrese" exact component={Registro}></Route>
      </Switch>
    </BrowserRouter>
    </LojaProvider>,
    document.getElementById("root")
);

// Se for user serviceworker, troca por .register
serviceWorker.unregister();
