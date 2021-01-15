import React from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Day1content from './components/Day1content'
import Todo from './components/Todo'

//const repo = ''
//"hompage": "https://weaboo13.github.io/2021-sp-react-boot-webpage"

function App() {
  return (
      <Router>
        <div className = "App">
          <nav style ={{
            position: 'sticky', 
            top: 0, 
            backgroundColor:'white'}}>
            <Link to="/day1content">Day1content</Link> |
            { ' ' }<Link to="/todo">Todo</Link>
          </nav>

          <Switch>
          <Route path={`${repo}/day1content}`>
          <Day1content/>
          </Route>
          <Route path={`${repo}/todo}`>
           <Todo/>
          </Route>
          <Route path="/">
          <Day1content/>
          </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
