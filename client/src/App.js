import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';

import './app.css';



function App() {
  const user = "null";
  return (
    <div className="app">
      <Router>
        {
          !user?(<Signup/>):(<Switch>
          
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        )
        }
        

        
        
    </Router>
      
    </div>
  );
}

export default App;
