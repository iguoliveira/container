export const fetchProduct = async () => {
    const res = await fetch('http://localhost:8000/products-list')
    return await res.json()
}

export const fetchUser = async () => {
    const res = await fetch('http://localhost:8000/users-list')
    return await res.json()
}

export const postProduct = async (data) => {
    const res = await fetch('http://localhost:8000/insert-product', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const postUser = async (data) => {
    const res = await fetch('http://localhost:8000/insert-user', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
}