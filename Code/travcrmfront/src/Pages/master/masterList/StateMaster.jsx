import React, { useState } from "react";
import stateData from '../../../data'; 
import { useNavigate } from "react-router-dom";
import Pagination from '../../../helper/Pagination/Pagination';
import Layout from "../../../Component/Layout/Layout";
let PageSize = 5;

const StateMaster = () =>{

  
  console.log(stateData);
  const navigate = useNavigate();

  const [stateMasterInputs, setStateMasterInputs] = useState({
    state: "",
    name: "keyword",
    status: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const handleAddSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddStateInput = (e) => {
    setStateMasterInputs({
      ...cityMasterInputs,
      [e.target.name]: e.target.value,
    });
  };

  const backMasterButton = () => {
    navigate("/master");
  };
  return(
    <>
    <Layout>
    <div className="page-container">
    <div className="page-content">
    <div className="content-wrapper">
    <div className="content pt-0" style={{ marginTop:"20px" }}>
      
    <div className="row">
    <div className="col-xl-12">
        <div className="card-header header-elements-inline bg-info-700" style={{ padding: "10px" }}>
        <div className="col-xl-9">
            <h5 className="card-title">Brand Master</h5>
        </div>
        <div className="col-xl-3" >
            <div className="btn-group justify-content-center" >
                <a href="/#" className="btn bg-teal-400" aria-expanded="false" ><i className="fa fa-arrow-left mr-2"></i>Back</a>
                <a href="#" className="btn bg-teal-400" aria-expanded="false" ><i className="fa fa-plus" aria-hidden="true"></i> Create New</a>
            </div>
        </div>
        </div>
        <div className="card">
      <div className="">
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
                <option value="">Select Status</option>
                <option value="0">Active</option>
                <option value="1">Inactive</option>
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
                <th scope="col">State Name</th>
                <th scope="col">Country Name</th>
                <th scope="col">Status</th>
                <th scope="col">Created By</th>
                <th scope="col">Modified By</th>
              </tr>
            </thead>
            <tbody>
              {stateData.DataList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.CountryName}</td>
                    <td>{item.Status}</td>
                    <td>{item.AddedBy}</td>
                    <td>{item.UpdatedBy}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={34}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </Layout>
    </>
  )
}


export default StateMaster;