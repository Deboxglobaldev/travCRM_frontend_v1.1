import React from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import { cityList } from "../../../data";
const CityMaster = () => {
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
                <NavLink
                  to="/master"
                  className="btn bg-teal-400 mr-2 fs-11"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <h5 className="card-title ">Brand Master</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/* Bootstrap Modal */}
                <button
                  type="button"
                  className="btn bg-teal-400 add-button fs-11"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i className="fa fa-plus pr-1" aria-hidden="true"></i>
                  Create New
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add State
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {/* modal body */}

                        <form>
                          <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select className="form-control" id="country">
                              <option>Select Country</option>
                              <option>India</option>
                              <option>Pakistan</option>
                              <option>Nepal</option>
                              <option>China</option>
                              <option>Bangladesh</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="email"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select className="form-control" id="status">
                              <option>Select</option>
                              <option>Active</option>
                              <option>Offline</option>
                            </select>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="submit" className="save-button">
                          Save
                        </button>
                        <button
                          type="button"
                          className="cancel-button"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
                      {/* /modal body */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <input
                    type="text"
                    placeholder="keyword"
                    className="keyword-input focus-ring form-input"
                  />
                </div>
                <div className="col-lg-2">
                  <select className="select-input focus-ring form-input">
                    <option value="">Select Status</option>
                    <option value="0">Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
                <div className="col-lg-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input form-input"
                  />
                </div>
                <div className="col-lg-2">
                  <button className="btn bg-teal-400 w-75 custom-h-37">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div class="table-responsive px-0">
                <table class="table table-bordered">
                  <thead class="bg-light font-weight-bold">
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
                  <tbody class="text-secondary">
                    {cityList.DataList.map((item,index) => {
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
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CityMaster;
