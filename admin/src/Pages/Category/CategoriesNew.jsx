import React, { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const CategoriesNew = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formFeilds, setFormFeilds] = useState({
    name: "",
    parentCatName: "",
    parentId: null,
  });

  const valideValue = formFeilds.name !== "";

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFeilds({
      ...formFeilds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFeilds.name === "") {
      context.openAlertBox("error", "Enter Category Name");
      setIsLoading(false);
      return;
    }

    postData("/api/category/create", formFeilds, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.openAlertBox("success", res?.message);
        setFormFeilds({
          name: "",
        });
        setIsLoading(false);
        context.categoryData();
        context.subCategoryData();
        navigate("/categories");
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false);
      }
    });
  };

  return (
    <section>
      <div className="container flex pt-10">
        <div
          className={`sidebarWrapper ${
            context.isOpenSideBar === true ? "w-[20%]" : ""
          } h-full bg-white`}
        >
          <Sidebar></Sidebar>
        </div>
        <div
          className={`sidebarWrapper ${
            context.isOpenSideBar === true ? "w-[80%]" : "w-full"
          }  my-7 h-full`}
        >
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-4 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">ADD NEW CATEGORY</h2>
            </div>

            <form
              className="w-full container mt-5 pt-3 my-3"
              onSubmit={handleSubmit}
            >
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                New Category
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="name w-full">
                  <div className="name mb-2">
                    <TextField
                      type="text"
                      id="name"
                      name="name"
                      value={formFeilds.name}
                      label="Enter Category Name"
                      variant="outlined"
                      size="medium"
                      sx={{
                        "& label.Mui-focused": {
                          color: "#ff5252",
                          transition: "all 0.3s",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#ccc",
                            transition: "all 0.3s",
                          },
                          "&:hover fieldset": {
                            borderColor: "#ff5252",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ff5252",
                          },
                        },
                      }}
                      className="w-full"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-3 justify-center pt-3 mb-5">
                <Button
                  type="submit"
                  disabled={!valideValue}
                  className={`${
                    !valideValue === true
                      ? "!bg-gray-200"
                      : "btn-org !bg-[var(--primary-clr)]"
                  } !w-full !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 flex gap-2`}
                >
                  {isLoading === true ? (
                    <CircularProgress
                      color="inherit"
                      size={24}
                    ></CircularProgress>
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesNew;
