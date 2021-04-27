import logo from "./logo.svg";
import Footer from "./Components/Footer";
import Nav_2 from "./Components/Nav_2";
import Home from "./Components/Home";
import Mywork from "./Components/Mywork";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Aboutme from "./Components/Aboutme";

function App() {
  return (
    <>
      <Router>
        <Nav_2 />
        <Switch>
          <Route path="/mywork">
            <Mywork />
          </Route>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
