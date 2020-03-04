import React, {Component} from 'react'
import ApplicationForm from '../components/Application/ApplicationForm'
import { connect } from 'react-redux'
import { submitForm } from '../actions/AdoptionFormActions'

class ApplicationContainer extends Component {
    render(){
        return (
            <div>
                <ApplicationForm petId={this.props.petId} submitForm={this.props.submitForm}/>
            </div>
        )
    }
}

export default connect(null, { submitForm })(ApplicationContainer)

