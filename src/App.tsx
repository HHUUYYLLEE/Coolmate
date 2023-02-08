import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from "./Component/Cart/Cart"
import Categories from "./Component/Categories/Categories"
import DetailProduct from "./Component/DetailProduct/DetailProduct"
import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"
import Home from "./Component/Home/Home"

const App= ()=> {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />  
        <Route path="/product/:id_product" element={<DetailProduct />} />
        <Route path="/:category" element={<Categories />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App