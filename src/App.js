import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/LogUser/Login";
import Register from "./components/LogUser/Register";
import Logout from "./components/LogUser/Logout";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/logowanie" component={Login} />
          <Route exact path="/rejestracja" component={Register} />
          <Route exact path="/wylogowano" component={Logout} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
