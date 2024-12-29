const url = 'http://localhost:3000/api/users'

export async function login(user) {
    const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (!response.ok) {
        throw new Error(`Email or password are not valid`);
    }
    return await response.json();
}

export async function register(user) {
    const response = await fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (!response.ok) {
        throw new Error(`Email or password are not valid`);
    }
    return await response.json();
}

export async function verifyToken(token) {
    const response = await fetch(`${url}/verify-token`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.json()
}