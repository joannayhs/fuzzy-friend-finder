import React, {Component} from 'react'
import { getPets } from '../actions/getPets'
import { connect } from 'react-redux'

class PetsContainer extends Component {

    componentDidMount(){
        this.getPets()
    }

    render(){
        return (
            <div>
                <h1>Pets Container</h1>
            </div>
        )
    }

}

export default connect(null, { getPets })(PetsContainer)

