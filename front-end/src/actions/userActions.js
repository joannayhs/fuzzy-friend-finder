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
            if(user.errors){
                alert(user.errors)
            }else {
            return dispatch({type: "LOGIN_USER", user})
            }
        })
        .catch(error => console.log(error))
    }
}

export function signUpUser(userData){
    return dispatch => {
        fetch('http://localhost:3001/api/v1/signup', {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": 'applicaton/json',
                "Accept":"application/json"
            },
            body: JSON.stringify({
                user: userData
            })
        })
        .then(res => res.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            }else {
                return dispatch({type: 'SIGNUP_USER', user})
            }
        })
        .catch(console.log('error'))
    
    }
}