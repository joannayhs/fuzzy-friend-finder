export function loginUser(loginData){
    return dispatch => {
        fetch('http://localhost:3000/api/v1/login', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(user => {
            return dispatch({type: "LOGIN_USER", user})
        })
        .catch(console.log(loginData))
    }
}

export function signUpUser(userData){
    return dispatch => {
        fetch('http;//localhost:3000/api/v1/signup', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": 'applicaton/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(user => {
            return dispatch({type:"SIGNUP_USER", user})
        })
        .catch(console.log(userData))
    
    }
}