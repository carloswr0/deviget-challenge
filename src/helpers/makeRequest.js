const makeRequest = (url, options) => {
    return fetch(`//api.reddit.com/${url}`, options)
    .then(req => req.json());
}

export default makeRequest;