import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { editData, getData, postData } from "../../utils/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CategoriesEdit = () => {
  const context = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectUrl = location?.state?.redirectUrl || "/";

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

  useEffect(() => {
    getData(`/api/category/${id}`).then((res) => {
      setFormFeilds({
        name: res?.category?.name,
      });
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFeilds.name === "") {
      context.openAlertBox(
        "error",
        "Enter Category Name",
        "missingCatName-error",
      );
      setIsLoading(false);
      return;
    }

    editData(`/api/category/${id}`, formFeilds).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.openAlertBox("success", res?.message, "updateCat-success");
        setIsLoading(false);
        setFormFeilds({
          name: "",
        });
        context.categoryData();
        navigate(redirectUrl);
      } else {
        context.openAlertBox("error", res?.message, "updateCat-error");
        setIsLoading(false);
      }
    });
  };

  return (
    <section>
      {context.isOpenSideBar && (
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden`}
          onClick={() => context.setIsOpenSideBar(false)}
        />
      )}
      <div className="container flex pt-10">
        <div
          className={`sidebarWrapper h-full bg-white transition-all duration-300 ease-in-out 
                ${context.isOpenSideBar ? "w-[20%]" : "w-0 overflow-hidden"}`}
        >
        </div>
        <div
          className={`sidebarWrapper my-7 h-full transition-all duration-300 ease-in-out 
                ${context.isOpenSideBar ? "w-[80%]" : "w-full"}`}
        >
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-4 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">UPDATE CATEGORY</h2>
            </div>

            <form
              className="w-full container mt-5 pt-3 my-3"
              onSubmit={handleSubmit}
            >
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                Edit Category name
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
                    "UPDATE"
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

export default CategoriesEdit;
