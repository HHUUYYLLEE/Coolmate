import axios from "axios"
import { API_URL } from "../config"
const getColor= async (params)=> {
    const res= await axios({
        url: API_URL+ "/api/color", 
        method: "get",
        params: {
            id_product: params
        }
    })
    const result= await res.data
    return result
}

export default getColor