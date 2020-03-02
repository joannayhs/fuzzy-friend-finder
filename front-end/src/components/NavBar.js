import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class NavBar extends Component {
    render(){
       return  (<div className='navbar'>
            <NavLink to='/pets' exact>Pets</NavLink>
            <NavLink to='/application' exact>Aplication</NavLink>
            <NavLink to='/login' exact>Login</NavLink>
            <NavLink to='/signup' exact>Sign Up</NavLink>
        </div>)
    }
}

export default NavBar