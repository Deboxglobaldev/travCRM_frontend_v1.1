import React, { useEffect, useState, useMemo } from "react";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import Pagination from "../../../helper/Pagination/Pagination";
import Layout from "../../../Component/Layout/Layout";
import { Link, NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";

let PageSize = 10;

const CountryMaster = () => {

  const [postData, setPostData] = useState({
    Search: null,
    Status: null,
  });

  const [modalInputs, setModalInputs] = useState({
    name:"",
    shortName:"",
    status:""
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
  }, [currentPage,getData]);

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setModalInputs({...modalInputs, [e.target.name]:e.target.value});
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

                <Model heading={"Add Country"} value={modalInputs}>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <label>Name</label>
                          <input type="text" 
                          placeholder="Enter Name" 
                          class="form-control" 
                          name="name"
                          value={modalInputs.name}
                          onChange={handleInputChange} 
                          />
                        </div>
              
                        <div class="col-sm-3">
                          <label>Short Name</label>
                          <input type="text"
                          placeholder="Enter Short Name" 
                          class="form-control" 
                          name="shortName"
                          value={modalInputs.shortName}
                          onChange={handleInputChange} />
                        </div>

                        <div class="col-sm-4">
                          <label>Status</label>
                          <select className="form-control"
                            name="status"
                            value={modalInputs.status}
                            onChange={handleInputChange}
                          >
                            <option>Active</option>
                            <option>Inactive</option>
                          </select>
                        </div>

                        <div class="col-sm-2">
                          <label>Set Default</label>
                            <input type="checkbox" 
                            />
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
