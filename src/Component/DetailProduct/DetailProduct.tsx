import React from "react"
import Slider from "react-slick";

const DetailProduct = (): React.ReactComponentElement<any> => {
  return (
    <div style={{display: "flex"}} className={"c-flex-center"}>
        <div style={{width: "100%", maxWidth: 1280}}>
            <div style={{width: "100%", display: "flex", maxWidth: "100%"}}>
                <div style={{width: "50%", padding: 35}}>
                    <SilderImageProduct />
                </div>
                <div style={{width: "50%", padding: 35}}>
                    <RightSide />
                </div>
                {/*  */}
            </div>
            <div style={{width: "100%", margin: "18px 0"}}>
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
            </div>
        </div>
    </div>
  )
}

const SilderImageProduct= (): React.ReactComponentElement<any> => {
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
                <div style={{flex:"1 1 0"}}>
                    <img alt={""} style={{width: "100%", borderRadius: 10}} src={"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/jogger-casual-xam-nhat5_36.jpg"} />
                </div>
                <div style={{flex:"1 1 0"}}>
                    <img alt={""} style={{width: "100%", borderRadius: 10}} src={"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/jogger-casual-xam-nhat2_60.jpg"} />
                </div>
            </Slider>
        </div>
    )
}

const RightSide= (): React.ReactComponentElement<any>=> {
    return (
        <div style={{width: '100%'}}>
            <div style={{fontSize: 32, fontWeight: 600, marginBottom: 8}}>Quần nỉ nam Jogger Casual co giãn</div>
            <div style={{display: "flex", alignItems: 'center', gap: 8}}>
                <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', gap: 5}}>
                    <div className={"c-flex-center"}>
                        <img style={{width: 12, height: 12}} src="https://www.coolmate.me/images/star.svg?9032b9976af477fff0e8b7f2de9556d2" alt="" />
                    </div>
                    <div className={"c-flex-center"}>
                        <img style={{width: 12, height: 12}} src="https://www.coolmate.me/images/star.svg?9032b9976af477fff0e8b7f2de9556d2" alt="" />
                    </div>
                    <div className={"c-flex-center"}>
                        <img style={{width: 12, height: 12}} src="https://www.coolmate.me/images/star.svg?9032b9976af477fff0e8b7f2de9556d2" alt="" />
                    </div>
                    <div className={"c-flex-center"}>
                        <img style={{width: 12, height: 12}} src="https://www.coolmate.me/images/star.svg?9032b9976af477fff0e8b7f2de9556d2" alt="" />
                    </div>
                    <div className={"c-flex-center"}>
                        <img style={{width: 12, height: 12}} src="https://www.coolmate.me/images/star.svg?9032b9976af477fff0e8b7f2de9556d2" alt="" />
                    </div>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: 12, marginBottom: 24}}>
                <div style={{fontWeight: 600}}>219.000đ</div>
                <div style={{color: "#00000080", fontWeight: 600}}>299.000đ</div>
                <div style={{fontSize: 14, color: '#f00'}}>-27%</div>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: 8}}>
                <div style={{marginRight: 8}}>Màu sắc: </div><div style={{fontWeight: 600}}>Xám nhạt</div>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: 8}}>
                <div style={{marginRight: 8}}>Kích thước quần: </div><div style={{fontWeight: 600}}>M</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', gap: 20, marginBottom: 12}}>
                <div style={{width: 60, height: 40, borderRadius: 10, background: "#f2f0f5", fontWeight: 600}} className={"c-flex-center"}>
                    M
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: 20}}>
                <div style={{padding: "10px 20px", borderRadius: 20, border: "1px solid #000", display: "flex", justifyContent: 'space-between', alignItems: "center", height: 40}}>
                    <div>-</div>
                    <div style={{padding: "0 16px", fontWeight: 600}}>1</div>
                    <div>+</div>
                </div>
                <div style={{width: 350, height: 40, borderRadius: 20, background: "#000", color: "#fff", display: "flex", justifyContent: 'center', alignItems: 'center'}}>
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
            <div style={{width: "100%", display: "flex", justifyContent: 'space-between'}}>
                <div style={{flex: "1 1 0", padding: 5}}>
                    <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2021/nha1a_5.jpg" alt="" />
                    <div style={{margin: "5px 0", fontWeight: 600}}>Áo thun nam Cotton Coolmate Basics 200gsm</div>
                </div>
                <div style={{flex: "1 1 0", padding: 5}}>
                    <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2021/nha1a_5.jpg" alt="" />
                    <div style={{margin: "5px 0", fontWeight: 600}}>Áo thun nam Cotton Coolmate Basics 200gsm</div>
                </div>
                <div style={{flex: "1 1 0", padding: 5}}>
                    <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2021/nha1a_5.jpg" alt="" />
                    <div style={{margin: "5px 0", fontWeight: 600}}>Áo thun nam Cotton Coolmate Basics 200gsm</div>
                    <div style={{margin: "5px 0", fontWeight: 600, fontSize: 14}}>149.000đ</div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct