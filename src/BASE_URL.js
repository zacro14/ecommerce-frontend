import axios from "axios"

const  BASE_URL = "http://192.168.254.155:3001"

export const publicReq = axios.create({
    baseURL: BASE_URL
})