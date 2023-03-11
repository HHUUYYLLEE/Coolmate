import {Link } from "react-router-dom"

const Categories = (props: any) => {
  return (
    <div className="dropDownMobile" style={{width: "100%", display:'flex', paddingBottom:'3.5rem'}}>

        <div style={{display: 'block', paddingLeft:'6rem'}}>
            <div className="dropdownTopPart" style={{fontWeight: 600, color: "#00000080", marginBottom: 32}}>Nhu cầu</div>
                <div style={{display:'block'}}>
                    <div className="dropdownBottomPart" style={{fontWeight: 600, marginBottom: 16}}>399k cho 3</div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Đồ thu - đông</div>
                        <div style={{marginBottom: 16}}>Fall-Winter Collection</div>
                    </div>
                    
                    <div className="careshare dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Care & Share</div>
                        <div style={{marginBottom: 10}}>10% doanh thu dành cho các</div>
                        <div style={{marginBottom: 16}}>bé</div>
                    </div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Mặc nhà & Mặc trong</div>
                        <div style={{marginBottom: 16}}>Homewear & Underwear</div>
                    </div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Mặc hàng ngày</div>
                        <div style={{marginBottom: 16}}>Casual wear</div>
                    </div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Đồ thể thao</div>
                        <div style={{marginBottom: 16}}>Activewear</div>
                    </div>
                </div>
        </div>

        <div style={{display: 'block', paddingLeft:'6rem'}}>
            <div className="dropdownTopPart" style={{fontWeight: 600, color: "#00000080", marginBottom: 32}}>Danh mục</div>
            <div style={{width: "100%", display: "flex", gap: 110}}>
                <div>
                    <div className="dropdownBottomPart" style={{fontWeight: 600, marginBottom: 16}}>Áo Nam</div>
                    <CCategories setOpen={props?.setOpen} link="ao-dai-tay" title="Áo dài tay" />
                    <CCategories setOpen={props?.setOpen} link="ao-t-shirt" title="Áo T-Shirt" />
                    <CCategories setOpen={props?.setOpen} link="ao-polo" title="Áo Polo" />
                    <CCategories setOpen={props?.setOpen} link="ao-so-mi" title="Áo Sơ Mi" />
                    <div className="dropdownBottomPart" style={{fontSize: 16, marginBottom: 12}}>Áo Thể Thao</div>
                    <div className="dropdownBottomPart" style={{fontSize: 16, marginBottom: 12}}>Áo Khoác</div>
                    <div className="dropdownBottomPart" style={{fontWeight: 600, marginBottom: 16}}>Phụ kiện</div>
                    <div className="dropdownBottomPart" style={{fontSize: 16, marginBottom: 12}}>Mũ (Nón)</div>
                    <div className="dropdownBottomPart" style={{fontSize: 16, marginBottom: 12}}>Tất (Vớ)</div>
                </div>
                
                <div>
                    <div className="dropdownBottomPart" style={{fontWeight: 600, marginBottom: 16}}>Quần Nam</div>
                    <CCategories setOpen={props?.setOpen} link="quan-short" title="Quần Short" />
                    <CCategories setOpen={props?.setOpen} link="quan-jeans" title="Quần Jeans" />
                    <CCategories setOpen={props?.setOpen} link="quan-dai" title="Quần dài" />
                    <div className="dropdownBottomPart" style={{fontWeight: 600, marginBottom: 16}}>Quần Lót Nam</div>
                    <div className="dropdownBottomPart" style={{fontSize: 16, marginBottom: 12}}>Quần Brief (Tam giác)</div>
                    <div className="dropdownBottomPart" style={{fontSize: 16, marginBottom: 12}}>Quần Trunk (Boxer)</div>
                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontSize: 16, marginBottom: 12}}>Quần Brief Boxer</div>
                        <div style={{fontSize: 16, marginBottom: 12}}>(Boxer dài)</div>
                    </div>
                    <div className="dropdownBottomPart" style={{fontWeight: 600, marginBottom: 16}}>Tất cả sản phẩm</div>
                </div>
            </div>
        </div>

        <div style={{display: 'block', paddingLeft:'5rem', width: '18.1rem'}}>
            <div className="dropdownTopPart" style={{fontWeight: 600, color: "#00000080", marginBottom: 32}}>Bộ Sưu Tập</div>
            <div style={{display:'block'}}>
                   
                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Ant-Man & The Wasp</div>
                        <div style={{marginBottom: 16}}>Phá đảo thế giới lượng tử</div>
                    </div>
                    
                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Vũ trụ áo Marvel</div>
                        <div style={{marginBottom: 10}}>Bước vào thế giới siêu anh</div>
                        <div style={{marginBottom: 16}}>hùng</div>
                    </div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Clean Vietnam</div>
                        <div style={{marginBottom: 10}}>Sự kết hợp giữa Coolmate &</div>
                        <div style={{marginBottom: 16}}>Vietmax</div>
                    </div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Coolmate Basics</div>
                        <div style={{marginBottom: 16}}>Mua sắm tiết kiệm với giá tốt</div>
                    </div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Sản phẩm bền vững</div>
                        <div style={{marginBottom: 10}}>Sản phẩm thân thiện với môi</div>
                        <div style={{marginBottom: 16}}>trường</div>
                    </div>
                </div>
        </div>

        <div style={{display: 'block', paddingLeft:'4.5rem'}}>
            <div className="dropdownTopPart" style={{fontWeight: 600, color: "#00000080", marginBottom: 32}}>Công nghệ</div>
            <div style={{display:'block'}}>
                   
                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Excool</div>
                        <div style={{marginBottom: 16}}>Công nghệ làm mát tối đa</div>
                    </div>
                    
                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>CLeandye</div>
                        <div style={{marginBottom: 16}}>Nhuộm không dùng nước</div>
                    </div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>HeiQ Viroblock</div>
                        <div style={{marginBottom: 16}}>Diệt 99,99% virus SARS-CoV2</div>
                    </div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div style={{fontWeight: 600}}>Anti-Smell</div>
                        <div style={{marginBottom: 10}}>Công nghệ khử mùi từ Nhật</div>
                        <div style={{marginBottom: 16}}>Bản</div>
                    </div>

                </div>
        </div>

    </div>
  )
}
type propsCategories= {
    link?: string, 
    title?: string,
    setOpen?: any
}

const CCategories= (props: propsCategories)=> {
    return (
        <div>
            <Link onClick={()=> props?.setOpen(()=> false)} className={"link-x"} to={`/collection/${props?.link}`} style={{color: "#00000080", textDecoration: "none", fontWeight: 600}}>
                <div style={{fontSize: 16, color: "#00000080", marginBottom: 12}}>{props?.title}</div>
            </Link>
        </div>
    )
}

export default Categories