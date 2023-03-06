import { useEffect, useState } from 'react'
import getHistory from "../../api/history"
import {ComponentProduct } from "../Categories/Categories"
const History = () => {

  const [data, setData]= useState([])
  useEffect(()=> {
    (async ()=> {
      const result= await getHistory()
      return setData(result)
    })()
  }, [])
  return (
    <div style={{width: "100%"}}>
      <div className={"e-1-1"} style={{width: '100%', display: "flex", flexWrap: "wrap"}}>
        {
          data?.reverse()?.map((item: any, key: number)=> <div style={{width: "20%", padding: 10}} key={key}>
            <ComponentProduct {...item} history={true} />
          </div>)
        }
      </div>
    </div>
  )
}

export default History