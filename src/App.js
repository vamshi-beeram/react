import React from 'react';
import {Link,BrowserRouter as Router,Switch,Route,Redirect,} from "react-router-dom";
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello'
import Travello from './components/Travello/Travello'
function App() {
  return (
    <Router>
       <div className="App">
        <Switch>

        <Route exact path="/">
            <Travello />
          </Route> 
          <Route exact path="/Preet" >
            <Greet/>
          </Route>
          
        </Switch>
    </div>

    </Router>
   
  );
}

export default App;