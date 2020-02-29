import React from 'react'
import { fetchPets } from '../actions/fetchPets'
import { loadAdoptionForm } from '../actions/loadAdoptionForm'
import { connect } from 'react-redux'
import Pets from '../components/Pets/Pets'


class PetsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchPets()
    }

    render(){
        return (
            <div>
                <Pets pets={this.props.pets} loadAdoptionForm={this.props.loadAdoptionForm}/>
            </div>
        )
    }

}

export default connect(state => ({pets: state.pets}), { fetchPets, loadAdoptionForm })(PetsContainer)

