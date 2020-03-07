import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUpUser } from  '../actions/userActions'

class SignUpForm extends Component {
    
    render() {
        return <div>
            <form>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <input type='submit'/>
            </form>
        </div>
        }
    
}

export default connect(null, { signUpUser })(SignUpForm)