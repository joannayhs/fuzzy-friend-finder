export function loginUser(loginData){
    return dispatch => {
        fetch('http://localhost:3001/api/v1/login', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                user: loginData
            })
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
        const userInfo = {
            user: userData
        }
        fetch('http://localhost:3001/api/v1/signup', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": 'applicaton/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(user => {
            return dispatch({type:"SIGNUP_USER", user})
        })
        .catch(console.log(userInfo))
    
    }
}