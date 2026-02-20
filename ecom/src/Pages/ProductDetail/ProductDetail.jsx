import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import MainImage from "../../components/MainImage/MainImage";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../ProductDetail/ProductDetail.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaUserCircle } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import AdsSlider from "../../components/AdsSlider/AdsSlider";
import ProductContent from "./ProductContent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getData } from "../../utils/api";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProdductDetail = () => {
  const [productActionIndex, setProuctActionIndex] = useState(null);
  const [product, setProduct] = useState();
  const { id } = useParams();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getData(`/api/product/${id}`).then((res) => {
      if (res?.error !== true) {
        // console.log(res?.product);
        setProduct(res?.product);
      }
    });
  }, [id]);

  console.log(product);
  

  return (
    <>
      <div className="bg-white">
        <div className="w-full bg-body py-4 px-5 rounded-md flex items-center justify-start">
          <Breadcrumbs aria-label="breadcrumb" className="container pl-20">
            <Link
              underline="hover"
              color="inherit"
              to={"/"}
              className="link transition-all duration-300 !text-[14px] !font-[600] cursor-pointer"
            >
              HOME
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to={"/"}
              className="link transition-all duration-300 !text-[14px] !font-[600] cursor-pointer"
            >
              FASHION
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to={"/"}
              className="link transition-all duration-300 !text-[14px] !font-[600] cursor-pointer"
            >
              TAGDO Gray Shirt
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white pb-13">
        <div className="container max-w-[70%] flex gap-4 py-13">
          <div className="productImage w-[50%]">
            <MainImage product={product}></MainImage>
          </div>
          <ProductContent product={product}></ProductContent>
        </div>
        <div className="w-[80%] m-auto border-y border-y-[#ff5252] py-2 mb-10">
          <Box sx={{ width: "100%", height: "400px", overflow: "auto" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className="font-[500]"
              >
                <Tab label="Description" {...a11yProps(0)} />
                <Tab label="Product Details" {...a11yProps(1)} />
                <Tab label="Reviews" {...a11yProps(2)} />
                <Tab label="Give Review" {...a11yProps(3)} />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              {product?.description}
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <TableContainer component={Paper} className="mt-2">
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                  <TableBody>
                    {product &&
                      Object.entries(product)
                        .filter(([key]) =>
                          ["name", "brand", "catName", "color", "size"].includes(key),
                        )
                        .map(([key, value], index) => (
                          <TableRow key={index}>
                            <TableCell className="!font-[600]">{key}</TableCell>
                            <TableCell align="left" className="!font-[600]">
                              {Array.isArray(value)
                                ? value.join(", ")
                                : typeof value === "object"
                                  ? JSON.stringify(value)
                                  : value}
                            </TableCell>
                          </TableRow>
                        ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <div className="reviewContainer flex items-center flex-col gap-10">
                <div className="uContainer w-[90%]">
                  <div className="user flex items-center justify-between">
                    <div className="uDetails flex items-center gap-3">
                      <FaUserCircle className="text-[45px] text-[#ff5252]"></FaUserCircle>
                      <div className="uDetail flex items-start flex-col gap-0">
                        <h3 className="uName font-[500] text-[16px]">
                          Mohammed Shafeek A
                        </h3>
                        <span className="uName text-gray-500 text-[13px]">
                          @shafeek77
                        </span>
                      </div>
                    </div>
                    <div className="stars pb-3">
                      <div className="rating flex flex-col justify-between items-end">
                        <Rating
                          name="size-small"
                          defaultValue={4}
                          size="medium"
                          className="pt-2"
                          readOnly
                        />
                        <span className="uName text-gray-500 text-[13px] font-[500] pr-1">
                          12 NOV 2025
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="uReview border-1 border-[#ff5252] mt-2 rounded-md">
                    <p className="text-[13px] text-gray-500 text-justify py-5 px-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus similique, alias amet culpa ratione rerum ducimus
                      aliquam iste quis dolor magni et veniam? Nihil doloremque
                      eligendi ducimus cum fugit magnam fuga officiis odio aut,
                      obcaecati dolore mollitia harum voluptatum exercitationem
                      porro laborum aspernatur aliquid. Necessitatibus itaque in
                      reprehenderit autem est!
                    </p>
                  </div>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <div className="reviewForm">
                <h2 className="text-[18px] font-[600] mt-1 rounded-md">
                  Give Your Valuable Review(s)
                </h2>
                <form className="w-full my-2">
                  <Rating
                    name="size-small"
                    defaultValue={1}
                    size="large"
                    className="pb-4"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Enter Review..."
                    className="w-full"
                    multiline
                    rows={5}
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
                  />
                  <div className="flex items-center mt-3">
                    <Button className="btn-org !px-15 !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
                      SUBMIT
                    </Button>
                  </div>
                </form>
              </div>
            </CustomTabPanel>
          </Box>
        </div>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSection">
              <h2 className="text-[20px] font-medium">Related Products</h2>
              <p className="text-[14px] font-[500]">
                Do not miss the current offers until the end of the Season.
              </p>
            </div>
          </div>
          <ProductSlider items={6}></ProductSlider>
          <AdsSlider items={4}></AdsSlider>
        </div>
      </section>
    </>
  );
};

export default ProdductDetail;
