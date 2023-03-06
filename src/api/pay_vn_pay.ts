import axios from "axios";
import { API_URL } from "../config"

const pay_vn_pay= async (total: number)=> {
  const res = await axios({
    url: API_URL+ "/create_payment_url",
    method: "POST",
    data: {
      amount: total,
      bankCode: "NCB",
      orderDescription: "Nap tien cho thue bao 0123456789. So tien 100,000 VND",
      orderType: "",
      language: "vn"
      
    },
  })
  const result= await res.data
  return result
}

export default pay_vn_pay