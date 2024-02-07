import React, { useEffect, useState } from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";

const Countrymaster = () => {

    const [postData, setPostData] = useState({
        "Search": null,
        "Status": null
    });

    const [countryData, setCountryData] = useState();

    useEffect(() => {
        const postDataToServer  = async () => {
            try{
                const response = await axios.post("http://127.0.0.1:8000/api/countrylist",postData)
                setCountryData(response.data)
                console.log(countryData.DataList)
            }catch(error){
                console.log(error)
            }
        }

        postDataToServer();
    },[postData])

  const handleAddSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddStateInput = (e) =>{
    console.log(e.target.value);
  }

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-2 col-md-2 col-sm-2 d-flex align-items-center">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <button className="back-button">back</button>
            </div>
            <div className="st-txt col-lg-6 d-flex align-items-center state-text">
              State
            </div>
          </div>
          <div className="col-lg-5 col-md-9 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
            <div className="col-lg-3 d-flex justify-content-end align-items-center">
              <input
                type="text"
                placeholder="keyword"
                className="keyword-input focus-ring"
              />
            </div>
            <div className="col-lg-3 d-flex justify-content-end align-items-center">
              <select className="select-input focus-ring">
                <option value="status">Select Status</option>
              </select>
            </div>
            <div className="col-lg-3 d-flex justify-content-end align-items-center">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
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
                          <select className="form-control" id="country" onChange={handleAddStateInput}>
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
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="status">Status</label>
                          <select className="form-control" id="status" onChange={handleAddStateInput}>
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
          <div className="col-lg-8"></div>
        </div>

        <div className="stateTable table-responsive">
          <table className="table table-hover table-bordered table-light">
            <thead>
              <tr>
                <th scope="col">
                  Sr.
                  <i className="fa-solid fa-up-down ps-4"></i>
                </th>
                <th scope="col">
                  <input type="checkbox" />
                  <i className="fa-solid fa-up-down ps-4"></i>
                </th>
                <th scope="col">Name</th>
                <th scope="col">Short Name</th>
                <th scope="col">Status</th>
                <th scope="col">Created By</th>
                <th scope="col">Modified By</th>
              </tr>
            </thead>
            <tbody>
              {countryData?.Status && countryData?.DataList.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{item.Name}</td>
                    <td>{item.ShortName}</td>
                    <td>{item.Status}</td>
                    <td>{item.AddedBy}</td>
                    <td>{item.UpdatedBy}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Countrymaster;
