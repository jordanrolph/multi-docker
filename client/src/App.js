import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/otherpage">Other Page</NavLink>
        </nav>
        <h1>Fib Calculator</h1>
        <p>Over-engineered demo app</p>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
