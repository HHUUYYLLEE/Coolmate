import axios from "axios"
import { API_URL } from "../config"

const search= async (querySearch)=> {
    const res= await axios({
        url: API_URL+ "/search",
        method: "get",
        params: {
            querySearch
        }
    })
    const result= await res.data
    return result
}

export default search