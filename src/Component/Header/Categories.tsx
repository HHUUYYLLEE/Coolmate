import React from 'react'
import {Link } from "react-router-dom"

const Categories = () => {
  return (
    <div style={{width: "100%"}}>
        <div style={{fontWeight: 600, color: "#00000080", marginBottom: 32, marginLeft: 30}}>Danh mục</div>
        <div style={{width: "100%", display: "flex", gap: 50}}>
            <div className={""}>
                <div style={{fontWeight: 600, marginBottom: 16}}>Áo Nam</div>
                <CCategories link="ao-dai-tay" title="Áo dài tay" />
                <CCategories link="ao-t-shirt" title="Áo T-Shirt" />
                <CCategories link="ao-polo" title="Áo Polo" />
                <CCategories link="ao-so-mi" title="Áo sơ mi" />
            </div>
            {/*  */}
            <div className={""}>
                <div style={{fontWeight: 600, marginBottom: 16}}>Quần Nam</div>
                <CCategories link="quan-short" title="Quần Short" />
                <CCategories link="quan-jeans" title="Quần Jeans" />
                <CCategories link="quan-dai" title="Quần dài" />
            </div>
        </div>
    </div>
  )
}
type propsCategories= {
    link?: string, 
    title?: string
}

const CCategories= (props: propsCategories)=> {
    return (
        <div>
            <Link className={"link-x"} to={`/${props?.link}`} style={{color: "#00000080", textDecoration: "none", fontWeight: 600}}>
                <div style={{fontSize: 16, color: "#00000080", marginBottom: 12}}>{props?.title}</div>
            </Link>
        </div>
    )
}

export default Categories