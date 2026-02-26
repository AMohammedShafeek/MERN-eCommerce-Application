import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { useContext } from "react";
import { MyContext } from "../../App";
import { deleteData } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
  const context = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    context.setSortedIds([]);
    context.homeBlogData();
  }, []);

  const editBlog = (id) => {
    navigate(`/blog-edit/${id}`);
  };

  const deleteBlogConfirm = (id) => {
    context.openConfirmBox({
      type: "delete",
      message: "Blog deleted successfully",
      onConfirm: () => deleteSlid(id),
    });
  };

  const deleteSlid = (id) => {
    deleteData(`/api/blog/${id}`).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.homeBlogData();
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
  };

  const deleteMultiBlogConfirm = (id) => {
    context.openConfirmBox({
      type: "delete",
      message: "Blogs deleted successfully",
      onConfirm: () => context.deleteMultiple("/api/blog/delete-multiple"),
    });
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className="w-full text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          BLOGS{" "}
        </h1>
        <Button
          disabled={context.sortedIds.length === 0}
          onClick={() => deleteMultiBlogConfirm()}
        >
          <h1
            className={`"w-[20%] h-[35px] flex items-center transition-all duration-200 ml-2 px-3 cursor-pointer text-center text-[18px] font-bold ${context?.sortedIds?.length > 0 ? "bg-[#ff5252] text-white" : "bg-gray-400 text-white"}  p-1 rounded-md my-3"`}
          >
            DELETE
          </h1>
        </Button>
      </div>
      <TableContainer
        sx={{
          width: "100%",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            width: "full",
            backgroundColor: "white",
          }}
          aria-label="simple table"
        >
          <TableHead className="bg-white">
            <TableRow>
              <TableCell>
                <Checkbox
                  checked={
                    context.blogData.length > 0 &&
                    context.sortedIds.length === context.blogData.length
                  }
                  indeterminate={
                    context.sortedIds.length > 0 &&
                    context.sortedIds.length < context.blogData.length
                  }
                  onChange={(e) =>
                    context.addAllIds(e.target.checked, context?.blogData)
                  }
                  {...label}
                />
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">S.I</TableCell>
              <TableCell className=" !text-[14px] !min-w-[120px] !font-bold">
                Title
              </TableCell>
              <TableCell className=" !text-[14px] !min-w-[140px] !font-bold">
                Image
              </TableCell>
              <TableCell className=" !text-[14px] !min-w-[400px] !font-bold">
                Content
              </TableCell>
              <TableCell className=" !text-[14px] !min-w-[120px] !font-bold">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {context?.blogData?.length > 0 ? (
              context.blogData.map((item, index) => (
                <TableRow key={index} className="bg-white">
                  <TableCell>
                    <Checkbox
                      {...label}
                      checked={context.sortedIds.includes(item?._id)}
                      onClick={() => context.handleSortedIds(item?._id)}
                    />
                  </TableCell>
                  <TableCell className="!text-[14px] !font-bold">
                    {index + 1}
                  </TableCell>
                  <TableCell className="ProdductID !text-[14px] !font-bold">
                    {item?.title}
                  </TableCell>
                  <TableCell className="!text-left !font-bold !text-[14px] flex items-center justify-start">
                    <img
                      src={item?.image}
                      alt=""
                      className="object-cover w-[120px] h-[80px]"
                    />
                  </TableCell>
                  <TableCell className="!text-[14px] !font-bold">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.desc
                            ?.replace(/<[^>]+>/g, "")
                            ?.substring(0, 150) + "...",
                      }}
                    ></div>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <Button
                        onClick={() => editBlog(item._id)}
                        className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200"
                      >
                        <MdEdit className="text-[30px]"></MdEdit>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <Button
                        onClick={() => deleteBlogConfirm(item._id)}
                        className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200"
                      >
                        <MdDelete className="text-[30px]"></MdDelete>
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={12}
                  align="center"
                  className="!py-6 !font-semibold"
                >
                  No Blogs found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BlogList;
