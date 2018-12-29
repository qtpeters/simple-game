import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from './game.jsx'

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game/">Game</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/game/" component={Game} />
    </div>
  </Router>
);

export default AppRouter;
