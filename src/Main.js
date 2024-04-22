import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Bees from "./Bees";
import Ladybugs from "./Ladybugs";
import Butterflies from "./Butterflies";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Interesting Insects</h1>
          <ul className="header">
            <li><NavLink exact to="/">Honey Bees</NavLink></li>
            <li><NavLink to="/ladybugs">Ladybugs</NavLink></li>
            <li><NavLink to="/butterflies">Butterflies</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Bees />} />
              <Route path="/ladybugs" element={<Ladybugs />} />
              <Route path="/butterflies" element={<Butterflies />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
