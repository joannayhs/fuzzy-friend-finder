import React from 'react'
import { fetchPets } from '../actions/fetchPets'
import { connect } from 'react-redux'
import Pets from '../components/Pets/Pets'


class PetsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchPets()
    }

    render(){
        console.log(this.props)
        return (
            <div>
                Pets Container
            </div>
        )
    }

}

export default connect(state => ({pets: state.pets}), { fetchPets })(PetsContainer)

