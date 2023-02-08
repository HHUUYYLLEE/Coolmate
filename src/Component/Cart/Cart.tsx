import React, { useState } from 'react'

const Cart = () => {
  return (
    <div style={{width: "100%", padding: "20px"}}>
      <div style={{width: "100%", display: "flex", justifyContent: 'center',}}>
        <InfoReceiver />
        <Carter />
      </div>
    </div>
  )
}

const InfoReceiver= ()=> {
  const [method, setMethod]= useState<boolean>(()=> false)

  return (
    <div style={{width: "calc(100% / 3 * 2)", borderRight: "1px solid #e7e7e7", padding: 20}}>
      <div style={{fontSize: 32, margin: "15px 0", fontWeight: 600,}}>
        Thông tin vận chuyển
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
        <div style={{marginRight: 10, flex: "1 1 0"}}>
          <input placeholder={"Họ tên"} type="text" style={{padding: 10, marginBottom: 12, height: 40, width: "100%", borderRadius: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff"}} />
        </div>
        <div style={{marginLeft: 10, flex: "1 1 0"}}>
          <input placeholder={"Số điện thoại"} type="text" style={{padding: 10, marginBottom: 12, height: 40, width: "100%", borderRadius: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff"}} />
        </div>
      </div>
      <div style={{ flex: "1 1 0"}}>
        <input placeholder={"Số điện thoại"} type="text" style={{padding: 10, marginBottom: 12, height: 40, width: "100%", borderRadius: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff"}} />
      </div>
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
        <div onClick={()=> setMethod(prev=> !prev)} style={{width: "100%", padding: 20, display: "flex", alignItems: 'center', gap: 20, border:method=== false ? "1px solid #e7e7e7" : "1px solid #2e89ff", borderRadius: 10}}>
          <img style={{width: 30, height: 30}} src="https://www.coolmate.me/images/COD.svg" alt="" />
          <div>
            <div style={{marginBottom: 12}}>COD</div>
            <div style={{marginBottom: 12}}>Thanh toán khi nhận hàng</div>
          </div>
        </div>
      </div>
      <div style={{width: "100%", marginTop: 12}}>
        <div style={{borderRadius: 20, display: "flex", justifyContent: 'center', alignItems: "center", background: "#000", color: "#fff", height: 60, cursor: "pointer"}}>
          Thanh toán 448k(COD)
        </div>
      </div>
    </div>
  )
}

const Carter= ()=> {
  return (
    <div style={{flex: "1 1 0", padding: 20}}>
      <div style={{fontSize: 32, margin: "15px 0", fontWeight: 600,}}>
        Giỏ hàng
      </div>
      <div>
        <ComponentCarter />
        <ComponentCarter />
      </div>
      <div style={{width: "100%", margin: "10px 0", borderTop: "1px solid #e7e7e7"}}>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 15}}>
          <div>Tạm tính</div>
          <div>448.000đ</div>
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
          <div style={{fontSize: 18}}>448.000đ</div>
        </div>
      </div>
    </div>
  )
}

const ComponentCarter= ()=> {
  return (
    <div style={{width: "100%", display: "flex", marginBottom: 12}}>
      <div>
        <img style={{width: 126, aspectRatio: 2 / 3, borderRadius: 10, objectFit: "cover"}} src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2022/jogger-casual-xam-nhat2_60.jpg" alt="" />
      </div>
      <div style={{flex: '1 1 0', display: "flex", height: "inherit", paddingLeft: 10, flexDirection: "column", justifyContent: 'space-between',}}>
        <div style={{width: '100%', display: "flex", justifyContent: 'space-between'}}>
          <div>
            <div style={{fontWeight: 600, marginBottom: 8}}>
              Quần nỉ nam Jogger Casual co giãn
            </div>
            <div>Xám nhạt / M</div>
          </div>
          <div>✕</div>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: 4}}>
          <div>
            <div style={{padding: 10, display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: 10, border: "1px solid #000"}}>
              <div>-</div>
              <div style={{padding: "0 10px"}}>1</div>
              <div>+</div>
            </div>
          </div>
          <div>189.000đ</div>
        </div>
      </div>
    </div>
  )
}

export default Cart