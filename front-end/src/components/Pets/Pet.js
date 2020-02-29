import React, { Component } from 'react';

class Pet extends Component {

    loadPhotos = () => {
        if(this.props.pet.photos.length > 0){
            return <img src={this.props.pet.photos[0].small}/>
        }
    }

    handleOnClick = e => {
        console.log(e)
    }

    render(){
        return (
        <div id={this.props.pet.id} className='pet'>
            <h2>{this.props.pet.name}</h2><br/>
            {this.loadPhotos()}<br/>
            {this.props.pet.species}<br/>
            <button id={this.props.pet.id} onClick={e => this.handleOnClick(e)}>Adopt</button>
        </div>
        )}
}

export default Pet
