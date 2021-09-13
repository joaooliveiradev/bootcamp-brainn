const request = (url, headers) =>
    fetch(url, headers)
        .then(response => response.json())
        .catch(e => ({ error: true, message: e.message }));

export const get = (url) => request(url)

export const post = (url, data) => {
    return request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}
export const deleteCars = (url, data) => {
    return request(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}