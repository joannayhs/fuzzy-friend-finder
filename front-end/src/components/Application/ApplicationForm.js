import React, {Component} from 'react'

export default class ApplicationForm extends Component {
    constructor(props){
        super(props)
        this.state={
            petId: props.petId,
            status: 'pending'
        }
    }

    handleOnChange = (e) => {
        return this.setState({...this.state, [e.target.name]: e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.submitForm(this.state)
    }

    render() {
       return ( 
       <form onSubmit={ (e) => this.handleOnSubmit(e)}>
            <input type="text" value={this.state.petId}/><br/>
            <input type="text" placeholder="First Name" name='firstName' onChange={this.handleOnChange}/><br/>
            <input type='text' placeholder="Last Name" name="lastName" onChange={this.handleOnChange}/><br/>
           <input type="text" placeholder='Email' name="email" onChange={this.handleOnChange}/><br/>
           <input type="tel" placeholder="Phone Number" name="phoneNumber" onChange={this.handleOnChange}/><br/>
            <input type="submit"/>
        </form>
       )}
}