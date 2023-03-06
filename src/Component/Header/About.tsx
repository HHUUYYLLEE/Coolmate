// import { relative } from "path"
import {Link} from "react-router-dom"

const About = (props: any) => {
  return (
    <div style={{width: "100%", display:'block', paddingBottom:'3.5rem'}}>
        <div style={{marginBottom: 32, color:'#8e8e8e', fontWeight:600}}>
            Coolmate
        </div>
        
        <div style={{display:'flex'}}>
            <div style={{display: 'block', cursor:'pointer'}}>
                <img src="https://mcdn.coolmate.me/image/August2022/mceclip0_97.jpg" alt="" style={{borderRadius:'8%', width:'21rem', height:'14rem'}} />
                <div style={{fontWeight:600}}>
                    Coolmate 101
                </div>
                <div>
                    Tất cả những gì bạn muốn biết về Coolmate!
                </div>
                <div>
                    và gia nhập Coolmate
                </div>
            </div>

            <div style={{display: 'block', paddingLeft:'1.5rem', cursor:'pointer'}}>
                <img src="https://mcdn.coolmate.me/image/August2022/mceclip1_92.jpg" alt="" style={{borderRadius:'8%', width:'21rem', height:'14rem'}} />
                <div style={{fontWeight:600}}>
                    Dịch vụ 100% hài lòng
                </div>
                <div>
                    Bật mí 11 dịch vụ Coolmate cam kết với
                </div>
                <div>
                    khách hàng
                </div>
            </div>

            <div style={{display: 'block', paddingLeft:'1.5rem', cursor:'pointer'}}>
                <img src="https://mcdn.coolmate.me/image/August2022/mceclip2_100.jpg" alt="" style={{borderRadius:'8%', width:'21rem', height:'14rem'}}/>
                <div style={{fontWeight:600}}>
                    Coolclub- Khách hàng thân thiết
                </div>
                <div>
                    Những ưu đãi hấp dẫn dành cho khách
                </div>
                <div>
                    hàng thân thiết
                </div>
            </div>

            <div style={{display: 'block', paddingLeft:'1.5rem', cursor:'pointer'}}>
                <img src="https://mcdn.coolmate.me/image/August2022/mceclip3_34.jpg" alt="" style={{borderRadius:'8%', width:'21rem', height:'14rem'}}/>
                <div style={{fontWeight:600}}>
                    Câu chuyện
                </div>
                <div>
                    Về Startup với mô hình Online D2C
                </div>
            </div>
        </div>
    </div>
  )
}
type propsAbout= {
    link?: string, 
    title?: string,
    setOpen?: any
}

const AAbout= (props: propsAbout)=> {
    return (
        <div>
            <Link onClick={()=> props?.setOpen(()=> false)} className={"link-x"} to={`/collection/${props?.link}`} style={{color: "#00000080", textDecoration: "none", fontWeight: 600}}>
                <div style={{fontSize: 16, color: "#00000080", marginBottom: 12}}>{props?.title}</div>
            </Link>
        </div>
    )
}

export default About