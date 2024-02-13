import React, { useEffect, useState, useMemo } from "react";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import Pagination from "../../../helper/Pagination/Pagination";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
let PageSize = 5;

const CountryMaster = () => {
  const [postData, setPostData] = useState({
    Search: null,
    Status: null,
  });

  const [getData, setGetData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/countrylist",
          postData
        );
        setGetData(response.data);
        console.log(response.status);
        console.log(getData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    postDataToServer();
  }, [postData]);

  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return getData?.DataList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleAddSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddCountryInput = (e) => {
    console.log(e.target.value);
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
                <h5 className="card-title d-none d-sm-block">Country Master</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/* Bootstrap Modal */}
                <NavLink
                  to="/master"
                  className="btn mr-2 btn-gray fs-11 shadow" 
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <button
                  type="button"
                  className="btn bg-teal-400 add-button fs-11 shadow"
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
                          Add Country
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
                            <select className="form-control" id="country"
                             onChange={handleAddCountryInput}
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
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                              onChange={handleAddCountryInput}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select className="form-control" id="status"
                                onChange={handleAddCountryInput}
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
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input focus-ring form-input"
                    onChange={(e) =>
                        setPostData({
                          ...postData,
                          Search: e.target.value,
                        })
                      }
                      value={postData.Search}
                  />
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select
                    className="select-input focus-ring form-input"
                    onChange={(e) => {
                      setPostData({
                        ...postData,
                        Status: e.target.value,
                      });
                    }}
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

          {/*******************------Table Card-----*******************/}

          <div className="card">
              <div class="table-responsive px-0">
                <table class="table table-bordered">
                  <thead class="bg-light font-weight-bold">
                    <tr>
                      <th scope="col">Sr</th>
                      <th scope="col">Name</th>
                      <th scope="col">Short Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Added By</th>
                      <th scope="col">Updated By</th>
                    </tr>
                  </thead>
                  <tbody class="text-secondary">
                    {loading && <>Loading...</>}
                    {currentTableData &&
                      currentTableData.map((item, index) => {
                        return (
                          <tr key={index}>
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
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={34}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
      </Layout>
    </>
  );
};

export default CountryMaster;
