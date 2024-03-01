import React, { useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  countryInitialValue,
  countryValidationSchema,
  countrySavedValue,
} from "./MasterValidation";

const CountryMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({ Search: "", Status: "" });

  const [valueForEdit, setValueForEdit] = useState({});

  const handleEdit = () => {
    setValueForEdit({ ...countrySavedValue });
  };

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("countrylist", postData);
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
    setValueForEdit({ ...rowValue });
  };

  const inputFieldObject = {
    text: [
      { Label:"Name", Name: "Name", Type: "text", Placeholder: "Enter Name" },
      {
        Label:"Short Name",
        Name: "ShortName",
        Type: "text",
        Placeholder: "ShortName",
      },
    ],
    select:[
      {
        Label:"Status",
        Name:"Status",
        option:[{Name:'Active', value:'1'},
                {Name:'Inactive', value:'0'}]
      }
    ],
    checkbox:[
      { Label:"Set Default",
        Name: "SetDefault",
        Type: "checkbox",
      }
    ],
  }
  const columns = [
    {
      name: "Country Name",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.Name}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Short Name",
      selector: (row) => row.ShortName,
      sortable: true,
    },
    {
      name: "Status Name",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Added By",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.Created_at}
          </span>
        );
      },
    },
    {
      name: "Updated By",
      selector: (row) => {
        return (
          <span>
            {row.UpdatedBy == true ? "Admin" : "-"} <br /> {row.Updated_at}
          </span>
        );
      },
    },
  ];

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div
            className="card shadow-none border"
            style={{ marginBottom: "0" }}
          >
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Country Master</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/*Bootstrap Modal*/}
                <NavLink
                  to="/master"
                  className="btn mr-2 btn-gray fs-11 shadow"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                {/* <button
                  onClick={handleEdit}
                  data-toggle="modal"
                  data-target="#modal_form_vertical"
                  className="btn btn-primary"
                >
                  Edit
                </button> */}
                <Model
                  heading={"Add Country"}
                  apiurl={"addupdatecountry"}
                  initialValues={countryInitialValue}
                  validationSchema={countryValidationSchema}
                  valueForEdit={valueForEdit}
                  inputField={inputFieldObject}
                >
                  <div className="card-body">
                    <form action="">
                      <div className="row">
                        <div className="col-sm-3">
                          <label>Name</label>
                          <Field
                            type="text"
                            name="Name"
                            placeholder="Enter Name"
                            className="form-control"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="Name" />
                          </span>
                        </div>
                        <div className="col-sm-3">
                          <label>Short Name</label>
                          <Field
                            type="text"
                            name="ShortName"
                            placeholder="Enter Short Name"
                            className="form-control"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="ShortName" />
                          </span>
                        </div>
                        <div className="col-sm-4">
                          <label>Status</label>
                          <Field
                            name="Status"
                            className="form-control"
                            component={"select"}
                          >
                            <option value={1} selected>
                              Active
                            </option>
                            <option value={0}>Inactive</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>Set Default</label>
                          <Field
                            name="SetDefault"
                            className="form-control"
                            component={"select"}
                          >
                            <option value={0} selected>
                              No
                            </option>
                            <option value={1}>Yes</option>
                          </Field>
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="SetDefault" />
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </Model>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <input
                    type="text"
                    name="Search"
                    placeholder="Search here.."
                    className="search-input focus-ring form-input"
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
                    <option>Select Status</option>
                    <option value={0}>Inactive</option>
                    <option value={1}>Active</option>
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
          {/*******************------Table Card-----*******************/}
          <div className="card shadow-none border mt-2">
            <DataTable
              columns={columns}
              data={filterData}
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

export default CountryMaster;

