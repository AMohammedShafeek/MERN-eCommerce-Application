import "./responsive.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users/Users";
import HomeSlides from "./Pages/HomeSlides/HomeSlides";
import HomeSlidesNew from "./Pages/HomeSlides/HomeSlidesNew";
import ProductsItemsNew from "./Pages/ProductsData/ProductsItemsNew";
import Categories from "./Pages/Category/Categories";
import CategoriesNew from "./Pages/Category/CategoriesNew";
import SubCategoriesNew from "./Pages/Category/SubCategoriesNew";
import Orders from "./Pages/Orders/Orders";
import ProductsData from "./Pages/ProductsData/ProductsData";
import { createContext, useEffect, useState } from "react";
import Login from "./Pages/Authentication/Login";
import CategoriesList from "./components/Categories/CategoriesList";
import SubCategoriesList from "./components/Categories/SubCategoriesList";
import Register from "./Pages/Authentication/Register";
import { getData } from "../src/utils/api.js";
import toast, { Toaster } from "react-hot-toast";
import Verify from "./Pages/VerifyOtp/VerifyOtp.jsx";
import ChangePass from "./Pages/Authentication/ChangePass.jsx";
import MyAccount from "./Pages/MyAccount/MyAccount.jsx";
import UpdatePass from "./Pages/Authentication/UpdatePass.jsx";

export const MyContext = createContext();

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const role = "ADMIN";

  const [isLogin, setIsLogin] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  const [userData, setUserData] = useState(null);

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setIsLogin(false);
      return;
    }

    getData("/api/user/user-details").then((res) => {
      console.log(res);

      if (res?.error === true) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userEmail");

        openAlertBox("error", "Your session has expired. Please login again");
        setIsLogin(false);
        return;
      }

      setUserData(res.data);
      setIsLogin(true);
    });
  }, []);

  const values = {
    isLogin,
    setIsLogin,
    isOpenSideBar,
    setIsOpenSideBar,
    openAlertBox,
    userData,
    setUserData,
    role,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <>
            <Header></Header>
            <Routes>
              <Route path={"/"} element={<Dashboard></Dashboard>}></Route>
              <Route path={"/login"} element={<Login></Login>}></Route>
              <Route path={"/register"} element={<Register></Register>}></Route>
              <Route path={"/verify"} element={<Verify></Verify>}></Route>
              <Route
                path={"/changePassword"}
                element={<ChangePass></ChangePass>}
              ></Route>
              <Route
                path={"/dashboard"}
                element={<Dashboard></Dashboard>}
              ></Route>
              <Route
                path={"/home-slides"}
                element={<HomeSlides></HomeSlides>}
              ></Route>
              <Route
                path={"/home-slides-new"}
                element={<HomeSlidesNew></HomeSlidesNew>}
              ></Route>
              <Route path={"/users"} element={<Users></Users>}></Route>
              <Route
                path={"/products-data"}
                element={<ProductsData></ProductsData>}
              ></Route>
              <Route
                path={"/products-new"}
                element={<ProductsItemsNew></ProductsItemsNew>}
              ></Route>
              <Route
                path={"/categories"}
                element={<Categories></Categories>}
              ></Route>
              <Route
                path={"/categories-new"}
                element={<CategoriesNew></CategoriesNew>}
              ></Route>
              <Route
                path={"/sub-categories-new"}
                element={<SubCategoriesNew></SubCategoriesNew>}
              ></Route>
              <Route
                path={"/categories-list"}
                element={<CategoriesList></CategoriesList>}
              ></Route>
              <Route
                path={"/sub-categories-list"}
                element={<SubCategoriesList></SubCategoriesList>}
              ></Route>
              <Route path={"/orders"} element={<Orders></Orders>}></Route>
              <Route
                path={"/my-account"}
                element={<MyAccount></MyAccount>}
              ></Route>
              <Route
                path={"/updatePassword"}
                element={<UpdatePass></UpdatePass>}
              ></Route>
            </Routes>
          </>
        </MyContext.Provider>
      </BrowserRouter>
      <Toaster></Toaster>
    </>
  );
}

export default App;
