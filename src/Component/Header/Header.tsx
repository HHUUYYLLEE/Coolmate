import React, { useState } from 'react'
import Categories from './Categories'
import OutsideClickHandler from 'react-outside-click-handler';
import {Link } from "react-router-dom"
import Banner from './Banner';

const Header = (): React.ReactElement<any> => {
  return (
    <>
        <Banner />
        <div className={"header hover_button_2"} style={{height: 60, width: '100%', borderBottom: "1px solid #e7e7e7", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "0 30px", position: "relative"}}>
            <Logo img={"https://www.coolmate.me/images/logo-coolmate.svg"} />
            <Menu />
            <User />
        </div>
    </>
  )
}

const Logo= (props: React.PropsWithoutRef<any>): React.ReactComponentElement<any> => {
    return (
        <Link to={"/"}>
            <div className={"c-flex-center"}>
                <img src={props?.img} alt="" style={{width: 90}} />
            </div>
        </Link>
    )
}

const Menu= (): React.ReactComponentElement<any>=> {
    const [openProducts, setOpenProducts]= useState<boolean>(false)
    return (
     <div className={"c-flex-center"} style={{gap: 48}}>
            <div onMouseEnter={()=> setOpenProducts(true)} style={{fontWeight: 600, cursor: "pointer"}}>Sản phẩm</div>
            <div style={{fontWeight: 600, cursor: "pointer"}}>84RISINGS</div>
            <div style={{fontWeight: 600, cursor: "pointer"}}>CM24</div>
            <div style={{fontWeight: 600, cursor: "pointer"}}>Coolxprint</div>
            <div style={{fontWeight: 600, cursor: "pointer"}}>Blog</div>
            <div style={{fontWeight: 600, cursor: "pointer"}}>Về Coolmate</div>
            {
                openProducts=== true && <div onMouseLeave={() => setOpenProducts(false)}
                        className="hover_2"
                        style={{position: "absolute", top: "100%", width: "100%", left: 0, padding: "10px 50px", background: "#fff", zIndex: 999}}>
                        <Categories />
                    </div>
                
            }
        </div>
    
    )
}

const User= (): React.ReactComponentElement<any>=> {
    return (
        <div className={"c-flex-center"} style={{gap: 20}}>
            <div className={"c-flex-center"} >
                <img src="https://www.coolmate.me/images/header/icon-account.svg" alt="" style={{width: 18, height: 23}} />
            </div>
            <Link to={"/cart"}>
                <div className={"c-flex-center"} >
                    <img src="https://www.coolmate.me/images/header/icon-cart.svg" alt="" style={{width: 18, height: 23}} />
                </div>
            </Link>
        </div>
    )
}

export default Header