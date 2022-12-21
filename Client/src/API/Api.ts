import axios from "axios";
import { getToken } from "./auth";

const url = 'http://localhost:80'

const api = axios.create({
    baseURL: url
})

api.interceptors.request.use(function (config) {
    let token = getToken()

    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
    }

    return config;
}, function (error) {
    console.log(error)
    return Promise.reject(error);
});


export default api