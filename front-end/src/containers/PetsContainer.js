import React from 'react'
import { connect } from 'react-redux'
import Pets from '../components/Pets/Pets'
import { fetchPets } from '../actions/fetchPets'
import { loadAdoptionForm } from '../actions/AdoptionFormActions'


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

const mapDispatchToProps = dispatch => {
    return {
    fetchPets: pets => dispatch(fetchPets(), pets),
    loadAdoptionForm: petId => dispatch(loadAdoptionForm(petId))
    }
}

export default connect(state => ({pets: state.pets}), mapDispatchToProps)(PetsContainer)

