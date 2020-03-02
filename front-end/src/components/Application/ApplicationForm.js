import React, {Component} from 'react'

export default class ApplicationForm extends Component {
    constructor(props){
        super(props)
        this.state={
            petId: props.petId,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber:''

        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    render() {

       return ( <form onSubmit={this.handleOnSubmit}>
            <input type="text" value={this.state.petId}/>
            <input type="text" placeholder="First Name" name='firstName'/><br/>
            <input type='text' placeholder="Last Name" name="lastName" /><br/>
            <input type="text" placeholder='email' name="email"/><br/>
            <input type="text" placeholder="Phone Number" name="phoneNumber"/><br/>
            <input type="submit"/>
        </form>
       )}
}