import axios from "axios"
import { API_URL } from "../config"

const deleteCart= async (id_cart)=> {
    const res= await axios({
        url: API_URL+ "/api/cart/delete", 
        method: "post",
        data: {
            id_cart
        }
    })
    const result= await res.data
    return result
}

export default deleteCart