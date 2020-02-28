import React, {Component} from 'react'
import { getPets } from '../actions/getPets'
import { connect } from 'react-redux'
import Pets from '../components/Pets/Pets'
import { Client } from '@petfinder/petfinder-js'


class PetsContainer extends Component {

    render(){
        console.log(this)
        return (
            <div>
                <Pets pets={this.state.animals}/>
            </div>
        )
    }
    

}

export default PetsContainer

