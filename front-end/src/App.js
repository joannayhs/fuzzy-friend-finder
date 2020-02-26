import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PetsContainer from './containers/PetsContainer'
import Application from './containers/ApplicationContainer'
import Profile from './containers/ProfileContainer'


function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={PetsContainer}/>
        <Route exact path='/application' component={Application}/>
        <Route exact path='/profile' component={Profile}/>
      </div>
    </Router>
    
  );
}

export default App;
