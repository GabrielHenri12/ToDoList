import axios from "axios";
import { getToken } from "./auth";

const url = 'http://localhost:80'
let token = getToken()
const api = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }

})



export default api