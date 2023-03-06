import axios from "axios"
import { API_URL } from "../config"

const add_product= async (data)=> {
    const res= await axios({
        url: API_URL+ "/add-product",
        method: "post",
        data: {
            ...data
        }
    })
    const result= await res.data
    return result
}

export default add_product