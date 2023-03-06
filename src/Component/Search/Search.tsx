import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import search from '../../api/search';
import { ComponentProduct } from '../Categories/Categories';

const Search = () => {
    const [searchParams] = useSearchParams();
    const [data, setData]= useState<[]>(()=> [])
    useEffect(()=> {
        (async ()=> {
            const result= await search(searchParams.get("query"))
            return setData(()=> result)
        })()
    }, [searchParams])
  return (
    <div style={{width: "100%", padding: 20}}>
        <div className={"c-c-c"} style={{width: '100%', display: "flex", flexWrap: "wrap"}}>
            {
                data?.map((item: any, key: number)=> <div style={{width: "20%", padding: 10}} key={key}>
                    <ComponentProduct {...item.item} />
                </div>)
            }
        </div>
    </div>
  )
}

export default Search