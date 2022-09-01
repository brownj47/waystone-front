const URL_PREFIX = 'http://localhost:3001/api';

const API = {
    checkToken:token=>{
        return fetch(`${URL_PREFIX}/users/checkToken`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
    },
    login: (email, password) => {
        return fetch(`${URL_PREFIX}/users/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    signup: (email, password) => {
        return fetch(`${URL_PREFIX}/users/signup`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

    },
}



export default API;