import React from "react";
import { Switch, Route } from "react-router-dom";

import Megasena from "./pages/MegaSena";
import Quina from "./pages/Quina";
import Lotofacil from "./pages/Lotofacil";

export default function Routes() {
  return (
    <Switch>
      <Route path="/megasena" exact component={Megasena} />
      <Route path="/quina" exact component={Quina} />
      <Route path="/lotofacil" exact component={Lotofacil} />
    </Switch>
  );
}
