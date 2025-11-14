import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { createContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import MainImage from "./components/MainImage/MainImage";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import ProductContent from "./Pages/ProductDetail/ProductContent";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";

const MyContext = createContext();

function App() {
  const [openProductDetailDialog, setOpenProductDetailDialog] = useState(false);

  const [openCartDrawer, setOpenCartDrawer] = useState(false);

  const handleCloseProductDetailDialog = () => {
    setOpenProductDetailDialog(false);
  };
  
  const toggleCartDrawer = (newOpen) => () => {
    setOpenCartDrawer(newOpen);
  };

  const values = {
    setOpenProductDetailDialog,
    setOpenCartDrawer,
    toggleCartDrawer,
    openCartDrawer,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header></Header>
          <Routes>
            <Route path={"/"} exact={true} element={<Home></Home>}></Route>
            <Route
              path={"/productList"}
              exact={true}
              element={<ProductList></ProductList>}
            ></Route>
            <Route
              path={"/productDetail/:id"}
              exact={true}
              element={<ProductDetail></ProductDetail>}
            ></Route>
            <Route
              path={"/login"}
              exact={true}
              element={<Login></Login>}
            ></Route>
            <Route
              path={"/register"}
              exact={true}
              element={<Register></Register>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        open={openProductDetailDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailDialog"
        maxWidth="lg"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailDialogContainer relative">
            <Button
              className="!absolute top-0 right-0 !w-[40px] !h-[40px] !min-w-[40px] !rounded-full btn-org !font-bold hover:!bg-black hover:!text-white transition-all duration-300"
              onClick={handleCloseProductDetailDialog}
            >
              <IoCloseSharp></IoCloseSharp>
            </Button>
            <div className="col1 w-[38.5%]">
              <MainImage></MainImage>
            </div>
            <div className="col2 w-[61.5%] px-2">
              <ProductContent></ProductContent>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;

export { MyContext };
