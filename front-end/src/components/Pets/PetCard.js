import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class PetCard extends Component {

    loadPhotos = () => {
        if(this.props.pet.photos.length > 0){
            return <img src={this.props.pet.photos[0].small} alt={this.props.pet.name}/>
        }
    }

    handleOnClick(e){
        this.props.loadPetPage(e.target.id)
    }

    render(){
        console.log(this.props.pet)
        return (
        <div id={this.props.pet.id} className='pet-card'>
            <h2 onClick={e => this.handleOnClick(e)} id={this.props.pet.id}>{this.props.pet.name}</h2><br/>
            {this.loadPhotos()}<br/>
            {this.props.pet.species}<br/>
            <Link to='/application'>Adopt</Link>
        </div>
        )}
}

const mapDispatchToProps = dispatch => {
    return {
        loadPetPage: petId => dispatch(loadPetPage(petId))
    }
}

export default connect(null, mapDispatchToProps)(PetCard)
