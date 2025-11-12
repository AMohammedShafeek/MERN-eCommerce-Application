import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import MainImage from "../../components/MainImage/MainImage";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QtyBox from "../../components/QtyBox/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <div className="container flex gap-4 py-9">
          <div className="productImage w-[29%]">
            <MainImage></MainImage>
          </div>
          <div className="ml-5 productContent w-[71%] py-7 mb-1">
            <h1 className="text-[25px] font-[600]">
              TAGDO Gray Shirt | Casual Shirt
            </h1>
            <div className="flex items-center gap-3 my-1">
              <span className="text-gray-500 text-[14px]">
                Brands :{" "}
                <span className="font-[600] text-black text-[16px]">
                  TAGDO Pvt. Ltd
                </span>
              </span>
              <div className="rating flex items-center justify-between">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
                <h6 className="text-[14px] primary pl-3 cursor-pointer">
                  (3+rating)
                </h6>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2 my-3">
              <span className="oldPrice text-[20px] font-[400] line-through">
                $899
              </span>
              <span className="oldPrice text-[21px] font-[700] text-[#ff5252]">
                $399
              </span>
            </div>
            <div className="flex items-center stock gap-2 mb-3">
              <span className=" text-[14px] font-[500]">
                Available In Stock :
              </span>
              <span className="font-bold text-green-600 text-[14px] bg-green-200 px-2 py-1 rounded-md">
                57 Items
              </span>
            </div>
            <p className="text-[13px] text-gray-500 text-justify mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              itaque blanditiis asperiores magni ipsa, ratione pariatur
              doloribus excepturi maxime repudiandae delectus corrupti incidunt
              cupiditate architecto modi cum odio, reprehenderit quae impedit
              iure aliquid perspiciatis illum sit? Aspernatur iusto sint laborum
              temporibus omnis quia adipisci repudiandae. Commodi ad ipsum nisi
              autem, amet libero? Voluptatibus similique, sit molestias maxime
              vero laudantium culpa blanditiis totam nostrum exercitationem,
              eaque soluta fugit eligendi rem dolore alias nulla quidem dolores
              excepturi accusamus iste! Illum facilis quae vitae voluptatem
              laboriosam, quod voluptatum eveniet ducimus aliquam a repellat
              repellendus maxime. Sed nulla ducimus quisquam nostrum rerum.
              Cumque, distinctio?
            </p>
            <div className="flex items-center">
              <span className="font-[600] text-black text-[14px] mr-2">
                Size :
              </span>
              <div className="actions flex items-center gap-1.5">
                <Button
                  className={`${
                    productActionIndex === 0
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(0);
                  }}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(1);
                  }}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(2);
                  }}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(3);
                  }}
                >
                  XL
                </Button>
                <Button
                  className={`${
                    productActionIndex === 4
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(4);
                  }}
                >
                  XXL
                </Button>
              </div>
            </div>
            <p className="text-[13px] text-gray-500 my-5">
              Free Shipping (Est. Delivery Time 2-3 Days.)
            </p>
            <div className="flex items-center gap-1.5 mb-5">
              <div className="QtyBoxWrapper">
                <QtyBox></QtyBox>
              </div>
              <Button className="btn-org !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
                <MdOutlineShoppingCart className="mx-1 text-[20px]"></MdOutlineShoppingCart>
                Add to Cart
              </Button>
            </div>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2 text-gray-600 font-[500] link cursor-pointer transition-all duration-300 text-[16px]">
                <FaRegHeart></FaRegHeart>Add to Wishlist
              </span>
              <span className="flex items-center gap-2 cursor-default text-gray-500 font-bold">
                |
              </span>
              <span className="flex items-center gap-2 text-gray-600 font-[500] link cursor-pointer transition-all duration-300 text-[16px]">
                <FaCodeCompare></FaCodeCompare>Add to Compare
              </span>
            </div>
          </div>
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
              <p className="text-justify text-gray-500 text-[14px] mt-2 mb-2">
                The best is yet to come! Give your walls a voice with a framed
                poster. This aesthethic, optimistic poster will look great in
                your desk or in an open-space office. Painted wooden frame with
                passe-partout for more depth. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Delectus neque quisquam iusto
                officia nam labore veritatis magnam hic veniam similique,
                numquam officiis corrupti pariatur, non blanditiis laborum ipsum
                dolore consectetur quod earum debitis repellendus! Sapiente
                saepe labore harum illum inventore pariatur laborum, at
                doloremque vel earum nobis ipsum a odit excepturi repellat
                commodi, consequuntur ullam dicta dolorum est alias. Rerum,
                molestias! Corporis, enim corrupti doloremque perspiciatis rem
                illo aut iste nisi excepturi mollitia possimus eligendi saepe
                reiciendis, quae animi. Provident quis blanditiis reiciendis
                omnis iste amet velit voluptates, voluptatibus, expedita totam
                est sequi. Aspernatur incidunt saepe corrupti quos nesciunt
                tenetur?
              </p>
              <h4 className="text-[16px] font-[500]">Lightweight Design</h4>
              <p className="text-justify text-gray-500 text-[14px] my-2">
                Designed with a super light geometric case, the Versa family
                watches are slim, casual and comfortable enough to wear all day
                and night. Switch up your look with classic, leather, metal and
                woven accessory bands. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.
              </p>
              <h4 className="text-[16px] font-[500]">Free Shipping & Return</h4>
              <p className="text-justify text-gray-500 text-[14px] my-2">
                We offer free shipping for products on orders above 50$ and
                offer free delivery for all orders in US.
              </p>
              <h4 className="text-[16px] font-[500]">Money Back Guarantee</h4>
              <p className="text-justify text-gray-500 text-[14px] my-2">
                We guarantee our products and you could get back all of your
                money anytime you want in 30 days.
              </p>
              <h4 className="text-[16px] font-[500]">Online Support</h4>
              <p className="text-justify text-gray-500 text-[14px] my-2">
                You will get 24 hour support with this purchase product and you
                can return it within 30 days for an exchange.
              </p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <TableContainer component={Paper} className="mt-2">
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell className="!font-[600]">DATASHEET</TableCell>
                      <TableCell align="left" className="!font-[600]">
                        DETAILS
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Reference</TableCell>
                      <TableCell align="left">RP-0126</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Condition</TableCell>
                      <TableCell align="left">BRAND NEW</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Composition</TableCell>
                      <TableCell align="left">COTTON</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Property</TableCell>
                      <TableCell align="left">REMOVABLE COVER</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Style</TableCell>
                      <TableCell align="left">CASUAL</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>In stock</TableCell>
                      <TableCell align="left">57 Items</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className="reviewContainer flex items-center flex-col gap-10">
                <div className="uContainer w-[60%]">
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
                  <div className="uReview border-1 border-[#ff5252] min-h-[100px] mt-2 rounded-md">
                    <p className="text-[13px] text-gray-500 text-justify py-2 px-4">
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
                <div className="uContainer w-[60%]">
                  <div className="user flex items-center justify-between">
                    <div className="uDetails flex items-center gap-3">
                      <FaUserCircle className="text-[45px] text-[#ff5252]"></FaUserCircle>
                      <div className="uDetail flex items-start flex-col gap-0">
                        <h3 className="uName font-[500] text-[16px]">
                          Prabu Raj
                        </h3>
                        <span className="uName text-gray-500 text-[13px]">
                          @prabu10
                        </span>
                      </div>
                    </div>
                    <div className="stars pb-3">
                      <div className="rating flex flex-col justify-between items-end">
                        <Rating
                          name="size-small"
                          defaultValue={5}
                          size="medium"
                          className="pt-2"
                          readOnly
                        />
                        <span className="uName text-gray-500 text-[13px] font-[500] pr-1">
                          14 NOV 2025
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="uReview border-1 border-[#ff5252] min-h-[100px] mt-2 rounded-md">
                    <p className="text-[13px] text-gray-500 text-justify py-2 px-4">
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
                <div className="uContainer w-[60%]">
                  <div className="user flex items-center justify-between">
                    <div className="uDetails flex items-center gap-3">
                      <FaUserCircle className="text-[45px] text-[#ff5252]"></FaUserCircle>
                      <div className="uDetail flex items-start flex-col gap-0">
                        <h3 className="uName font-[500] text-[16px]">
                          Kishore Kumar
                        </h3>
                        <span className="uName text-gray-500 text-[13px]">
                          @lucky27
                        </span>
                      </div>
                    </div>
                    <div className="stars pb-3">
                      <div className="rating flex flex-col justify-between items-end">
                        <Rating
                          name="size-small"
                          defaultValue={3}
                          size="medium"
                          className="pt-2"
                          readOnly
                        />
                        <span className="uName text-gray-500 text-[13px] font-[500] pr-1">
                          15 NOV 2025
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="uReview border-1 border-[#ff5252] min-h-[100px] mt-2 rounded-md">
                    <p className="text-[13px] text-gray-500 text-justify py-2 px-4">
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
                    label="Multiline"
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
