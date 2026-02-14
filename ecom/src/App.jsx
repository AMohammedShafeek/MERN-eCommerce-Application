import "./responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { createContext, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import MainImage from "./components/MainImage/MainImage";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import ProductContent from "./Pages/ProductDetail/ProductContent";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import Cart from "./Pages/Cart/Cart";
import VerifyOtp from "./Pages/VerifyOtp/VerifyOtp";
import toast, { Toaster } from "react-hot-toast";
import ChangePass from "./Pages/Authentication/ChangePass";
import Checkout from "./Pages/Checkout/Checkout";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Wishlist from "./Pages/Wishlist/Wishlist";
import MyOrders from "./Pages/MyOrders/MyOrders";
import TrackOrders from "./Pages/TrackOrders/TrackOrders";
import { getData } from "./utils/api";
import UpdatePass from "./Pages/Authentication/UpdatePass";

const MyContext = createContext();

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const role = "USER";

  const [openProductDetailDialog, setOpenProductDetailDialog] = useState(false);
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [catData, setCatData] = useState([]);
  const [subCatData, setSubCatData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openAlertBox = (status, msg, id) => {
    if (status === "success") {
      toast.success(msg, { id });
    }
    if (status === "error") {
      toast.error(msg, { id });
    }
  };

  const handleCloseProductDetailDialog = () => {
    setOpenProductDetailDialog(false);
  };

  const toggleCartDrawer = (newOpen) => () => {
    setOpenCartDrawer(newOpen);
  };

  const openConfirmBox = ({ type, message, onConfirm }) => {
    if (type === "delete") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          onConfirm();
          Swal.fire({
            title: "Deleted!",
            text: message,
            icon: "success",
          });
        }
      });
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        // setIsOpenSideBar(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setIsLogin(false);
    } else {
      userDetails();
    }

    categoryData();
    subCategoryData();
    // productsData();
    homeSliderData();
    handleResize();
  }, []);

  const userDetails = () => {
    getData("/api/user/user-details").then((res) => {
      console.log(res);

      if (res?.error === true) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userEmail");

        openAlertBox(
          "error",
          "Your session has expired. Please login again",
          "sessionExpire-error",
        );
        setIsLogin(false);
        return res;
      } else {
        setUserData(res.data);
        setIsLogin(true);
      }
    });
  };

  const categoryData = () => {
    getData("/api/category").then((res) => {
      // console.log("res", res?.data);
      setCatData(res?.data || []);
    });
  };

  const subCategoryData = () => {
    getData("/api/category").then((res) => {
      // console.log(res?.data);
      setCatData(res?.data);
    });
  };

  const homeSliderData = () => {
    getData("/api/slider").then((res) => {
      if (res?.error !== true) {
        // console.log(res?.data);
        setSliderData(res?.data);
      }
    });
  };

  const values = {
    setOpenProductDetailDialog,
    setOpenCartDrawer,
    toggleCartDrawer,
    openCartDrawer,
    openAlertBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    role,
    categoryData,
    catData,
    setCatData,
    subCategoryData,
    subCatData,
    setSubCatData,
    windowWidth,
    sliderData,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header></Header>
          <CartDrawer></CartDrawer>
          <Routes>
            <Route
              path={"/login"}
              exact={true}
              element={<Login></Login>}
            ></Route>
            <Route path={"/"} element={<Home></Home>}></Route>
            <Route
              path={"/productList"}
              element={<ProductList></ProductList>}
            ></Route>
            <Route
              path={"/productDetail/:id"}
              element={<ProductDetail></ProductDetail>}
            ></Route>
            <Route path={"/register"} element={<Register></Register>}></Route>
            <Route path={"/cart"} element={<Cart></Cart>}></Route>
            <Route path={"/verify"} element={<VerifyOtp></VerifyOtp>}></Route>
            <Route
              path={"/changePassword"}
              element={<ChangePass></ChangePass>}
            ></Route>
            <Route
              path={"/updatePassword"}
              element={<UpdatePass></UpdatePass>}
            ></Route>
            <Route path={"/checkout"} element={<Checkout></Checkout>}></Route>
            <Route
              path={"/my-account"}
              element={<MyAccount></MyAccount>}
            ></Route>
            <Route path={"/wishlist"} element={<Wishlist></Wishlist>}></Route>
            <Route path={"/my-orders"} element={<MyOrders></MyOrders>}></Route>
            <Route
              path={"/track-orders"}
              element={<TrackOrders></TrackOrders>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster></Toaster>

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
