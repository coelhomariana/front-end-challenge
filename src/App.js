import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import HomePage from "../src/routes/HomePage";
import AddNaverPage from "../src/routes/AddNaverPage";
import EditNaverPage from "../src/routes/EditNaver";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/editnaver"} component={EditNaverPage} />
        <Route exact path={"/addnaver"} component={AddNaverPage} />
        <Route exact path={"/"} component={LoginPage} />
        <Route exact path={"/home"} component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
