import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
