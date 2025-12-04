import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users/Users";
import HomeSlides from "./Pages/HomeSlides/HomeSlides";
import HomeSlidesNew from "./Pages/HomeSlides/HomeSlidesNew";
import ProductsItemsNew from "./Pages/ProductsData/ProductsItemsNew";
import Categories from "./Pages/Category/Categories";
import CategoriesList from "./Pages/Category/CategoriesList";
import CategoriesNew from "./Pages/Category/CategoriesNew";
import SubCategories from "./Pages/SubCategory/SubCategories";
import SubCategoriesList from "./Pages/SubCategory/SubCategoriesList";
import SubCategoriesNew from "./Pages/SubCategory/SubCategoriesNew";
import Orders from "./Pages/Orders/Orders";
import ProductsData from "./Pages/ProductsData/ProductsData";
import { createContext, useState } from "react";
import Login from "./Pages/Authentication/Login";

export const MyContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const values = {
    isLogin,
    setIsLogin,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {isLogin === true ? (
            <>
              <Header></Header>
              <Routes>
                <Route path={"/"} element={<Dashboard></Dashboard>}></Route>
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
                  path={"/categories-list"}
                  element={<CategoriesList></CategoriesList>}
                ></Route>
                <Route
                  path={"/categories-new"}
                  element={<CategoriesNew></CategoriesNew>}
                ></Route>
                <Route
                  path={"/sub-categories"}
                  element={<SubCategories></SubCategories>}
                ></Route>
                <Route
                  path={"/sub-categories-list"}
                  element={<SubCategoriesList></SubCategoriesList>}
                ></Route>
                <Route
                  path={"/sub-categories-new"}
                  element={<SubCategoriesNew></SubCategoriesNew>}
                ></Route>
                <Route path={"/orders"} element={<Orders></Orders>}></Route>
                <Route path={"/logout"} element={<Login></Login>}></Route>
              </Routes>
            </>
          ) : (
            <Login></Login>
          )}
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
