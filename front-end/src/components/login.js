import React, {Component} from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
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
        this.props.loginUser(this.state)
        this.setState({
            email: '',
            password: ''}
        )
    }

    render() {
        return <div>
            <form onSubmit={e => this.handleOnSubmit(e)}>
                <input type="text" placeholder="Email" onChange={e => this.handleOnChange(e)} name='email'/>
                <input type='password' placeholder='password' name='password' onChange={e => this.handleOnChange(e)}/>
                <input type="submit"/>
            </form>
        </div>
    }
}

export default connect(null, {loginUser})(Login)