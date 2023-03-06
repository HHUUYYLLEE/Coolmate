import axios from "axios"
import { API_URL } from "../config"

const signup= async (username,phone, email, password)=> {
    const res= await axios({
        url: API_URL+ "/signup",
        method: "post",
        data: {
            username,phone, email, password
        }
    })
    const result= await res.data
    return result
}

export default signup