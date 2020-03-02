import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PetsContainer from './containers/PetsContainer'
import Application from './containers/ApplicationContainer'
import Profile from './containers/ProfileContainer'
import LoginForm  from './components/login'
import SignUpForm from './components/signUp'
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Route exact path='/' component={PetsContainer}/>
        <Route exact path='/pets' component={PetsContainer}/>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/signup' component={SignUpForm} />
        <Route exact path='/application' component={Application}/>
        <Route exact path='/profile' component={Profile}/>
      </div>
    </Router>
    
  );
}

export default App;
