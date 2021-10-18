const axios = require('axios').default;

const baserUrl = 'http://localhost:8080/employeepayroll/'

exports.postService = (url, data, token = false, httpheaders) => {
    return axios.post(baserUrl + url, data, token && httpheaders)
}

exports.getService = (url, token = false, httpheaders = null) => {
    return axios.get(baserUrl + url, token && httpheaders);
}

exports.deleteService = (url, httpParam) => {
    return axios.delete(baserUrl + url, httpParam);
}

