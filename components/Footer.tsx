import styled from "styled-components";
import React from "react";
import { Button, Typography } from "@mui/material";

const Explorer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  max-width: 160px;
  gap: 12px;
  color: #d9d9d9;
`;
const Customer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;
  flex-basis: 20%;
  gap: 12px;
  color: #d9d9d9;
`;
const Docum = styled.div`
  max-width: 160px;
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  gap: 12px;
  color: #d9d9d9;
`;
const Address = styled.div`
  display: flex;
  max-width: 160px;
  flex-direction: column;
  flex-basis: 20%;
  gap: 12px;
  color: #d9d9d9;
`;
const Mail = styled.div`
  max-width: 160px;
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  gap: 12px;
  color: #d9d9d9;
`;

export const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        height: "auto",
        background: "black",
        justifyContent: "space-evenly",
        marginTop: "140px",
        padding: 30,
      }}
    >
      <Explorer>
        <Typography variant="body2" style={{ fontWeight: 600, color: "#FFF" }}>
          Khám phá COOLMATE
        </Typography>
        <Typography variant="caption">Áo Polo</Typography>
        <Typography variant="caption">Áo T-shirt</Typography>
        <Typography variant="caption">Áo Sơ mi</Typography>
        <Typography variant="caption">Quần</Typography>
        <Typography variant="caption">Quần Lót</Typography>
        <Typography variant="caption">Tất (Vớ)</Typography>
        <Typography variant="caption">Mũ (Nón)</Typography>
        <Typography variant="caption">Phụ Kiện Khác</Typography>
      </Explorer>
      <Customer>
        <Typography variant="body2" style={{ fontWeight: 600, color: "#FFF" }}>
          Hỏi đáp - FAQs
        </Typography>
        <Typography variant="caption">Chính sách đổi trả 60 ngày</Typography>
        <Typography variant="caption">Liên hệ</Typography>
        <Typography variant="caption">Thành viên Coolclub</Typography>
        <Typography variant="caption">Khách hàng hài lòng 100%</Typography>
        <Typography variant="caption">Chính sách khuyến mãi</Typography>
        <Typography variant="caption">Chính sách giao hàng</Typography>
        <Typography variant="caption">Chính sách bảo mật</Typography>
        <Typography variant="caption">Kiến thức mặc đẹp</Typography>
        <Typography variant="caption">Hướng dẫn chọn size</Typography>
        <Typography variant="caption">Blog</Typography>
        <Typography variant="caption">Group mặc đẹp sống chất</Typography>
      </Customer>
      <Docum>
        <Typography variant="body2" style={{ fontWeight: 600, color: "#FFF" }}>
          Tài liệu - Tuyển dụng
        </Typography>
        <Typography variant="caption">Tuyển dụng</Typography>
        <Typography variant="caption">Đăng ký bản quyền</Typography>
        <Typography variant="caption">Câu chuyện về Coolmate</Typography>
        <Typography variant="caption">Nhà máy</Typography>
        <Typography variant="caption">CoolClub</Typography>
        <Typography variant="caption">Care & Share</Typography>
      </Docum>
      <Address>
        <Typography variant="body2" style={{ fontWeight: 600, color: "#FFF" }}>
          Địa chỉ liên hệ
        </Typography>
        <Typography variant="caption">
          HUB Hà Nội: Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng Hưng, Phường Phúc
          La, Quận Hà Đông, TP Hà Nội
        </Typography>
        <Typography variant="caption">
          HUB Tp HCM: Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận
          7, Tp. Hồ Chí Minh
        </Typography>
      </Address>
      <Mail>
        <Typography variant="body2" style={{ fontWeight: 600, color: "#FFF" }}>
          COOLMATE lắng nghe bạn!
        </Typography>
        <Typography variant="caption">
          Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ
          khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn
          nữa.
        </Typography>
        <Button variant="contained">Gửi Ý Kiến</Button>
        <Typography variant="caption">
          Hotline 1900.272737 (028.7777.2737)
        </Typography>
        <Typography variant="caption">Email Cool@coolmate.me</Typography>
      </Mail>
    </div>
  );
};
