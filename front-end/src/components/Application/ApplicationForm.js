import React from 'react'

export default function ApplicationForm(props){
    return (
        <form>
            <input type="text" value={props.petId}/>
            <input type="text" placeholder="First Name"/>
            <input type="submit"/>
        </form>
    )
}