import React from "react"

const Footer= (): React.ReactElement<any>=> {
    return (
        <div className={"wrap-footer"} style={{width: "100%", background: "#000"}}>
            <div className={"footer"}>
                <ComponentFooter title={"Khám phá Coolmate"} arr_li={["Áo Polo", "Áo T-shirt", "Áo sơ mi", "Quần", "Quần Lót", "Tất(Vớ)", "Mũ(Nón)", "Phụ kiện khác"]} />
                <ComponentFooter title={"Dịch vụ khách hàng"} arr_li={["Hỏi đáp - FAQs", "Chính sách đổi trả 60 ngày", "Liên hệ", "Thành viên Coolclub", "Khách hàng hài lòng 100%", "Chính sách khuyến mãi", "Chính sách giao hàng", "Chính sách bảo mật"]} />
                <ComponentFooter title={"Tài liệu - Tuyển dụng"} arr_li={["Tuyển dụng", "Đăng ký bản quyền"]} />
                <ComponentFooter title={"Địa chỉ liên hệ"} arr_li={["HUB Hà Nội: Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng Hưng, Phường Phúc La, Quận Hà Đông, TP Hà Nội", "HUB Tp HCM: Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh"]} />
                
            </div>  
            <div className={"f-1-1"} style={{width: "100%", padding: 30}}>
                <div className={"f-2-1"} style={{width: "100%", borderTop: "1px solid #fff"}}>
                    <div className={"f-3-1"} style={{width: "100%", marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div>
                            <div style={{marginBottom: 8, fontSize: 14 }}>
                                @ CÔNG TY TNHH FASTECH ASIA 
                            </div>
                            <div style={{marginBottom: 8, fontSize: 14 }}>
                                Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.
                            </div>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/cockbook/image/upload/v1675849224/single/Screenshot_2023-02-08_164013_vibtay.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const ComponentFooter= (props: React.PropsWithoutRef<any>): React.ReactComponentElement<any>=> {
    return (
        <div className={"c-footer"} style={{flex: "1 1 0"}}>
            <div className={"t-footer"} style={{fontWeight: 600, fontSize: 18, marginBottom: 18}}>{props?.title}</div>
            {
                props?.arr_li?.map((item: string, key: number)=> <div key={key} style={{marginBottom: 12, textTransform: "capitalize"}}>{item}</div>)
            }
        </div>
    )
}

export default Footer