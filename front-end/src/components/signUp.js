import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUpUser } from  '../actions/userActions'

class SignUpForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password: ''
        }
    }

    handleOnChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleOnSubmit(e){
        e.preventDefault()
        this.props.signUpUser(this.state)
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return <div>
            <form onSubmit={e => this.handleOnSubmit(e)}>
                <input type='text' placeholder='Username' name='email' onChange={e => this.handleOnChange(e)}/>
                <input type='password' placeholder='Password' name="password" onChange={e => this.handleOnChange(e)}/>
                <input type='submit'/>
            </form>
        </div>
        }
    
}

export default connect(null, { signUpUser })(SignUpForm)