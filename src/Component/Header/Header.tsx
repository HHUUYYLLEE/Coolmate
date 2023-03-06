import React, { useContext, useState } from 'react'
import Categories from './Categories'
import OutsideClickHandler from 'react-outside-click-handler';
import {Link, useNavigate } from "react-router-dom"
import Banner from './Banner';
import login from '../../api/login';
import About from './About'
import Blog from './Blog'
import swal from 'sweetalert';
import Cookies from "js-cookie"
import signup from '../../api/signup';
import { AppContext } from '../../App';
import {AiOutlineHistory } from "react-icons/ai"
import search from '../../api/search';
import KeepAlive from 'react-activation';
import { v4 } from 'uuid';
import numberWithCommas from '../../util/thousand_separator';

const Header = (): React.ReactElement<any> => {
    return (
    <>
        <div className='headerout'>
            <div style={{width: "100%", height: 40}} className={"c-flex-center banner_color"}>
            <div className='marquee'>Gọi 1900 2727 37 nếu bạn cần hỗ trợ mua hàng giao gấp 
          <span style={{paddingRight: '100px'}} /> 
          <span> VALENTINE'S BOX 2 món CHỈ 299K <span style={{paddingRight: '100px'}} />
          <span>Miễn phí vận chuyển cho đơn từ 200k<span style={{paddingRight: '100px'}} />
          <span>Gọi 1900 2727 37 nếu bạn cần hỗ trợ mua hàng giao gấp <span style={{paddingRight: '100px'}} /> 
          <span>VALENTINE'S BOX 2 món CHỈ 299K<span style={{paddingRight: '100px'}} />
          <span>Miễn phí vận chuyển cho đơn từ 200k<span style={{paddingRight: '100px'}} />
          <span /></span></span></span></span></span></div>
        </div>
        <div className={"header hover_button_2"} 
        style={{height: 60, width: '100%', borderBottom: "1px solid #e7e7e7", display: "flex", 
        justifyContent: 'space-between', alignItems: "center", padding: "0 30px", position: "relative"}}>
            <Logo img={"https://www.coolmate.me/images/logo-coolmate.svg"} />
            <Menu />
            <User />
        </div></div>
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
    const [openProducts1, setOpenProducts1]= useState<boolean>(false)
    const [openProducts2, setOpenProducts2]= useState<boolean>(false)
    const [openBlog1, setOpenBlog1]= useState<boolean>(false)
    const [openBlog2, setOpenBlog2]= useState<boolean>(false)
    const [openAbout1, setOpenAbout1]= useState<boolean>(false)
    const [openAbout2, setOpenAbout2]= useState<boolean>(false)
    return (
        <div style={{maxWidth: "100%", overflow: "auto"}}>
        <div className={"c-flex-center m-1-1"} style={{gap: '5.1rem'}}>
          
            <div className='header1' onMouseEnter={()=> setOpenProducts1(true)}  onMouseLeave={()=> setOpenProducts1(false)} 
                style={ openProducts1=== true || openProducts2=== true ? {fontWeight: 600, cursor: "pointer", color:"#8e8e8e"} 
                : {fontWeight: 600}}>
                    Sản phẩm
            </div>
                
            <div className='header2' style={{fontWeight: 600, cursor: "pointer"}}>84RISINGS</div>
            <div className='header3' style={{fontWeight: 600, cursor: "pointer"}}>CM24</div>
            <div className='header4' style={{fontWeight: 600, cursor: "pointer"}}>Coolxprint</div>

            <div className='header5' onMouseEnter={()=> setOpenBlog1(true)}  onMouseLeave={()=> setOpenBlog1(false)} 
                style={ openBlog1=== true || openBlog2=== true ? {fontWeight: 600, cursor: "pointer", color:"#8e8e8e"} 
                : {fontWeight: 600}}>
                    Blog
            </div>

            <div className='header6' onMouseEnter={()=> setOpenAbout1(true)}  onMouseLeave={()=> setOpenAbout1(false)} 
                style={ openAbout1=== true || openAbout2=== true ? {fontWeight: 600, cursor: "pointer", color:"#8e8e8e"} 
                : {fontWeight: 600}}>
                    Về Coolmate
            </div>
            
            <div onMouseEnter={() => setOpenProducts2(true)} onMouseLeave={() => setOpenProducts2(false)}
                style={ openProducts1=== true || openProducts2===true ? 
                {position: "absolute", top: "100%", width: "100%", left: 0, padding: "10px 50px", background: "#fff", zIndex: 999} 
                : {display:'none'} }>
                <Categories />

            </div>
                
            <div onMouseEnter={() => setOpenBlog2(true)} onMouseLeave={() => setOpenBlog2(false)}
                style={ openBlog1=== true || openBlog2===true ? 
                {position: "absolute", top: "100%", width: "100%", left: 0, padding: "10px 50px", background: "#fff", zIndex: 999} 
                : {display:'none'} }>
                <Blog />

            </div>
            
            <div onMouseEnter={() => setOpenAbout2(true)} onMouseLeave={() => setOpenAbout2(false)}
                style={ openAbout1=== true || openAbout2===true ? 
                {position: "absolute", top: "100%", width: "100%", left: 0, padding: "10px 50px", background: "#fff", zIndex: 999} 
                : {display:'none'} }>
                <About />

            </div>
        </div>
        </div>
    )
}

const User= (): React.ReactComponentElement<any>=> {
    const [login, setLogin]= useState<boolean>(()=> false)
    const {auth, user}= useContext(AppContext)
    const [openSearch, setOpenSearch]= useState<boolean>(()=> false)
    const [searchQuery, setSearchQuery]= useState<string>(()=> "")
    const navigate= useNavigate()
    const [resultSearch, setResultSearch]= useState<[]>(()=> [])
    return (
        <div className={"c-flex-center"} style={{gap: 20}}>
            <OutsideClickHandler onOutsideClick={()=> setOpenSearch(()=> false)}>
                <div className={"c-flex-center"} style={{position: "relative"}}>
                    {openSearch=== true && <input onChange={async (e)=> {
                        setSearchQuery(()=> e.target.value)
                        const result= await search(e.target.value)
                        setResultSearch(()=> result)
                    }} onBlur={(e)=> {
                        if(e.target.value.length <= 0) {
                            setOpenSearch(()=> false)
                        }
                    }} type="text" style={{width: 300, height: 40, border: "1px solid #000", outlineColor: "#2e89ff", borderRadius: 80, padding: 10}} />}
                        {
                            openSearch=== true && 
                            <KeepAlive key={v4()}>
                                <ListSearch resultSearch={resultSearch} setOpenSearch={setOpenSearch} setSearchQuery={setSearchQuery} />
                            </KeepAlive>

                        }
                    <img onClick={ ()=> {
                        setOpenSearch(()=> true)
                        if(searchQuery.length <= 0) {

                        }
                        else {
                            
                            navigate("/search?query="+ searchQuery)
                            setSearchQuery("")
                        }
                    }} src="https://www.coolmate.me/images/header/icon-search.svg" alt="" style={{width: 18, height: 23, cursor: "pointer", position: "absolute", right: 0, top: "50%", transform: "translate(-50%, -50%)"}} />
                </div>
            </OutsideClickHandler>
            <div onClick={()=> setLogin(()=> true)} className={"c-flex-center"} >
                <img src="https://www.coolmate.me/images/header/icon-account.svg" alt="" style={{width: 18, height: 23, cursor: "pointer"}} />
            </div>
            {auth=== true && <Link to={"/history"}>
                <div className={"c-flex-center"} >
                    <AiOutlineHistory size={18} />
                </div>
            </Link>}
            <Link to={"/cart"}>
                <div className={"c-flex-center"} >
                    <img src="https://www.coolmate.me/images/header/icon-cart.svg" alt="" style={{width: 18, height: 23, cursor: "pointer"}} />
                </div>
            </Link>
            {login=== true && auth=== false && <Login setLogin={setLogin} />}
            {login=== true && auth=== true && <UI setLogin={setLogin} {...user} />}
        </div>
    )
}

const Login= (props: any): React.ReactComponentElement<any>=> {
    const [convert, setConvert]= useState<boolean>(()=> false)
    const [account, setAccount]= useState<string>(()=> "")
    const [password, setPassword]= useState<string>(()=> "")

    return (
        <div style={{width: "100%", height: '100%', position: "fixed", top: 0, left: 0, background: "rgba(0, 0, 0,0.7)", zIndex: 9999}} className={"c-flex-center popup"}>
            <OutsideClickHandler onOutsideClick={()=> props?.setLogin(()=> false)}> 
                {
                    convert=== false && <div style={{width: '100%', maxWidth: 600, padding: 10, borderRadius: 20, background: "#ffff", }}>
                    <div style={{textAlign: 'center', margin: "24px 0", fontSize: 24, fontWeight: 600}}>
                        Đăng nhập
                    </div>
                    <input value={account} onChange={(e)=> setAccount(()=> e.target.value)} type="text" style={{width: '100%', height: 40, padding: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff", borderRadius: 10, margin: "12px 0"}} placeholder={"Email/SĐT của bạn"} />
                    <input value={password} onChange={(e)=> setPassword(()=> e.target.value)} type="password" style={{width: '100%', height: 40, padding: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff", borderRadius: 10, margin: "12px 0"}} placeholder={"Mật khẩu"} />
                    <div onClick={async ()=> {
                        const result= await login(account, password)
                        if(result.login === true) {
                            swal("Thông báo", "Đăng nhập thành công", "success")
                            .then(()=> Cookies.set("uid", result.id))
                            .then(()=> window.location.reload())
                        }
                        else {
                            swal("Đăng nhập thất bại", "Tên đăng nhập hoặc tài khoản không chính xác", "success")
                        }
                    }} style={{width: "100%", height: 40, background: "#000", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", borderRadius: 10}} className={"c-flex-center"}>Đăng nhập</div>
                    <div onClick={()=> setConvert(()=> true)} style={{width: "100%", height: 40, color: "#2e89ff", fontSize: 14, fontWeight: 600, cursor: "pointer", borderRadius: 10}} className={"c-flex-center"}>Đăng ký</div>
                </div>
                }
                {
                    convert=== true && <Signup setConvert={setConvert} />
                }
            </OutsideClickHandler>
        </div>
    )
}

const Signup= (props: any): React.ReactComponentElement<any>=> {
    const [userName, setUserName]= useState<string>(()=> "")
    const [phoneNumber, setPhoneNumber]= useState<string>(()=> "")
    const [email, setEmail]= useState<string>(()=> "")
    const [password, setPassword]= useState<string>(()=> "")
    const [confirmPassword, setConfirmPassword]= useState<string>(()=> "")

    return (
        <div style={{width: '100%', maxWidth: 600, padding: 10, borderRadius: 20, background: "#ffff", }}>
            <div style={{textAlign: 'center', margin: "24px 0", fontSize: 24, fontWeight: 600}}>
                Đăng ký tài khoản
            </div>
            <input value={userName} onChange={(e)=> setUserName(()=> e.target.value)} type="text" style={{width: '100%', height: 40, padding: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff", borderRadius: 10, margin: "12px 0"}} placeholder={"Tên của bạn"} />
            <input value={phoneNumber} onChange={(e)=> setPhoneNumber(()=> e.target.value)} type="text" style={{width: '100%', height: 40, padding: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff", borderRadius: 10, margin: "12px 0"}} placeholder={"SĐT của bạn"} />
            <input value={email} onChange={(e)=> setEmail(()=> e.target.value)} type="text" style={{width: '100%', height: 40, padding: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff", borderRadius: 10, margin: "12px 0"}} placeholder={"Email của bạn"} />

            <input value={password} onChange={(e)=> setPassword(()=> e.target.value)} type="password" style={{width: '100%', height: 40, padding: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff", borderRadius: 10, margin: "12px 0"}} placeholder={"Mật khẩu"} />
            <input value={confirmPassword} onChange={(e)=> setConfirmPassword(()=> e.target.value)}type="password" style={{width: '100%', height: 40, padding: 10, border: "1px solid #e7e7e7", outlineColor: "#2e89ff", borderRadius: 10, margin: "12px 0"}} placeholder={"Nhập lại mật khẩu"} />
            <div onClick={async ()=> {
                const result= await signup(userName, phoneNumber ,email, password)
                if(result.signup=== true) {
                    swal("Thông báo", "Bạn đã đăng ký thành công", "success")
                }
                else if(result?.exist=== true) {
                    swal("Thông báo", "Email hoặc số điện thoại đã tồn tại")
                }
                else {
                    swal("Thông báo", "Có lỗi xảy ra, vui lòng thử lại")

                }
            }} style={{width: "100%", height: 40, background: "#000", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", borderRadius: 10}} className={"c-flex-center"}>Đăng ký</div>
            <div onClick={()=> props?.setConvert(()=> false)} style={{width: "100%", height: 40, color: "#2e89ff", fontSize: 14, fontWeight: 600, cursor: "pointer", borderRadius: 10}} className={"c-flex-center"}>Đăng nhập</div>
        
        </div>
    )
}

const UI= (props: any)=> {
    return (
        <div style={{width: "100%", height: '100%', position: "fixed", top: 0, left: 0, background: "rgba(0, 0, 0,0.7)", zIndex: 9999}} className={"c-flex-center popup"}>
            <OutsideClickHandler onOutsideClick={()=> props?.setLogin(()=> false)}>
                <div style={{width: '100%', maxWidth: 600, padding: 10, borderRadius: 20, background: "#ffff", }}>
                    <div style={{textAlign: 'center', margin: "24px 0", fontSize: 24, fontWeight: 600}}>
                        Thông tin cá nhân
                    </div>
                    <div style={{margin: "8px 0", display: "flex", alignItems: 'center'}}>
                        <div style={{width: 150, fontSize: 18}}>Họ tên: </div>
                        <div style={{fontSize: 18, fontWeight: 600}}>{props?.username}</div>
                    </div>
                    <div style={{margin: "8px 0", display: "flex", alignItems: 'center'}}>
                        <div style={{width: 150, fontSize: 18}}>Số điện thoại: </div>
                        <div style={{fontSize: 18, fontWeight: 600}}>{props?.phone}</div>
                    </div>
                    <div style={{margin: "8px 0", display: "flex", alignItems: 'center'}}>
                        <div style={{width: 150, fontSize: 18}}>Email: </div>
                        <div style={{fontSize: 18, fontWeight: 600}}>{props?.email}</div>
                    </div>
                    <div onClick={()=> {
                      Cookies.remove("uid")
                      window.location.reload()  
                    }} style={{width: "100%", height: 40, borderRadius: 10, background: "#f2f0f5", fontWeight: 600, marginTop: "12px", cursor: "pointer"}} className={"c-flex-center"}>
                        Đăng xuất
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

const ListSearch= (props: any)=> {
    const navigate= useNavigate()

    return (
        <div style={{width: "100%", position: "absolute", top: "100%", left: 0, borderRadius: 10, border: "1px solid #e7e7e7", background: "#fff", zIndex: 99}}>
            <div style={{width: "100%", padding: 5}}>
                {props?.resultSearch?.length > 0 && props?.resultSearch?.slice(0, 5)?.map((item: any, key: number)=> <div onClick={()=> {
                    navigate("/product/"+ item.item.id)
                    props?.setSearchQuery("")
                    props?.setOpenSearch(false)
                    }} key={key} style={{display: "flex", marginTop: 10, cursor: "pointer"}}>
                    <div className={"c-flex-center"}>
                        <img style={{width: 50, height: 50, borderRadius: 10}} src={item.item.image1} alt="" />
                    </div>
                    <div style={{width: "calc(100% - 50px)", marginLeft: 5}}>
                        <div style={{fontSize: 14, whiteSpace: "nowrap", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis"}}>{item.item.product_name}</div>
                        <div>{numberWithCommas((parseInt(item?.item?.price) * (1 - parseInt(item?.item?.discount) / 100)).toFixed(0))}đ</div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Header