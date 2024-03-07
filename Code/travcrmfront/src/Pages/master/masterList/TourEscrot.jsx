import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage, Formik } from "formik";
import {
  countryInitialValue,
  countryValidationSchema,
} from "./MasterValidation";
import "jquery";
import "select2";

const TourEscort = () => {
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
        const { data } = await axiosOther.post("monumentmasterlist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, [getData]);

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
      ShortName: rowValue.ShortName,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.Status === "Active" ? 1 : 0,
      AddedBy: rowValue.AddedBy,
      UpdatedBy: rowValue.UpdatedBy,
    });
    setIsEditing(true);
  };

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
                <h5 className="card-title d-none d-sm-block">Tour Escort</h5>
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
                <Model
                  heading={"Add Tour Escort / Tour Manager"}
                  apiurl={"addupdatemonumentmaster"}
                  initialValues={countryInitialValue}
                  validationSchema={countryValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-4">
                        <label>Service Type</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Tour Escort</option>
                          <option value={0}>Tour Manager</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Name</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Mobile Number</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Number"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Whatsapp Number</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Number"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Alternate Number</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Number"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Email</label>
                        <Field
                          type="email"
                          name="Name"
                          placeholder="Email"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Tour Escort License</label>
                        <Field
                          type="email"
                          name="Name"
                          placeholder="Licence"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>License Expiry</label>
                        <Field
                          type="date"
                          name="LicenseExpire"
                          placeholder="Licence"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label className="font-size-10">
                          Tour Escort / Tour Manager Image
                        </label>
                        <Field
                          type="file"
                          name="LicenseExpire"
                          placeholder="Licence"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Supplier</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Yes</option>
                          <option value={0}>No</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Tour Escort License</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Contact Person</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Designation</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Country</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>Select</option>
                          <option value={1}>India</option>
                          <option value={1}>Pakistan</option>
                          <option value={1}>Nepal</option>
                          <option value={1}>Bangaldesh</option>
                          <option value={1}>Shri Lanka</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>State</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>Select</option>
                          <option value={1}>Delhi</option>
                          <option value={1}>Hydrabad</option>
                          <option value={1}>Haryana</option>
                          <option value={1}>Bihar</option>
                          <option value={1}>West Bangal</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>City</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>Select</option>
                          <option value={1}>Delhi</option>
                          <option value={1}>Gurgaon</option>
                          <option value={1}>Noida</option>
                          <option value={1}>Lucknow</option>
                          <option value={1}>Munger</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Pin Code</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Pin Code"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Details</label>
                        <Field
                          as="textarea"
                          name="Name"
                          placeholder="Details"
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Address</label>
                        <Field
                          as="textarea"
                          name="Name"
                          placeholder="Address"
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Transfer Type</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Ticket Only</option>
                          <option value={0}>ALL</option>
                          <option value={0}>SIC</option>
                          <option value={0}>PVT</option>
                        </Field>
                      </div>
                    </div>
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

export default TourEscort;
