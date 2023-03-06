import axios from "axios";

const pay_momo= async (total: number)=> {
  const res = await axios({
    url: "https://itchy-dirndl-frog.cyclic.app/payment-momo",
    method: "POST",
    data: {
      amount: total,
      platform: "web",
      url_web: window.location.origin+ "/cart",
      
    },
  })
  const result= await res.data
  return result
}

export default pay_momo