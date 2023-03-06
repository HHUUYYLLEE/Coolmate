import React, { useEffect, useState } from 'react'
import getCart from '../../api/get_cart'
import numberWithCommas from '../../util/thousand_separator'
import _ from "lodash"
import deleteCart from '../../api/delete_cart'
import swal from 'sweetalert'
import Pay from '../../api/pay'
import { useNavigate } from 'react-router-dom'
import pay_momo from '../../api/pay_momo'
import pay_vn_pay from '../../api/pay_vn_pay'

const Cart = () => {
  const [data, setData]= useState<[]>(()=> [])
  useEffect(()=> {
    (async ()=> {
      const result= await getCart()
      return setData(()=> result)
    })()
  }, [])
  const [dataCart, setDataCart]= useState<{}>({})
  return (
    <div style={{width: "100%", padding: "20px"}}>
      <div className={"c-1-1"} style={{width: "100%", display: "flex", justifyContent: 'center',}}>
        <InfoReceiver dataCart={dataCart} sum={numberWithCommas(_.sumBy(data, function(e: any) {return (parseInt(e.price) * (1 - parseInt(e.discount) / 100) * parseInt(e.amount))}))} />
        <Carter setDataCart={setDataCart} data={data} setData={setData} />
      </div>
    </div>
  )
}

const InfoReceiver= (props: any)=> {
  const navigate= useNavigate()
  const [method, setMethod]= useState<number>(()=> 0)

  return (
    <div className={"c-1-2"} style={{width: "calc(100% / 3 * 2)", borderRight: "1px solid #e7e7e7", padding: 20}}>
      <div style={{fontSize: 32, margin: "15px 0", fontWeight: 600,}}>
        Thông tin vận chuyển
      </div>
      {/* <div style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
        <div style={{marginRight: 10, flex: "1 1 0"}}>
          <input placeholder={"Họ tên"} type="text" style={{padding: 10, marginBottom: 12, height: 40, width: "100%", borderRadius: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff"}} />
        </div>
        <div style={{marginLeft: 10, flex: "1 1 0"}}>
          <input placeholder={"Số điện thoại"} type="text" style={{padding: 10, marginBottom: 12, height: 40, width: "100%", borderRadius: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff"}} />
        </div>
      </div>
      <div style={{ flex: "1 1 0"}}>
        <input placeholder={"Số điện thoại"} type="text" style={{padding: 10, marginBottom: 12, height: 40, width: "100%", borderRadius: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff"}} />
      </div> */}
      <div style={{ flex: "1 1 0"}}>
        <input placeholder={"Địa chỉ"} type="text" style={{padding: 10, marginBottom: 12, height: 40, width: "100%", borderRadius: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff"}} />
      </div>
      <div style={{ flex: "1 1 0"}}>
        <input placeholder={"Ghi chú thêm"} type="text" style={{padding: 10, marginBottom: 12, height: 40, width: "100%", borderRadius: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff"}} />
      </div>
      <div style={{fontSize: 32, margin: "15px 0", fontWeight: 600,}}>
        Hình thức thanh toán  
      </div>
      <div style={{width: "100%", margin: "15px 0"}}>
        <div onClick={()=> setMethod(1)} style={{width: "100%", padding: 20, display: "flex", alignItems: 'center', gap: 20, border:method=== 1 ? "1px solid #2e89ff" : "1px solid #e7e7e7", borderRadius: 10}}>
          <img style={{width: 30, height: 30}} src="https://www.coolmate.me/images/COD.svg" alt="" />
          <div>
            <div style={{marginBottom: 12}}>COD</div>
            <div style={{marginBottom: 12}}>Thanh toán khi nhận hàng</div>
          </div>
        </div>
        {/* <div style={{width: "100%", display: "flex", alignItems: 'center', gap: 20, borderRadius: 10, marginTop: 12}}>
          <img style={{width: "100%"}} draggable={false} src="https://res.cloudinary.com/cockbook/image/upload/v1676373916/single/Screenshot_2023-02-14_182332_x8lbek.png" alt="" />
        </div> */}
      </div>
      {/*  */}
      <div style={{width: "100%", margin: "15px 0"}}>
        <div onClick={()=> setMethod(2)} style={{width: "100%", padding: 20, display: "flex", alignItems: 'center', gap: 20, border:method=== 2 ? "1px solid #2e89ff" : "1px solid #e7e7e7", borderRadius: 10}}>
          <img style={{width: 30, height: 30}} src="https://www.coolmate.me/images/momo-icon.png" alt="" />
          <div>
            <div style={{marginBottom: 12}}>Thanh toán Momo</div>
          </div>
        </div>
        {/* <div style={{width: "100%", display: "flex", alignItems: 'center', gap: 20, borderRadius: 10, marginTop: 12}}>
          <img style={{width: "100%"}} draggable={false} src="https://res.cloudinary.com/cockbook/image/upload/v1676373916/single/Screenshot_2023-02-14_182332_x8lbek.png" alt="" />
        </div> */}
      </div>
      {/*  */}
      <div style={{width: "100%", margin: "15px 0"}}>
        <div onClick={()=> setMethod(3)} style={{width: "100%", padding: 20, display: "flex", alignItems: 'center', gap: 20, border:method=== 3 ? "1px solid #2e89ff" : "1px solid #e7e7e7", borderRadius: 10}}>
          <img style={{width: 50, height: 30, objectFit: "contain"}} src="https://www.coolmate.me/images/vnpay.png" alt="" />
          <div>
            <div style={{marginBottom: 12}}>Thẻ ATM/Internet Banking</div>
          </div>
        </div>
        {/* <div style={{width: "100%", display: "flex", alignItems: 'center', gap: 20, borderRadius: 10, marginTop: 12}}>
          <img style={{width: "100%"}} draggable={false} src="https://res.cloudinary.com/cockbook/image/upload/v1676373916/single/Screenshot_2023-02-14_182332_x8lbek.png" alt="" />
        </div> */}
      </div>
      <div style={{width: "100%", marginTop: 12}}>
        <div onClick={async ()=> {
          if(!props?.dataCart?.size) {
            return swal("Thông báo", "Bạn cần chọn một mặt hàng để thanh toán")
          }
          if(method=== 0) {
            return swal("Thông báo", "Bạn cần chọn phương thức thanh toán")

          }
          if(method=== 2) {
            const result= await pay_momo(parseInt(props?.dataCart.amount) * parseInt(props?.dataCart.price) * (1 - props?.dataCart?.discount / 100))
          
            if(result?.resultCode=== 0) {
              window.location.href= result.payUrl
            }
          }
          if(method=== 3) {
            const result= await pay_vn_pay(parseInt(props?.dataCart.amount) * parseInt(props?.dataCart.price) * (1 - props?.dataCart?.discount / 100))
              window.location.href= result
          }
          Pay(props?.dataCart?.id_product, props?.dataCart?.size , props?.dataCart?.color , props?.dataCart?.amount)
          swal("Thông báo", "Bạn đã thanh toán thành công", "success")
          .then(()=> navigate("/"))
        }} style={{borderRadius: 20, display: "flex", justifyContent: 'center', alignItems: "center", background: "#000", color: "#fff", height: 60, cursor: "pointer"}}>
          Thanh toán {
            <>
              {props?.dataCart?.amount && String(parseInt(String(parseInt(props?.dataCart.amount) * parseInt(props?.dataCart.price) / 1000 * (1 - props?.dataCart?.discount / 100)))) + "k"}
            </>
          }
        </div>
      </div>
    </div>
  )
}

const Carter= (props: any)=> {
  const {data, setData }= props
  const [selectCart, setSelectCart]= useState<number>(9)
  return (
    <div style={{flex: "1 1 0", padding: 20}}>
      <div style={{fontSize: 32, margin: "15px 0", fontWeight: 600,}}>
        Giỏ hàng
      </div>
      <div>
        {
          data?.map((item: any, key:number )=> <ComponentCarter selectCart={selectCart} setSelectCart={setSelectCart} index={key+ 1} setData={setData} key={key} {...item} setDataCart={props?.setDataCart} />)
        }
      </div>
      <div style={{width: "100%", margin: "10px 0", borderTop: "1px solid #e7e7e7"}}>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 15}}>
          <div>Tạm tính</div>
          <div>{numberWithCommas(_.sumBy(data, function(e: any) {return (parseInt(e.price) * (1 - parseInt(e.discount) / 100))}))}đ</div>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" ,marginTop: 12}}>
          <div>Giảm giá</div>
          <div>0đ</div>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" ,marginTop: 6}}>
          <div>Phí giảm giá</div>
          <div>Miễn phí</div>
        </div>
      </div>
      <div style={{width: "100%", margin: "10px 0", borderTop: "1px solid #e7e7e7"}}>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 15}}>
          <div>Tổng</div>
          <div style={{fontSize: 18}}>{numberWithCommas(_.sumBy(data, function(e: any) {return (parseInt(e.price) * (1 - parseInt(e.discount) / 100) * parseInt(e.amount))}))}đ</div>
        </div>
      </div>
    </div>
  )
}

const ComponentCarter= (props: any)=> {
  
  return (
    <div onClick={()=> {
      props?.setSelectCart(props?.index)
      props?.setDataCart({id_product: props?.id_product, size: props?.size, color: props?.color, amount: props?.amount, price: props?.price, discount: props?.discount})
      }} style={{width: "100%", display: "flex", marginBottom: 12, border: '1px solid #e7e7e7', borderRadius: 5, padding: 10, cursor: "pointer", borderColor: parseInt(props?.index)=== parseInt(props?.selectCart) ? "#2e89ff": "#e7e7e7"}}>
      <div>
        <img style={{width: 126, aspectRatio: 2 / 3, borderRadius: 10, objectFit: "cover"}} src={props?.image1} alt="" />
      </div>
      <div style={{flex: '1 1 0', display: "flex", height: "inherit", paddingLeft: 10, flexDirection: "column", justifyContent: 'space-between',}}>
        <div style={{width: '100%', display: "flex", justifyContent: 'space-between'}}>
          <div>
            <div style={{fontWeight: 600, marginBottom: 8}}>
              {props?.product_name}
            </div>
            <div>{props?.color} / {props?.size}</div>
          </div>
          <div onClick={async ()=> {
            await deleteCart(props?.id_cart)
            swal("Thông báo", "Xóa sản phẩm thành công", "success")
            .then(()=> props?.setData(props?.data?.filter((item: any)=> item?.id_cart?.toString() !== props?.id_cart?.toString())))
          }}>✕</div>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: 4}}>
          <div>
            <div style={{padding: 10, display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: 10, border: "1px solid #000"}}>
              <div>Số lượng:</div>
              <div style={{padding: "0 10px"}}>{props?.amount}</div>
            </div>
          </div>
          <div style={{color: "red"}}>{numberWithCommas(parseInt(props?.price) * (1 - props?.discount / 100) * parseInt(props?.amount))}đ</div>
        </div>
      </div>
    </div>
  )
}

export default Cart