import axios from "axios"

const  BASE_URL = "https://menscorner-fake-server.herokuapp.com/"

export const publicReq = axios.create({
    baseURL: BASE_URL
})