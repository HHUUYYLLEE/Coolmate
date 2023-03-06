import { createContext, useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import getAuth from "./api/auth"
import Cart from "./Component/Cart/Cart"
import Categories from "./Component/Categories/Categories"
import DetailProduct from "./Component/DetailProduct/DetailProduct"
import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"
import History from "./Component/History/History"
import Home from "./Component/Home/Home"
import Search from "./Component/Search/Search"
import { AliveScope} from "react-activation"
// import {v4 } from "uuid"
import Admin from "./Component/Admin/Admin"

export const AppContext= createContext<any>({})
const App= ()=> {
  const [auth, setAuth]= useState<boolean>(()=> false)
  const [user, setUser]= useState<any>()
  useEffect(()=> {
    (async()=> {
      const result= await getAuth()
      if(result.auth=== true ) {
        setUser(result)
        setAuth(()=> true)
      }
      else {
        setAuth(()=> false)
      }
    })()
  }, [])
  return (
    <AliveScope>

      <AppContext.Provider value={{auth, user}}>
        <Router>
          <Header />
            <Routes>

              <Route path={"/"} element={<Home />} />  
              <Route path="/product/:id_product" element={<DetailProduct />} />
              <Route path="/collection/:category/" element={
                <Categories />
              } />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/search"} element={<Search />} />
              <Route path={"/history"} element={<History />} />
              <Route path={"/admin"} element={<Admin />} />
            </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </AliveScope>
  )
}

export default App