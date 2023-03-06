import axios from "axios"
import { API_URL } from "../config"
import Cookies from "js-cookie"

const AddToCart= async (id_product, size, amount, color)=> {
    const res= await axios({
        url: API_URL+ "/api/add", 
        method: "post",
        data: {
            id_user: Cookies.get("uid"),
            id_product,
            size,
            amount,
            color
        }
    })
    const result= await res.data
    return result
}

export default AddToCart