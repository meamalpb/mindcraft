import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <div > 
      <div className = "contain">
        <Router>
          <Switch>
            <Route exact path ="/" component={Home}></Route>
            <Route exact path ="/admin" component={Admin}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
