import React, {Component} from 'react'
import { getPets } from '../actions/getPets'
import { connect } from 'react-redux'
import Pets from '../components/Pets/Pets'

class PetsContainer extends Component {

    componentDidMount(){
       
    }

    render(){
        return (
            <div>
                <Pets pets={this.props.pets}/>
            </div>
        )
    }
}

export default connect()(PetsContainer)

