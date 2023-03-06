// import { relative } from "path"
import {Link} from "react-router-dom"

const Blog = (props: any) => {
  return (
    <div style={{width: "100%", display:'flex', paddingBottom:'3.5rem'}}>

        <div style={{display: 'block', paddingLeft:'23rem'}}>
            <div className="dropdownTopPart" style={{fontWeight: 600, marginBottom: 32}}>Mặc đẹp</div>
                <div style={{display:'block'}}>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Thuật ngữ thời trang</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Phối đồ</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Thương hiệu thời trang</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Xu hướng - Phong cách</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Mua gì ở đâu</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Chất liệu may mặc</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Mẹo hay với trang phục</div>
                </div>
        </div>

        
        <div style={{display: 'block', paddingLeft:'3rem'}}>
            <div className="dropdownTopPart" style={{fontWeight: 600, marginBottom: 32}}>Sống chất</div>
                <div style={{display:'block'}}>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Kinh nghiệm hay</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Chăm sóc nam giới</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Giải trí</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Văn hoá</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Trend mới</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Câu chuyện nhân vật</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Quà tặng</div>
                    <div className="dropdownBottomPart" style={{marginBottom: 16}}>Tâm lý tình cảm</div>
                </div>
        </div>

        <div style={{display: 'block', paddingLeft:'3rem'}}>
            <div className="dropdownTopPart" style={{fontWeight: 600, marginBottom: 32}}>Coolmate Có Gì Mới</div>
            <div style={{display:'block'}}>
                   
                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div>Top 10 sản phẩm bán chạy nhất tháng</div>
                        <div style={{marginBottom: 16}}>1/2023 tại Coolmate</div>
                    </div>

                    <div className="dropdownBottomPart" style={{display:'block'}}>
                        <div>Cùng nhìn lại 2022, Care&Share đã làm</div>
                        <div style={{marginBottom: 16}}>được những gì?</div>
                    </div>

                    <hr />
                    <br />

                    <div style={{cursor: 'pointer'}}>
                        <img style={{width: '18rem', height: '10rem', borderRadius:'8%'}} src="https://mcdn.coolmate.me/image/February2023/mceclip1_76.jpg" alt="" />
                    </div>

                </div>
        </div>

    </div>
  )
}
type propsBlog= {
    link?: string, 
    title?: string,
    setOpen?: any
}

const BBlog= (props: propsBlog)=> {
    return (
        <div>
            <Link onClick={()=> props?.setOpen(()=> false)} className={"link-x"} to={`/collection/${props?.link}`} style={{color: "#00000080", textDecoration: "none", fontWeight: 600}}>
                <div style={{fontSize: 16, color: "#00000080", marginBottom: 12}}>{props?.title}</div>
            </Link>
        </div>
    )
}

export default Blog