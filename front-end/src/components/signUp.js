import React from 'react';

export default function SignUpForm(){
    
    return (
        <div>
            <form>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <input type='submit'/>
            </form>
        </div>
    )
}