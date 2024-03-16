import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  ferryMasterInitialValue,
  ferryMasterValidationSchema,
} from "./MasterValidation";

const FerryMaster = () => {
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
        const { data } = await axiosOther.post("ferrynamelist", postData);
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
      FerryCompany: rowValue.FerryCompany,
      FerryName: rowValue.FerryName,
      Capacity: rowValue.Capacity,
      Status: rowValue.Status==='Active'?1:0,
      ImageName: rowValue.ImageName,
      ImageData: rowValue.ImageData,
      AddedBy: rowValue.AddedBy,
      UpdatedBy: rowValue.UpdatedBy,
    });
    setIsEditing(true);
  };

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.ImageName}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Ferry Company",
      selector: (row) => row.FerryCompany,
      sortable: true,
    },
    {
      name: "Ferry Name",
      selector: (row) => row.FerryName,
      sortable: true,
    },
    {
      name: "Capacity",
      selector: (row) => row.Capacity,
      sortable: true,
    },
    {
      name: "Added By",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.AddedBy}
          </span>
        );
      },
    },
    {
      name: "Updated By",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.UpdatedBy}
          </span>
        );
      },
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <span>
            {row.Status}
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
                <h5 className="card-title d-none d-sm-block">Ferry Master</h5>
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
                  heading={"Add Ferry Name"}
                  apiurl={"addupdateferryname"}
                  initialValues={ferryMasterInitialValue}
                  validationSchema={ferryMasterValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-4">
                        <label>Ferry Company</label>
                        <Field
                          name="FerryCompany"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>ABC Company</option>
                          <option value={1}>ABC Company</option>
                          <option value={1}>ABC Company</option>
                          <option value={1}>ABC Company</option>
                          <option value={1}>ABC Company</option>
                          <option value={1}>ABC Company</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <div className="d-flex justify-content-between">
                          <label>Ferry Name</label>
                          <span className="font-size-10 text-danger pt-1">
                            <ErrorMessage name="FerryName" />
                          </span>
                        </div>

                        <Field
                          type="text"
                          name="FerryName"
                          placeholder="Ferry Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Capacity</label>
                        <Field
                          type="text"
                          name="Capacity"
                          placeholder="Capacity"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Status</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Active</option>
                          <option value={0}>Inactive</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <div className="d-flex justify-content-between">
                          <label>Ferry Image</label>
                          <span className="font-size-10 text-danger pt-1">
                            <ErrorMessage name="ImageData" />
                          </span>
                        </div>
                        <Field
                          type="file"
                          name="ImageData"
                          placeholder="Capacity"
                          className="form-control"
                        />
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

export default FerryMaster;
