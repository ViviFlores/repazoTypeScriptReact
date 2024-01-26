import axios from "axios";

//Determinar la url de nuestro endpoint
export const reqResApi = axios.create({
    baseURL:'https://reqres.in/api'
})