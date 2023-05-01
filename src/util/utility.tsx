import axios from "axios"
import { useState } from "react"

export const API_BASE_URL = "http://localhost:8080/api/v1"

export const req = async (endpoint: string,type: string,data?: any,credentials?: any) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("user-token")}`;
    if(type == "get"){
        return await axios.get(endpoint)
    }
    return await axios.post(endpoint,data)
}