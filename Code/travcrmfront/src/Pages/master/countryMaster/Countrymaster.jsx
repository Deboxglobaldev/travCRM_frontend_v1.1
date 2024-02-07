import React, { useState } from "react";
import { countryData } from "../../../data";

const Countrymaster = () => {
  const [countryMasterInputs, setCountryMasterInputs] = useState({
    country: "",
    name: "",
    status: "",
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddCountryInput = (e) => {
    setCountryMasterInputs({
      ...countryMasterInputs,
      [e.target.name]: e.target.value,
    });
  };

  console.log(countryMasterInputs);

  return (
    <>
      <div className="container-fluid my-3 mb-5">
        <div className="card">
          <div class="page-header-content header-elements-md-inline px-3">
            <div class="page-title d-flex">
              <button type="button" className=" btn btn-outline-info">
                Back
              </button>
              <h1 className="px-2"> City </h1>
            </div>

            <div class="header-elements d-none">
              <div class="d-flex justify-content-center align-items-center focus">
                <div className="px-2">
                  <input
                    type="text"
                    placeholder="Keyword"
                    className="form-control"
                  />
                </div>
                <div className="px-2">
                  <select className="form-control">
                    <option value="Select">Select</option>
                  </select>
                </div>
                <div className="px-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-3 d-flex justify-content-end align-items-center">
                  {/* Bootstrap Modal */}
                  <button
                    type="button"
                    className="btn btn-primary add-button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    + Add State
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
                          <form onSubmit={handleAddSubmit}>
                            <div className="form-group">
                              <label htmlFor="country">Country</label>
                              <select
                                className="form-control"
                                id="country"
                                onChange={handleAddCountryInput}
                                value={countryMasterInputs.country}
                                name="country"
                              >
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
                                onChange={handleAddCountryInput}
                                value={countryMasterInputs.name}
                                name="name"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="status">Status</label>
                              <select
                                className="form-control"
                                id="status"
                                onChange={handleAddCountryInput}
                                value={countryMasterInputs.status}
                                name="status"
                              >
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
            </div>
          </div>

          <div className="stateTable table-responsive">
            <table className="table table-hover table-bordered table-light">
              <thead>
                <tr>
                  <th scope="col">
                    Sr.
                    <i className="fa-solid fa-up-down px-3"></i>
                  </th>
                  <th scope="col">
                    <input type="checkbox" />
                    <i className="fa-solid fa-up-down px-3"></i>
                  </th>
                  <th scope="col">Country Name</th>
                  <th scope="col">Short Name</th>
                  <th scope="col">Created By</th>
                  <th scope="col">Modified By</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {countryData.DataList.map((v, index) => {
                  console.log(v);
                  return (
                    <tr key={index}>
                      <th scope="row">{v.Id}</th>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{v.CountryName}</td>
                      <td>{v.Name}</td>
                      <td>{v.AddedBy}</td>
                      <td>{v.UpdatedBy}</td>
                      <td>{v.Status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countrymaster;
