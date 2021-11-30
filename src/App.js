import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AllWizards from "./components/AllWizards";
import WizardDetail from "./components/WizardDetail";

export default function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/" exact component={AllWizards} />
      <Route path="/wizardDetails/:id" exact component={WizardDetail} />
    </Switch>
  </BrowserRouter>;
}
