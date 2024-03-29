import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import {
  hotelMasterInitialValue,
  hotelMasterValidationSchema,
} from "./MasterValidation";
import { axiosOther } from "../../../http/axios/axios_new";
import { hotelMasterValue } from "./MasterValidation";

const HotelMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [valueForEdit, setValueForEdit] = useState({});
  const [moreInfo, setMoreInfo] = useState(false);
  const [moreAddress, setMoreAddress] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("hotelmasterlist", postData);
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

  const columns = [
    {
      name: "Hotel Chain",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.HotelChain}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Hotel Name",
      selector: (row) => row.HotelName,
      sortable: true,
    },
    {
      name: "Destination/Locality",
      selector: (row) => row.Destination,
    },
    {
      name: "Contact Person",
      selector: (row) => row.ContactPerson,
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Room Type",
      selector: (row) => row.RoomType,
      sortable: true,
    },
    {
      name: "Gallery",
      selector: (row) => row.Gallery,
      sortable: true,
    },
    {
      name: "Rate Sheet",
      selector: (row) => row.RateSheet,
      sortable: true,
    },
  ];

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card shadow-none border">
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Hotel Master</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/* Bootstrap Modal */}
                <NavLink
                  to="/master"
                  className="gray-button"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <NavLink
                  to="/master/hotelmaster/create"
                  className="blue-button"
                  aria-expanded="false"
                >
                  Create&nbsp;New
                </NavLink>
                <Model
                  heading={"Import Hotel"}
                  buttonName={"Import"}
                  buttonClass={"green-button"}
                  apiurl={"addupdatehotelmaster"}
                  initialValues={hotelMasterInitialValue}
                  validationSchema={hotelMasterValidationSchema}
                  valueForEdit={valueForEdit}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                >

                </Model>
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
                    <option value="0">Select Status</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
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
              data={hotelMasterValue}
              // data={
              //   postData.Search !== "" || postData.Status !== ""
              //     ? filterData
              //     : getData
              // }
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

export default HotelMaster;
