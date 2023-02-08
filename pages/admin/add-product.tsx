import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ManageNewProduct } from "../../components/ManageNewProduct";

const addProduct = () => {
  return (
    <div>
      <Header />
      <ManageNewProduct />
      <Footer />
    </div>
  );
};

export default addProduct;
