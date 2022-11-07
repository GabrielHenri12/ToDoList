import axios from "axios";

const url = 'http://localhost:80'

const api = axios.create({
    baseURL: url
})

export default api