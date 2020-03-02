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
            <input type="text" placeholder="First Name" name='firstName'/>
            <input type='text' placeholder="Last Name" name="lastName" />
            <input type="text" placeholder='email' name="email"/>
            <input type="text" placeholder="Phone Number" name="phoneNumber"/>
            <input type="submit"/>
        </form>
       )}
}