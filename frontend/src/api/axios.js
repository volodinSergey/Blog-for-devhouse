import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:1337/'
})

Axios.interceptors.request.use(config => {
    const existingToken = localStorage.getItem('jwtToken')
    const tokenForHeaders = existingToken ? `Bearer ${existingToken}` : ''

    config.headers.Authorization = tokenForHeaders

    return config
})

export default Axios