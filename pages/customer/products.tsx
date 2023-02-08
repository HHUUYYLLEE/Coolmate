import { useQuery } from "@apollo/client";
import { Button, Rating } from "@mui/material";
import gql from "graphql-tag";
import styled from "styled-components";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import Image from "next/image";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { handleSaleOffProducts } from "../../utils/handleSaleOffProducts";
import { Container } from "@mui/system";

const SHOW_ALL_PRODUCTS = gql`
  query getAllProducts {
    getAll {
      id
      categoryId
      name
      price
      ratings
      salient_feature
      size
      imageSrc
      discount
    }
  }
`;

const ShowProduct = styled.div`
  min-height: 900px;
  color: black;
  margin-top: 34px;
`;

const ProductSlide = styled.div`
  position: relative;
  color: black;
  gap: 20px;
  flex-basis: 20%;
  img {
    max-width: 100%;
    height: 230px;
    width: 330px;
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

const Product = () => {
  const { loading, error, data } = useQuery(SHOW_ALL_PRODUCTS);
  console.log(error);
  if (loading) {
    return <>loading...</>;
  }
  console.log(data);
  const products = data.getAll;
  products.map((product: any) => console.log(product));
  return (
    <>
      <Header />
      <ShowProduct>
        <Container>
          <div
            className="slides"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "5px",
              flexWrap: "wrap",
            }}
          >
            {products.map((product: any) => (
              <ProductSlide
                key={product.id}
                theme={{ totalRatings: product.totalRatings }}
              >
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
                <p className="product-title">{product.name}</p>
                <div className="product-price">
                  {handleSaleOffProducts(product.price, product.discount)
                    .saleOff ? (
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
                          handleSaleOffProducts(product.price, product.discount)
                            .price
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
        </Container>
      </ShowProduct>
      <Footer />
    </>
  );
};

export default Product;
