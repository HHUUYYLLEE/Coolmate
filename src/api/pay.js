import axios from "axios"
import { API_URL } from "../config"
import Cookies from "js-cookie"

const Pay= async (id_product, size, color, amount)=> {
    const res= await axios({
        url: API_URL+ "/api/pay", 
        method: "post",
        data: {
            id_user: Cookies.get("uid"), id_product, size, color, amount, time_created: new Date()
        }
    })
    const result= await res.data
    return result
}

export default Pay