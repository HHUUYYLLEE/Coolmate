import axios from "axios"
import { API_URL } from "../config"
import Cookies from "js-cookie"

const getCart= async ()=> {
    const res= await axios({
        url: API_URL+ "/api/get/cart", 
        method: "get",
        params: {
            id_user: Cookies.get("uid")
        }
    })
    const result= await res.data
    return result
}

export default getCart