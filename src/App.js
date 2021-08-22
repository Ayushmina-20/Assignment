import React from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import Page from './component/Page';

import Details from './component/Details';
import Home from './component/Home';
import Quotes from './component/Quotes';
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page">
            <Page />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
         
          
        </Switch>
      
    </Router>
  );
}

export default App;
