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
import { deleteData, deleteMultiData, getData } from "../src/utils/api.js";
import toast, { Toaster } from "react-hot-toast";
import Verify from "./Pages/VerifyOtp/VerifyOtp.jsx";
import ChangePass from "./Pages/Authentication/ChangePass.jsx";
import MyAccount from "./Pages/MyAccount/MyAccount.jsx";
import UpdatePass from "./Pages/Authentication/UpdatePass.jsx";
import CategoriesEdit from "./Pages/Category/CategoriesEdit.jsx";
import Swal from "sweetalert2";
import ProductsItemsEdit from "./Pages/ProductsData/ProductsItemsEdit.jsx";
import SubCategories from "./Pages/Category/SubCategories.jsx";

export const MyContext = createContext();

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const role = "ADMIN";

  const [isLogin, setIsLogin] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  const [userData, setUserData] = useState(null);
  const [refresh, setRefresh] = useState(true);
  const [allUsersList, setAllUsersList] = useState(null);
  const [catData, setCatData] = useState([]);
  const [subCatData, setSubCatData] = useState([]);
  const [prodData, setProdData] = useState([]);
  const [sortedIds, setSortedIds] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg, { id: "success-toast" });
    }
    if (status === "error") {
      toast.error(msg, { id: "error-toast" });
    }
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

  useEffect(() => {
    if (windowWidth < 992) {
      setIsOpenSideBar(false);
    }

    const token = localStorage.getItem("accessToken");
    console.log(token);

    if (!token) {
      setIsLogin(false);
      return;
    }

    userDetails();
    categoryData();
    subCategoryData();
    productsData();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const userDetails = () => {
    getData("/api/user/user-details").then((res) => {
      // console.log(res);

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
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
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

  const productsData = () => {
    getData("/api/product/getAllProducts").then((res) => {
      let productArr = [];
      if (res?.error !== true) {
        // console.log(res?.data);
        for (let i = 0; i < res?.products?.length; i++) {}
        setProdData(res?.data);
      }
    });
  };

  const allUsersData = () => {
    getData("/api/user/users").then((res) => {
      if (res?.error !== true) {
        // console.log(res?.data);
        setAllUsersList(res?.data);
      }
    });
  };

  const handleSortedIds = (id) => {
    setSortedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const addAllIds = (checked, itemState) => {
    if (checked) {
      const filterIds = itemState.map((item) => item._id);
      setSortedIds(filterIds);
    } else {
      setSortedIds([]);
    }
  };

  const deleteMultiple = (controllerUrl) => {
    try {
      deleteMultiData(controllerUrl, {
        ids: sortedIds,
      }).then((res) => {
        if (res?.error !== true) {
          console.log("here", res);

          productsData();
          categoryData();
          subCategoryData();
          setSortedIds([]);
          return;
        }
        openAlertBox("error", res?.message);
        return;
      });
    } catch (error) {
      openAlertBox("error", "Error in Deleting Items");
    }
  };

  const deleteCat = (id) => {
    deleteData(`/api/category/${id}`).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        categoryData();
        subCategoryData();
      } else {
        openAlertBox("error", res?.message);
      }
    });
  };

  const values = {
    isLogin,
    setIsLogin,
    isOpenSideBar,
    setIsOpenSideBar,
    openAlertBox,
    userData,
    setUserData,
    role,
    openConfirmBox,
    categoryData,
    catData,
    setCatData,
    subCategoryData,
    subCatData,
    setSubCatData,
    prodData,
    setProdData,
    productsData,
    allUsersData,
    allUsersList,
    setAllUsersList,
    sortedIds,
    setSortedIds,
    handleSortedIds,
    addAllIds,
    deleteMultiple,
    refresh,
    setRefresh,
    deleteCat,
    windowWidth,
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
                path={"/sub-categories"}
                element={<SubCategories></SubCategories>}
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
              <Route
                path={"/edit-category/:id"}
                element={<CategoriesEdit></CategoriesEdit>}
              ></Route>
              <Route
                path={"/edit-product/:id"}
                element={<ProductsItemsEdit></ProductsItemsEdit>}
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
