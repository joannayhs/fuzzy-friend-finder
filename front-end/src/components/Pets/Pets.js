import React, {Component} from 'react'
import Pet from '../Pets/Pet'

class Pets extends Component{

    render(){
        return <div>
                {this.props.pets.map(pet => <Pet />)}
            </div>
    }
}

export default Pets