import React, {Component} from 'react'
import PetCard from './PetCard'
import { connect } from 'react-redux'

class Pets extends Component {

    checkRequesting = () => {
        if (this.props.requesting === true){
            return <h1>Loading...</h1>
        }else{
            return (
            <div>
                {this.props.pets.pets.map(pet => <PetCard key={pet.id} pet={pet} loadAdoptionForm={pet.loadAdoptionForm} />)}
            </div>
        )}
    }

    render(){
        return this.checkRequesting()
    } 

}

const mapStateToProps = state => {
    return {
        pets: state.pets,
        requesting: state.pets.requesting
    } 
}

export default connect(mapStateToProps)(Pets)