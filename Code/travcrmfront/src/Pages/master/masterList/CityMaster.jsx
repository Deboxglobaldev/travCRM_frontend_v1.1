import React, { useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import { cityList } from "../../../data";
import Pagination from "../../../helper/Pagination/Pagination";
import Model from "../../../Component/Layout/Model";

let PageSize = 5;
const CityMaster = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = () =>{
    
  }

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
                <h5 className="card-title d-none d-sm-block">City Master</h5>
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
                <Model heading={"Add City"}>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="City Name"
                          class="form-control"
                          onChange={handleInputChange}
                        />
                      </div>

                      <div class="col-sm-3">
                        <label>State Name</label>
                        <input
                          type="text"
                          placeholder="State Name"
                          class="form-control"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="col-sm-3">
                        <label htmlFor="country">Country</label>
                        <select className="form-control" id="country">
                          <option>Select Country</option>
                          <option>India</option>
                          <option>Iran</option>
                          <option>China</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label>Status</label>
                        <select className="form-control">
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
                  />
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select className="select-input focus-ring form-input">
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
                    <th scope="col">Sr</th>
                    <th scope="col">City Name</th>
                    <th scope="col">State Name</th>
                    <th scope="col">Country Name</th>
                    <th scope="col">Created By</th>
                    <th scope="col">Modified By</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  {cityList.DataList.map((item, index) => {
                    console.log(item);
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
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={34}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CityMaster;
