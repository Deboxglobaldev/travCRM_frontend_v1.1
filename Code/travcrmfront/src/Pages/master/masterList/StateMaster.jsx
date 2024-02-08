import React, { useState } from "react";
import stateData from "../../../data";
import { useNavigate } from "react-router-dom";

const StateMaster = () => {
  const navigate = useNavigate();
  const [stateMasterInputs, setStateMasterInputs] = useState({
    country: "",
    name: "",
    status: "",
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddStateInput = (e) => {
    setStateMasterInputs({
      ...stateMasterInputs,
      [e.target.name]: e.target.value,
    });
  };

  const backMasterButton = () =>{
    navigate('/master');
  }

  console.log(stateMasterInputs);

  return (
    <>
      <div className="container-fluid my-3">
        <div className="card">
        <div class="page-header-content header-elements-md-inline px-3">
            <div class="page-title d-flex align-items-center">
              <button type="button" 
              class="btn bg-teal-400 btn-icon backButton"
              onClick={backMasterButton}
              ><i class="fa-solid fa-arrow-left"></i></button>
              <h2 className="px-2"> State </h2>
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
                  <select className=" form-control form-select form-selct-lg m-2" aria-label=".form-select-lg example">
                    <option selected>Select State</option>
                    <option value="hr">Haryana</option>
                    <option value="dl">Delhi</option>
                    <option value="ch">Chandigarh</option>
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
                    className="btn btn-info addButton"
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
                                onChange={handleAddStateInput}
                                value={stateMasterInputs.country}
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
                                onChange={handleAddStateInput}
                                value={stateMasterInputs.name}
                                name="name"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="status">Status</label>
                              <select
                                className="form-control"
                                id="status"
                                onChange={handleAddStateInput}
                                value={stateMasterInputs.status}
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
                  <th scope="col">State Name</th>
                  <th scope="col">Created By</th>
                  <th scope="col">Modified By</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {stateData.DataList.map((v, index) => {
                  console.log(v);
                  return (
                    <tr key={index}>
                      <th scope="row">{v.Id}</th>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{v.CountryName}</td>
                      <td>{v.Name}</td>
                      <td>{v.UpdatedBy}</td>
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

export default StateMaster;
