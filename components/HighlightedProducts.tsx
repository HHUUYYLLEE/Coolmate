import { Button, Rating } from "@mui/material";
import { textTransform } from "@mui/system";
import Image from "next/image";
import styled from "styled-components";
import { handleSaleOffProducts } from "../utils/handleSaleOffProducts";
import { numberWithCommas } from "../utils/numberWithCommas";

const hightlightedProducts = [
  {
    ratings: 3.5,
    totalRatings: 54,
    imageSrc:
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2022/7_2hoa.jpg",
    productTitle: "Nước hoa CM24 ICONIC COOL Eau de Parfum - 9ml",
    price: 200000,
    discount: 15,
  },
  {
    ratings: 5,
    totalRatings: 76,
    imageSrc:
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2022/9_1.jpg",
    productTitle: "Nước hoa CM24 ICONIC COOL Eau de Parfum - 9ml",
    price: 1000000000,
    discount: 23,
  },
  {
    ratings: 4.5,
    totalRatings: 99,
    imageSrc:
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2022/cm24listiing1.jpg",
    productTitle: "Nước hoa CM24 ICONIC COOL Eau de Parfum - 9ml",
    price: 4300000,
    discount: 44,
  },
  {
    ratings: 4,
    totalRatings: 999,
    imageSrc:
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2022/cm24listiing21.jpg",
    productTitle: "Nước hoa CM24 ICONIC COOL Eau de Parfum - 9ml",
    price: 2000000,
    discount: 24,
  },
];

const ProductSlide = styled.div`
  position: relative;
  color: black;
  img {
    max-width: 100%;
    position: relative !important;
    height: auto !important;
  }
  .product-title {
    font-size: 12px;
    font-weight: 700;
    margin: 15px;
    text-align: center;
  }
  .product-ratings {
    &::after {
      content: "(${(props) => props.theme.totalRatings})";
      color: black;
      font-size: 0.5em;
    }
  }
  .product-price {
    text-align: center;
    font-size: 12px;
    color: #e11919;
  }
`;

export const HighlightedProducts = () => (
  <div
    className="slides"
    style={{ display: "flex", justifyContent: "space-between" }}
  >
    {hightlightedProducts.map((product, index) => (
      <ProductSlide key={index} theme={{ totalRatings: product.totalRatings }}>
        <Rating
          className="product-ratings"
          name="read-only"
          value={product.ratings}
          style={{
            position: "absolute",
            margin: "auto",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: 15,
          }}
          readOnly
        />
        <Image
          loader={() => product.imageSrc}
          src={product.imageSrc}
          alt={""}
          fill
        ></Image>
        <p className="product-title">{product.productTitle}</p>
        <div className="product-price">
          {handleSaleOffProducts(product.price, product.discount).saleOff ? (
            <div>
              {" "}
              <span
                className="sale-off"
                style={{ textDecoration: "line-through" }}
              >
                {numberWithCommas(product.price)}đ
              </span>
              <span style={{ marginLeft: 10 }}>
                {numberWithCommas(
                  handleSaleOffProducts(product.price, product.discount).price
                )}
                đ
              </span>
            </div>
          ) : (
            <span>{numberWithCommas(product.price)}đ</span>
          )}
        </div>
        <div
          className="buy-button"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "15px 0",
          }}
        >
          <Button variant="outlined">Mua ngay</Button>
        </div>
      </ProductSlide>
    ))}
  </div>
);
