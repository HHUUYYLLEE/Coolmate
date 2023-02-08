import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import styled from "styled-components";
import RunningText from "./RunningText";

const src = {
  logo: "https://mcdn.coolmate.me/image/January2023/mceclip4_21.png",
  search: "https://www.coolmate.me/images/header/icon-search.svg",
  account: "https://www.coolmate.me/images/header/icon-account.svg",
  cart: "https://www.coolmate.me/images/header/icon-cart.svg",
};

const messages = [
  "Kính chúc Quý khách hàng năm mới Quý Mão 2023 AN KHANG - THỊNH VƯỢNG ",
  " COOLMATE SẼ HOẠT ĐỘNG TRỞ LẠI TỪ 28/1 (MÙNG 7 TẾT) ",
  "Bán hàng xuyên tết - Ưu đãi đến 50%",
  "Kính chúc Quý khách hàng năm mới Quý Mão 2023 AN KHANG - THỊNH VƯỢNG ",
  " COOLMATE SẼ HOẠT ĐỘNG TRỞ LẠI TỪ 28/1 (MÙNG 7 TẾT) ",
  "Bán hàng xuyên tết - Ưu đãi đến 50%",
];

const Category = styled.div`
  flex: 1;
  padding: 13px;

  div:nth-of-type(1) {
    color: grey;
    margin-bottom: 2rem;
  }

  div {
    margin: 10px 0px;
    font-weight: 600 !important;
    font-size: 13px !important;
    line-height: 200%;
  }
`;

const categoryItems = {
  desire: [
    {
      mainItem: "Giảm đến 50%",
      subItem: null,
    },
    {
      mainItem: "Care & Share",
      subItem: "10% doanh thu dành cho các bé",
    },
    {
      mainItem: "Đồ thu - đông",
      subItem: "Homewear & Underwear",
    },
    {
      mainItem: "Mặc hàng ngày",
      subItem: "Casual wear",
    },
    { mainItem: "Đồ thể thao", subItem: "Activewear" },
    {
      mainItem: "Phụ kiện",
      subItem: "Accessories",
    },
  ],
  category: [
    {
      mainItem: "Áo Nam",
      subItem: null,
    },
    {
      mainItem: "Áo dài tay",
      subItem: null,
    },
    {
      mainItem: "Áo T-shirt",
      subItem: null,
    },
    {
      mainItem: "Áo Polo",
      subItem: null,
    },
    {
      mainItem: "Áo Sơ Mi",
      subItem: null,
    },
    {
      mainItem: "Áo Thể Thao",
      subItem: null,
    },
    {
      mainItem: "Áo khoác",
      subItem: null,
    },
    {
      mainItem: "Phụ Kiện",
      subItem: null,
    },
    {
      mainItem: "Mũ (Nón)",
      subItem: null,
    },
    {
      mainItem: "Tất (Vớ)",
      subItem: null,
    },
  ],
  more: [
    { mainItem: "Quần Nam", subItem: null },
    { mainItem: "Quần Shorts", subItem: null },
    { mainItem: "Quần Jeans", subItem: null },
    { mainItem: "Quần Dài", subItem: null },
    { mainItem: "Quần Lót Nam", subItem: null },
    { mainItem: "Quần Brief (Tam giác)", subItem: null },
    { mainItem: "Quần Trunk (Boxer)", subItem: null },
    { mainItem: "Quần Brief Boxer", subItem: null },
    { mainItem: "(Boxer dài)", subItem: null },
    { mainItem: "Tất cả sản phẩm", subItem: null },
  ],
  collection: [
    {
      mainItem: "Ngày Xuân Con Én",
      subItem: "Tết này, có Én đây",
    },
    {
      mainItem: "Vũ trụ áo Marvel",
      subItem: "Bước vào thế giới siêu anh hùng",
    },
    {
      mainItem: "Clean Vietnam",
      subItem: "Sự kết hợp giữa Coolmate & Vietmax",
    },
    { mainItem: "Coolmate Basics", subItem: "Mua sắm tiết kiệm với giá tốt" },
    {
      mainItem: "Sản phẩm bền vững",
      subItem: "Sản phẩm thân thiện với môi trường",
    },
  ],
  tech: [
    {
      mainItem: "Excool",
      subItem: "Công nghệ làm mát tối đa",
    },
    {
      mainItem: "Cleandye",
      subItem: "Nhuộm không dùng nước",
    },
    {
      mainItem: "HeiQ Viroblock",
      subItem: "Diệt 99.99% virus SARS-CoV2",
    },
    {
      mainItem: "Anti-Smell",
      subItem: "Công nghệ khử mùi từ Nhật Bản",
    },
  ],
};

const list: any[] = [];

let tmpKey = 1;

for (const categoryItem in categoryItems) {
  const d = <div key={tmpKey++}>{categoryItem}</div>;
  const tmpDiv: any[] = [];
  if (categoryItems.hasOwnProperty(categoryItem)) {
    categoryItems[categoryItem as keyof typeof categoryItems].forEach(
      (item, ind) =>
        tmpDiv.push(
          <div key={tmpKey++}>
            <Typography variant="body2">{item.mainItem}</Typography>
            {item.subItem ? (
              <Typography variant="caption">{item.subItem}</Typography>
            ) : null}
          </div>
        )
    );
  }
  list.push(
    <Category className="category">
      {d}
      {tmpDiv}
    </Category>
  );
}

const MenuOnHover = styled.div`
  transition: all 0.3s;
  width: 100vw;
  background: "white";
  z-index: 11;
  color: "black";
  position: "absolute";
  p {
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    &:hover {
      color: "blue";
      font-size: "25px";
    }
  }

  span {
    cursor: pointer;
    font-size: 11px;
    :hover {
      color: "red";
    }
  }
`;

const SiteHeader = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  transition: all 0.3s;
  color: #231f20;
  width: 100%;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  height: 55px;
  text-align: center;
  img {
    position: inherit !important;
  }
  :hover {
    background-color: #f9f86c;
  }
`;

const HeaderLogo = styled.div`
  height: 100%;
  .logo_coolmate {
    position: inherit !important;
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  .header_items {
    padding: 0 15px;
    margin: auto;
    font-size: 0.85em;
    font-weight: 500;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: goldenrod;
    }
  }
`;

const HeaderAction = styled.div`
  display: flex;
  .header_actions_buttons {
    padding: 0 10px;
    margin: auto;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      transform: scale(1.5);
    }
  }
`;

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(true);

  const handleClick = (event: { currentTarget: SetStateAction<null> }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <RunningText messages={messages} />
      <SiteHeader>
        <HeaderLogo>
          <Link href={"/"}>
            <div style={{ height: "100%", width: "100%" }}>
              <Image
                fill
                loader={() => src.logo}
                src={src.logo}
                alt="Logo Coolmate"
              ></Image>
            </div>
          </Link>
        </HeaderLogo>
        <HeaderMenu>
          <div
            className="header_items product_header"
            onMouseEnter={() => setMenuOpen(true)}
          >
            Product
          </div>
          <div className="header_items">84RISINGS</div>
          <div className="header_items">CM24</div>
          <div className="header_items">Coolxprint</div>
          <div className="header_items">About Coolmate</div>
          <div className="header_items">#Lookback2022</div>
        </HeaderMenu>
        <HeaderAction>
          <div className="header_actions_buttons">
            <Image
              className="logo_coolmate"
              alt="search"
              loader={() => src.search}
              src={src.search}
              width={18}
              height={18}
            />
          </div>
          <div className="header_actions_buttons">
            <Image
              className="logo_coolmate"
              alt="account"
              loader={() => src.account}
              src={src.account}
              width={18}
              height={18}
            />
          </div>
          <div className="header_actions_buttons">
            <Image
              className="logo_coolmate"
              alt="cart"
              loader={() => src.cart}
              src={src.cart}
              width={18}
              height={18}
            />
          </div>
        </HeaderAction>
      </SiteHeader>
      {isMenuOpen ? (
        <MenuOnHover
          onMouseLeave={() => setMenuOpen(false)}
          style={{
            backgroundImage: ` url(https://mcdn.coolmate.me/image/January2023/mceclip1_18.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            transition: "all .2s",
          }}
        >
          <Container maxWidth="lg">
            <div
              className="menu-hover"
              style={{
                color: "black",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {list}
            </div>
          </Container>
        </MenuOnHover>
      ) : null}
    </>
  );
};
