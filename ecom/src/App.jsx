import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import ProductList from './Pages/ProductList/ProductList'
import Footer from './components/Footer/Footer'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path={'/'} exact={true} element={<Home></Home>}></Route>
        <Route path={'/productList'} exact={true} element={<ProductList></ProductList>}></Route>
        <Route path={'/productDetail/:id'} exact={true} element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
