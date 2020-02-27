import React, {Component} from 'react'
import getPets from '../actions/getPets'

export default class PetsContainer extends Component {

    componentDidMount(){
        getPets()
    }

    render(){
        return (
            <div>
                <h1>Pets Container</h1>
            </div>
        )
    }

}