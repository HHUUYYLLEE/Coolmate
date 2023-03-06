import axios from "axios"
import { API_URL } from "../config"
import Cookies from "js-cookie"

const getHistory= async ()=> {
  const res= await axios({
    url: API_URL+ "/api/history", 
    method: "get",
    params: {
      id_user: Cookies.get("uid")
    }
  })
  const result= await res.data
  return result
}

export default getHistory