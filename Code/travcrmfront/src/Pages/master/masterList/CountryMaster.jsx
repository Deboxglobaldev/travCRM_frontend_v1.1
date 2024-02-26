import React, { useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";

const CountryMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [modalErrMessage, setModalErrMessage] = useState("");
  // console.log(`This is Error:  ${modalErrMessage}`);

  const [inputValue, setInputValue] = useState({
    id: "",
    Name: "",
    ShortName: "",
    SetDefault: "0",
    Status: "0",
    AddedBy: "1",
    UpdatedBy: "1",
  });

  console.log("Modal Input", inputValue);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("countrylist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
        console.log("get data is logged here: ", getData);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, []);

  useEffect(() => {
    const result = getData.filter((item) => {
      console.log("Filter Console.", item);
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.Name,
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
            {" "}
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
            {" "}
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
          <div className="card" style={{ marginBottom: "0" }}>
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
                <Model
                  heading={"Add Country"}
                  value={inputValue}
                  apiurl={"addupdatecountry"}
                  setErrorMessage={setModalErrMessage}
                >
                  <div className="card-body">
                    {/* <input type="hidden" name="id" value="" /> */}
                    <form action="">
                      <div className="row">
                        <div className="col-sm-3">
                          <label>Name</label>
                          <input
                            type="text"
                            name="Name"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={handleInputChange}
                            value={inputValue.Name}
                          />
                        </div>
                        <div className="col-sm-3">
                          <label>Short Name</label>
                          <input
                            type="text"
                            name="ShortName"
                            placeholder="Enter Short Name"
                            className="form-control"
                            onChange={handleInputChange}
                            value={inputValue.ShortName}
                          />
                        </div>
                        <div className="col-sm-4">
                          <label>Status</label>
                          <select
                            name="Status"
                            className="form-control"
                            onChange={handleInputChange}
                          >
                            <option value={0}>Inactive</option>
                            <option value={1}>Active</option>
                          </select>
                        </div>
                        <div className="col-sm-2">
                          <label>Set Default</label>
                          <input
                            type="checkbox"
                            name="SetDefault"
                            value="1"
                            onChange={handleInputChange}
                          />
                        </div>
                        {
                          <span className="font-size-10 text-danger p-2">
                            {modalErrMessage}
                          </span>
                        }
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
          <div className="card">
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
