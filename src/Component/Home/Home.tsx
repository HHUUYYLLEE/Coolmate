import React from 'react'
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
};

const settings2 = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    autoplay: true
};

const Home = () => {
  return (
    <div style={{width: "100%"}}>
        <Slider {...settings}>
            <div style={{flex:"1 1 0"}}>
                <img alt={""} style={{width: "100%", borderRadius: 10, aspectRatio: 5 / 2}} src={"https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/February2023/Banner-1.30.jpg"} />
            </div>
            <div style={{flex:"1 1 0"}}>
                <img alt={""} style={{width: "100%", borderRadius: 10}} src={"https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/February2023/Banner_valentine.jpg"} />
            </div>
            <div style={{flex:"1 1 0"}}>
                <img alt={""} style={{width: "100%", borderRadius: 10}} src={"https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/February2023/Banner-Combo.png"} />
            </div>
        </Slider>
        <div style={{position: "relative"}}>
            <div style={{width: "100%", display: "flex", justifyContent: 'space-evenly', alignItems: "center", position: "absolute", top: -120, zIndex: 999}}>
                <div style={{flex: '1 1 0', padding: 10}}>
                    <div className={"c-flex-center"} style={{width: '100%', padding: 10, height: 50, borderRadius: 10, border: "1px solid #fff", flexDirection: "column", gap: 5}}>
                        <div style={{textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 600}}>
                            Miễn phí vận chuyển cho
                        </div>
                        <div style={{textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 600}}>
                            đơn hàng trên 200K
                        </div>
                    </div>
                </div>
                <div style={{flex: '1 1 0', padding: 10}}>
                    <div className={"c-flex-center"} style={{width: '100%', padding: 10, height: 50, borderRadius: 10, border: "1px solid #fff", flexDirection: "column", gap: 5}}>
                        <div style={{textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 600}}>
                            60 ngày đổi trả
                        </div>
                        <div style={{textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 600}}>
                            vì bất cứ lý do gì
                        </div>
                    </div>
                </div>
                <div style={{flex: '1 1 0', padding: 10}}>
                    <div className={"c-flex-center"} style={{width: '100%', padding: 10, height: 50, borderRadius: 10, border: "1px solid #fff", flexDirection: "column", gap: 5}}>
                        <div style={{textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 600}}>
                            Đến tận nơi nhận hàng trả
                        </div>
                        <div style={{textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 600}}>
                            hoàn tiền trong 24h
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div style={{marginTop: 45, width: "100%"}}>
            <div style={{textAlign: "center", fontWeight: 600, color: '#2f5acf', marginBottom: 12}}>Bạn tìm gì hôm nay?</div>
            <div className={"c-flex-center"} style={{width: "100%"}}>
                <input type="text" style={{width: 700, height: 50, borderRadius: 10, outlineColor: "#2e89ff", padding: 10}} placeholder={`Hãy thử bắt đầu với "Quần đen" xem sao`} />
            </div>
        </div>
        <div className={"h-p"} style={{margin: "20px 0", width: '100%', borderTop: "1px solid #e7e7e7"}}>
            <div style={{textAlign: 'center', marginBottom: 8, marginTop: 8, fontWeight: 600}}>Một vài sản phẩm nổi bật</div>
            <div style={{width: "100%", padding: 10}}>
                <Slider {...settings2}>
                    <div style={{width: "25%"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2023/1017-1_copy_copys21.jpg" alt="" />
                        <div style={{marginTop: 12, fontWeight: 600 }}>
                            Combo 03 Quần short nam thể thao Recycle 7" thoáng khí
                        </div>
                        <div style={{marginTop: 10, display: "flex", alignItems: "center", gap: 8}}>
                            <div style={{color: "red"}}>399.000đ</div>
                            <del style={{color: "#00000080"}}>717.000đ</del>
                            <div style={{color: "red"}}>-44%</div>
                        </div>
                    </div>
                    <div style={{width: "25%"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2023/promax-shot-4-2.jpg" alt="" />
                        <div style={{marginTop: 12, fontWeight: 600 }}>
                            Combo 03 Quần short nam thể thao Recycle 7" thoáng khí
                        </div>
                        <div style={{marginTop: 10, display: "flex", alignItems: "center", gap: 8}}>
                            <div style={{color: "red"}}>399.000đ</div>
                            <del style={{color: "#00000080"}}>717.000đ</del>
                            <div style={{color: "red"}}>-44%</div>
                        </div>
                    </div>
                    <div style={{width: "25%"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2023/combo3166_0.jpg" alt="" />
                        <div style={{marginTop: 12, fontWeight: 600 }}>
                            Combo 03 Quần short nam thể thao Recycle 7" thoáng khí
                        </div>
                        <div style={{marginTop: 10, display: "flex", alignItems: "center", gap: 8}}>
                            <div style={{color: "red"}}>399.000đ</div>
                            <del style={{color: "#00000080"}}>717.000đ</del>
                            <div style={{color: "red"}}>-44%</div>
                        </div>
                    </div>
                    <div style={{width: "25%"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2023/cleandye12-0_46_32.jpg" alt="" />
                        <div style={{marginTop: 12, fontWeight: 600 }}>
                            Combo 03 Quần short nam thể thao Recycle 7" thoáng khí
                        </div>
                        <div style={{marginTop: 10, display: "flex", alignItems: "center", gap: 8}}>
                            <div style={{color: "red"}}>399.000đ</div>
                            <del style={{color: "#00000080"}}>717.000đ</del>
                            <div style={{color: "red"}}>-44%</div>
                        </div>
                    </div>
                    <div style={{width: "25%"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2023/recycle-3-mau-3_80.jpg" alt="" />
                        <div style={{marginTop: 12, fontWeight: 600 }}>
                            Combo 03 Quần short nam thể thao Recycle 7" thoáng khí
                        </div>
                        <div style={{marginTop: 10, display: "flex", alignItems: "center", gap: 8}}>
                            <div style={{color: "red"}}>399.000đ</div>
                            <del style={{color: "#00000080"}}>717.000đ</del>
                            <div style={{color: "red"}}>-44%</div>
                        </div>
                    </div>
                    <div style={{width: "25%"}}>
                        <img style={{width: "100%", aspectRatio: 2 / 3, borderRadius: 10}} src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2023/11teeactivedentruoc_51.jpg_34.jpg" alt="" />
                        <div style={{marginTop: 12, fontWeight: 600 }}>
                            Combo 03 Quần short nam thể thao Recycle 7" thoáng khí
                        </div>
                        <div style={{marginTop: 10, display: "flex", alignItems: "center", gap: 8}}>
                            <div style={{color: "red"}}>399.000đ</div>
                            <del style={{color: "#00000080"}}>717.000đ</del>
                            <div style={{color: "red"}}>-44%</div>
                        </div>
                    </div>

                </Slider>

            </div>
        </div>
        <div style={{width: "100%", margin: "45px 0", borderTop: "1px solid #e7e7e7"}}>
            <div style={{width: "100%", padding: "0 20px", marginTop: 30}}>
                <img draggable={false} src="https://mcdn.coolmate.me/image/February2023/mceclip0_88.jpg" style={{width: "100%", borderRadius: 10}} alt="" />
            </div>
            <div style={{width: "100%", padding: "0 20px", marginTop: 30}}>
                <img draggable={false} src="https://res.cloudinary.com/cockbook/image/upload/v1675847346/single/Screenshot_2023-02-08_160801_a7gxiv.png" style={{width: "100%", borderRadius: 10}} alt="" />
            </div>
            <div style={{width: "100%", padding: "0 20px", marginTop: 30}}>
                <img draggable={false} src="https://res.cloudinary.com/cockbook/image/upload/v1675847660/single/Screenshot_2023-02-08_161139_d2gkm1.png" style={{width: "100%", borderRadius: 10}} alt="" />
            </div>
        </div>
        <div>
            <div style={{textAlign: "center", fontSize: 96, fontWeight: 600, marginBottom: 30}}>
                Coolmate Basics
            </div>
            
        </div>
        <div style={{width: "100%", padding: "0 20px", marginTop: 30}}>
            <img draggable={false} src="https://res.cloudinary.com/cockbook/image/upload/v1675848246/single/Screenshot_2023-02-08_162346_if9yju.png" style={{width: "100%", borderRadius: 10}} alt="" />
        </div>
        <div style={{width: "100%", padding: "0 20px", marginTop: 30}}>
            <img draggable={false} src="https://res.cloudinary.com/cockbook/image/upload/v1675848643/single/Screenshot_2023-02-08_163026_axn2zc.png" style={{width: "100%", borderRadius: 10}} alt="" />
        </div>
        <div style={{width: "100%", padding: "0 20px", marginTop: 30}}>
            <img draggable={false} src="https://res.cloudinary.com/cockbook/image/upload/v1675848825/single/Screenshot_2023-02-08_163323_a8pbuv.png" style={{width: "100%", borderRadius: 10}} alt="" />
        </div>
    </div>  
  )
}

export default Home