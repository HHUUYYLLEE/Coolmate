import React, { Fragment, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import AddToCart from "../../api/add_to_cart";
import getProduct from "../../api/get_product";
import getSize from "../../api/get_size";
import getSlider from "../../api/get_slider_product";
import getSuggest from "../../api/get_suggest";
import numberWithCommas from "../../util/thousand_separator";
import swal from "sweetalert"
import getColor from "../../api/getColor";

const DetailProduct = (): React.ReactComponentElement<any> => {
  const [data, setData]= useState<any>(()=> [])
  const {id_product }= useParams()
  useEffect(()=> {
    (async()=> {
        const result= await getProduct(id_product)
        return setData(result)
    })()
    getProduct(id_product)
  }, [id_product])

  return (
    <div style={{display: "flex"}} className={"c-flex-center"}>
        <div style={{width: "100%", maxWidth: 1280}}>
            <div className={"p-1-1"} style={{width: "100%", display: "flex", maxWidth: "100%"}}>
                <div style={{width: "50%", padding: 35}}>
                    <SilderImageProduct />
                </div>
                <div style={{width: "50%", padding: 35}}>
                    <RightSide dataProduct={data} />
                </div>
                {/*  */}
            </div>
            {/* <div style={{width: "100%", margin: "18px 0"}}>
                <div style={{width: "100%", borderTop: "1px solid #e7e7e7"}}></div>
                <div style={{margin: "12px 0", fontWeight: 600, fontSize: 24}}>Chi tiết sản phẩm</div>
                <div style={{width: "100%"}}>
                    <div style={{width: "100%", padding: "0 64px", margin: "12px 0"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="	https://mcdn.coolmate.me/image/February2023/mceclip0_94.jpg" alt="" />
                    </div>
                    <div style={{width: "100%", padding: "0 64px", margin: "12px 0"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="	https://mcdn.coolmate.me/image/February2023/mceclip0_94.jpg" alt="" />
                    </div>
                    <div style={{width: "100%", padding: "0 64px", margin: "12px 0"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="	https://mcdn.coolmate.me/image/February2023/mceclip0_94.jpg" alt="" />
                    </div>
                    <div style={{width: "100%", padding: "0 64px", margin: "12px 0"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="	https://mcdn.coolmate.me/image/February2023/mceclip0_94.jpg" alt="" />
                    </div>
                    <div style={{width: "100%", padding: "0 64px", margin: "12px 0"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="	https://mcdn.coolmate.me/image/February2023/mceclip0_94.jpg" alt="" />
                    </div>
                    <div style={{width: "100%", padding: "0 64px", margin: "12px 0"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="	https://mcdn.coolmate.me/image/February2023/mceclip0_94.jpg" alt="" />
                    </div>
                    <div style={{width: "100%", padding: "0 64px", margin: "12px 0"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="	https://mcdn.coolmate.me/image/February2023/mceclip0_94.jpg" alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

const SilderImageProduct= (): React.ReactComponentElement<any> => {
    const {id_product }= useParams()
    const [data, setData]= useState<[]>(()=> [])
    useEffect(()=> {
        (async()=> {
            const result= await getSlider(id_product)
            return setData(result)
        })()
    }, [id_product])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      };
    return (
        <div style={{width: "100%"}}>
            <Slider {...settings}>
                {
                    data?.map((item: any, key)=> <div key={key} style={{flex:"1 1 0"}}>
                    <img alt={""} style={{width: "100%", borderRadius: 10}} src={item?.image} />
                </div>)
                }
                
            </Slider>
        </div>
    )
}

const RightSide= (props: any): React.ReactComponentElement<any>=> {
    const [data, setData]= useState<any>(()=> [])
    const [data2, setData2]= useState<any>(()=> [])
    const [size, setSize]= useState<string>("M")
    const [color, setColor]= useState<string>("Xám nhạt")
    const [amount, setAmount]= useState<number>(1)
    const {id_product}= useParams()
    useEffect(()=> {
        (async()=> {
            const result= await getSize(id_product)
            const result2= await getColor(id_product)
            setData2(result2)
            return setData(result)
        })()
    }, [id_product])
    return (
        <div style={{width: '100%'}}>
            <div style={{fontSize: 32, fontWeight: 600, marginBottom: 8}}>{props?.dataProduct?.product_name}</div>
            <div style={{display: "flex", alignItems: 'center', gap: 8}}>
                <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', gap: 5}}>
                   
                    {
                        props?.dataProduct?.review && Array.from(Array(Math.round(parseFloat(props?.dataProduct?.review))).keys()).map((item: number)=> <div key={item} className={"c-flex-center"}>
                        <img style={{width: 12, height: 12}} src="https://www.coolmate.me/images/star.svg?9032b9976af477fff0e8b7f2de9556d2" alt="" />
                    </div>)
                    }
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: 12, marginBottom: 24}}>
                <div style={{fontWeight: 600}}>{numberWithCommas(parseInt(props?.dataProduct?.price) * (1 - parseInt(props?.dataProduct?.discount) / 100))}đ</div>
                <del style={{color: "#00000080", fontWeight: 600}}>{numberWithCommas(props?.dataProduct?.price)}đ</del>
                <div style={{fontSize: 14, color: '#f00'}}>-{props?.dataProduct?.discount}%</div>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: 8}}>
                <div style={{marginRight: 8}}>Màu sắc: </div><div style={{fontWeight: 600}}>{color}</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', gap: 20, marginBottom: 12, flexWrap: "wrap"}}>
                {
                    data2?.map((item: any, key: any)=> <Fragment key={key}>
                         <div onClick={()=> setColor(()=> item?.color) } style={{width: 100, height: 40, borderRadius: 10, background: item?.color.toString()=== color.toString() ? "#555": "#f2f0f5", fontWeight: 600, cursor: "pointer", color: item?.color?.toString()=== color.toString() ? "#fff": "#000"}} className={"c-flex-center"}>
                            {item?.color}
                        </div>
                    </Fragment>)
                }
                
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: 8}}>
                <div style={{marginRight: 8}}>Kích thước: </div><div style={{fontWeight: 600}}>{size}</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', gap: 20, marginBottom: 12}}>
                {
                    data?.map((item: any, key: any)=> <Fragment key={key}>
                         <div onClick={()=> setSize(()=> item?.size) } style={{width: 60, height: 40, borderRadius: 10, background: item.size.toString()=== size.toString() ? "#555": "#f2f0f5", fontWeight: 600, cursor: "pointer", color: item.size.toString()=== size.toString() ? "#fff": "#000"}} className={"c-flex-center"}>
                            {item?.size}
                        </div>
                    </Fragment>)
                }
                
            </div>
            <div style={{display: "flex", alignItems: "center", gap: 20}}>
                <div style={{padding: "10px 20px", borderRadius: 20, border: "1px solid #000", display: "flex", justifyContent: 'space-between', alignItems: "center", height: 40}}>
                    <div style={{cursor: "pointer"}} onClick={()=> {
                        if(amount> 1) {
                            setAmount(()=> amount - 1)
                        }
                    }}>-</div>
                    <div style={{padding: "0 16px", fontWeight: 600}}>{amount}</div>
                    <div style={{cursor: "pointer"}} onClick={()=> {
                        setAmount(()=> amount + 1)
                    }}>+</div>
                </div>
                <div onClick={async ()=> {
                await AddToCart(id_product, size, amount, color)  
                swal("Thông báo", "Thêm vào giỏ hàng thành công", "success")

            }} style={{width: 350, height: 40, borderRadius: 20, background: "#000", color: "#fff", display: "flex", justifyContent: 'center', alignItems: 'center', cursor: "pointer"}}>
                    <img src="https://www.coolmate.me/images/icon-cart.svg?708f2c22fb85099a3e6641a2a81b3b67" style={{width: 20, height: 20, marginRight: 18}} alt="" />
                    <div>Thêm vào giỏ hàng</div>
                </div>
            </div>
            <div style={{borderTop: '1px solid #e7e7e7', width: "100%", marginTop: 24, marginBottom: 24}}></div>
            <div style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", margin: "12px 0"}}>
                <div style={{fontWeight: 600}}>Đăc điểm nổi bật</div>
                <div>
                    <img src="https://www.coolmate.me/images/plus.svg?ba7778672673818acd29e749bd3c4e00" style={{width: 12, height: 12}} alt="" />
                </div>
            </div>
            {/*  */}
            <div style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", margin: "12px 0"}}>
                <div style={{fontWeight: 600}}>Sản phẩm bạn có thể thích</div>
               
            </div>
            <Suggest />
        </div>
    )
}

const Suggest= (props: any): React.ReactComponentElement<any>=> {
    const [data, setData]= useState<any>(()=> [])
    useEffect(()=> {
        (async()=> {
            const result= await getSuggest()
            return setData(result)
        })()
    }, [])
    return (
        <div style={{width: "100%", display: "flex", justifyContent: 'space-between'}}>
            {
                data?.map((item: any, key: number)=> <Link key={key} style={{textDecoration: "none", color: "unset"}} to={"/product/"+ item?.id}>
                <div style={{flex: "1 1 0", padding: 5}}>
                <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src={item?.image1} alt="" />
                <div style={{margin: "5px 0", fontWeight: 600}}>{item?.product_name}</div>
                <div style={{margin: "5px 0", fontWeight: 600, fontSize: 14}}>{numberWithCommas(item?.price)}đ</div>
            </div></Link>)
            }
            
        </div>
    )
}

export default DetailProduct