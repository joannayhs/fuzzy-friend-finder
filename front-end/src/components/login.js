import React from 'react'

export default function Login(){

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Username"/>
                <input type='password' placeholder='password'/>
                <input type="submit"/>
            </form>
        </div>
    )
}