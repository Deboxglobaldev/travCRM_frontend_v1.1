import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";
import Layout from "./Layout";
import Model from "./Model";
import { Field, ErrorMessage } from "formik";
import {
  amentiesInitialValue,
  amentiesValidationSchema,
} from "../../Pages/master/masterList/MasterValidation";
import { axiosOther } from "../../http/axios/axios_new";

const Users = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("amenitieslist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };

    postDataToServer();
  }, []);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setEditData({
      id: rowValue.Id,
      Name: rowValue.Name,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.SetDefault === "Active" ? 1 : 0,
      AddedBy: rowValue.AddedBy,
      UpdatedBy: rowValue.UpdatedBy,
      Created_at: rowValue.Created_at,
      Updated_at: rowValue.Updated_at,
    });
    setIsEditing(true);
  };

  const columns = [
    {
      name: "User Code",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.AmenityImage}
        </span>
      ),
      sortable: true,
    },
    {
      name: "User Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Email Address",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "User Type",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Profile",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Reporting Manager",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Name,
      sortable: true,
    },
  ];

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card shadow-none border">
            <div
              className="card-header header-elements-inline bg-teal py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Users</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/* Bootstrap Modal */}
                <NavLink
                  to="/master"
                  className="btn btn-gray mr-2 fs-11 shadow"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <NavLink
                  to="/users/add"
                  type="button"
                  className="btn bg-teal-400 add-button fs-11 shadow"
                >
                  <i className="fa fa-plus pr-1" aria-hidden="true"></i>
                  Create New
                </NavLink>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input focus-ring form-input"
                    name="Search"
                    value={postData.Search}
                    onChange={(e) =>
                      setPostData({ ...postData, Search: e.target.value })
                    }
                  />
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select
                    className="select-input focus-ring form-input"
                    name="Status"
                    value={postData.Status}
                    onChange={(e) =>
                      setPostData({ ...postData, Status: e.target.value })
                    }
                  >
                    <option value={0}>Select Status</option>
                    <option value={1}>Active</option>
                    <option value={2}>Inactive</option>
                  </select>
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <button className="btn bg-teal-400 w-75 custom-h-37">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-none border">
            <DataTable
              columns={columns}
              data={
                postData.Search !== "" || postData.Status !== ""
                  ? filterData
                  : getData
              }
              pagination
              fixedHeader
              fixedHeaderScrollHeight="280px"
              highlightOnHover
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Users;
