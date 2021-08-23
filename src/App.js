import React from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Home from './component/Home';
import Profile from './component/Profile'


function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/Location">
          <Profile/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
      </Router>
  );
}

export default App;
