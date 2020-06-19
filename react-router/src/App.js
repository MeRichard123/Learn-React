import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import UserCard from "./Components/UserCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <Router> Gives the routing functionality to its children
    <Router>
      <div className="App">
        <Nav />
        {/* <Switch> will render the first match of url to stop redering everything */}
        <Switch>
          {/* A Route checks the url and renders a component */}
          {/* The exact keyword like make sure home only renders if the url is exactly / */}
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" exact component={About} />
          {/* /:id is a dynamic route meaning the id can change */}
          <Route path="/about/:id" component={UserCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
