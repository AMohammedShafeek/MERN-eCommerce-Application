import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users/Users";
import HomeSlides from "./Pages/HomeSlides/HomeSlides";
import HomeSlideList from "./Pages/HomeSlides/HomeSlideList";
import HomeSlidesNew from "./Pages/HomeSlides/HomeSlidesNew";
import ProductsItems from "./Pages/ProductsItems/ProductsItems";
import ProductsItemsList from "./Pages/ProductsItems/ProductsItemsList";
import ProductsItemsNew from "./Pages/ProductsItems/ProductsItemsNew";
import Categories from "./Pages/Category/Categories";
import CategoriesList from "./Pages/Category/CategoriesList";
import CategoriesNew from "./Pages/Category/CategoriesNew";
import SubCategories from "./Pages/SubCategory/SubCategories";
import SubCategoriesList from "./Pages/SubCategory/SubCategoriesList";
import SubCategoriesNew from "./Pages/SubCategory/SubCategoriesNew";
import Orders from "./Pages/Orders/Orders";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route
            path={"/"}
            exact={true}
            element={<Dashboard></Dashboard>}
          ></Route>
          <Route
            path={"/dashboard"}
            exact={true}
            element={<Dashboard></Dashboard>}
          ></Route>
          <Route
            path={"/home-slides"}
            exact={true}
            element={<HomeSlides></HomeSlides>}
          ></Route>
          <Route
            path={"/home-slides/list"}
            exact={true}
            element={<HomeSlideList></HomeSlideList>}
          ></Route>
          <Route
            path={"/home-slides/new"}
            exact={true}
            element={<HomeSlidesNew></HomeSlidesNew>}
          ></Route>
          <Route path={"/users"} exact={true} element={<Users></Users>}></Route>
          <Route
            path={"/products"}
            exact={true}
            element={<ProductsItems></ProductsItems>}
          ></Route>
          <Route
            path={"/products-list"}
            exact={true}
            element={<ProductsItemsList></ProductsItemsList>}
          ></Route>
          <Route
            path={"/products-new"}
            exact={true}
            element={<ProductsItemsNew></ProductsItemsNew>}
          ></Route>
          <Route
            path={"/categories"}
            exact={true}
            element={<Categories></Categories>}
          ></Route>
          <Route
            path={"/categories-list"}
            exact={true}
            element={<CategoriesList></CategoriesList>}
          ></Route>
          <Route
            path={"/categories-new"}
            exact={true}
            element={<CategoriesNew></CategoriesNew>}
          ></Route>
          <Route
            path={"/sub-categories"}
            exact={true}
            element={<SubCategories></SubCategories>}
          ></Route>
          <Route
            path={"/sub-categories-list"}
            exact={true}
            element={<SubCategoriesList></SubCategoriesList>}
          ></Route>
          <Route
            path={"/sub-categories-new"}
            exact={true}
            element={<SubCategoriesNew></SubCategoriesNew>}
          ></Route>
          <Route
            path={"/orders"}
            exact={true}
            element={<Orders></Orders>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
