import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      {/* can add nav here */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
