import axios from "axios"
import { API_URL } from "../config"
const getSuggest= async ()=> {
    const res= await axios({
        url: API_URL+ "/api/suggest", 
        method: "get",
        
    })
    const result= await res.data
    return result
}

export default getSuggest