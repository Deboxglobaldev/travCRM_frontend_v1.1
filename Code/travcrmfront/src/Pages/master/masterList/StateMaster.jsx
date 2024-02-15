import React, { useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import { cityList } from "../../../data";
import Model from "../../../Component/Layout/Model";
import NewPagination from "../../../helper/NewPagination";

let PageSize = 5;

const StateMaster = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableRecords, setTableRecords] = useState([]);

  const [modalInputs, setModalInputs] = useState({
    country: "",
    state: "",
    status: "",
  });

  const handleInputChange = (e) => {
    setModalInputs({ ...modalInputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card">
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">State Master</h5>
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
                <Model heading={"Add State"} value={modalInputs}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4">
                        <label htmlFor="country">Select Country</label>
                        <select
                          className="form-input"
                          id="country"
                          name="country"
                          value={modalInputs.country}
                          onChange={handleInputChange}
                        >
                          <option>Select Country</option>
                          <option>India</option>
                          <option>Iran</option>
                          <option>China</option>
                        </select>
                      </div>
                      <div className="col-sm-4">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="State Name"
                          className="form-input"
                          name="state"
                          value={modalInputs.state}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Status</label>
                        <select
                          className="form-input"
                          name="status"
                          value={modalInputs.status}
                          onChange={handleInputChange}
                        >
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
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
                    placeholder="Search"
                    className="search-input focus-ring form-input"
                    name="search"
                  />
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select
                    className="select-input focus-ring form-input"
                    name="userStatus"
                  >
                    <option value="">Select Status</option>
                    <option value="0">Active</option>
                    <option value="1">Inactive</option>
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

          <div className="card">
            <div className="table-responsive px-0">
              <table className="table table-bordered">
                <thead className="bg-light font-weight-bold">
                  <tr>
                    <th>Sr</th>
                    <th>City Name</th>
                    <th>State Name</th>
                    <th>Country Name</th>
                    <th>Created By</th>
                    <th>Modified By</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  {tableRecords.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>{item.Id}</th>
                        <td>{item.Name}</td>
                        <td>{item.StateName}</td>
                        <td>{item.CountryName}</td>
                        <td>{item.AddedBy}</td>
                        <td>{item.UpdatedBy}</td>
                        <td>{item.Status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="card-body m-auto">
              <NewPagination
                tableData={cityList.DataList}
                setTableRecords={setTableRecords}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default StateMaster;
