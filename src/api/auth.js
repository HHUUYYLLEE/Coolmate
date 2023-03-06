import axios from "axios"
import { API_URL } from "../config"
import Cookies from "js-cookie"

const getAuth= async ()=> {
    const res= await axios({
        url: API_URL+ "/", 
        method: "post",
        data: {
            uid: Cookies.get("uid") 
        }
    })
    const result= await res.data
    return result
}

export default getAuth