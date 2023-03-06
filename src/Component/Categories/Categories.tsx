import moment from "moment"
import {  useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import getCategory from "../../api/get_category"
import numberWithCommas from "../../util/thousand_separator"

const Categories = () => {
  const {category }= useParams()
  const [data, setData]= useState<any>([])
  useEffect(()=> {
    (async()=> {
      const result= await getCategory(category)
      setData(result)
    })()
  }, [category])
  return (
    <div style={{width: '100%', padding: 20}}>
      <div style={{fontWeight: 600, fontSize: 24}}>{data?.data1?.[0]?.category_vn_name}</div>
      <div className={"e-1-1"} style={{width: '100%', display: "flex", flexWrap: "wrap"}}>
        <div style={{width: "20%", padding: 8}}>
          <img style={{width: "100%", aspectRatio: 5 / 8, borderRadius: 10, objectFit: 'cover'}} src={data?.data1?.[0]?.image} alt="" />
        </div>
          {
            data?.data2?.map((item: any, key: any)=> <div style={{width: "20%", padding: 10}} key={key}>
              <ComponentProduct {...item} />
            </div>)
          }
      </div>
    </div>
  )
}

export const ComponentProduct= (props: any)=> {
  const [convert, setConvert]= useState(false)
  return (
    <Link to={"/product/"+ props?.id} style={{color: "unset", textDecoration: "none"}}>
      <div style={{width: '100%', position: "relative"}}>
        <div style={{position: "absolute", zIndex: 10, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 5}}>
          <div style={{fontWeight: 600}}>{parseFloat(props?.review).toFixed(1)}</div>
          <div style={{padding: "5px 10px", background: "red", fontWeight: 600, color: '#fff', fontSize: 12, borderRadius: 10}} className={"c-flex-center"}>Sale</div>
        </div>
        <img onMouseEnter={()=> setConvert(true)} onMouseLeave={()=> setConvert(false)} src={convert=== false ? props?.image1 : props?.image2} style={{width: '100%', aspectRatio: 3 / 4, objectFit: "cover", borderRadius: 10}} alt="" />
        <div style={{margin: "8px 0", fontWeight: 600, fontSize: 15}}>
          {props?.product_name}
        </div>  
        <div style={{display: "flex", alignItems: "center", gap: 10}}>
          <div style={{color: "red", fontSize: 14}}>{numberWithCommas((parseInt(props?.price) * (1 - parseInt(props?.discount) / 100)).toFixed(0))}đ</div>
          <del style={{color: "#555", fontSize: 14}}>{numberWithCommas(parseInt(props?.price))}đ</del>
          <div style={{color: "red", fontSize: 14}}>{parseInt(props?.discount)}%</div>
        </div>
        {props?.history=== true &&
          <>
            <div>
              Số lượng: {props?.amount}
            </div>
            <div>
              Đã mua lúc: {moment(props?.time_created).format("DD-MM-YYYY")}
            </div>
          </>
        }
      </div> 
    </Link>
  )
}

export default (Categories)