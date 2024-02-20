import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import { cityList } from "../../../data";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";


const StateMaster = () =>{

  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });


  const [modalInputs, setModalInputs] = useState({
    country: "",
    state: "",
    status: "",
  });

  useEffect(() => {
    const postDataToServer = () => {
      try {
        const {DataList} = cityList;
        console.log('datalist',DataList)
        setGetData(DataList);
        setFilterData(DataList)
        console.log('get data is logged here: ', getData);
      } catch (error) {
        console.log(error);
      }
    };

    postDataToServer();
  }, []);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    })

    setFilterData(result);
    
  }, [postData])

  const handleInputChange = (e) => {
    setModalInputs({ ...modalInputs, [e.target.name]: e.target.value });
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true
    },
    {
      name: "State Name",
      selector: (row) => row.StateName,
      sortable: true
    },
    {
      name: "Country Name",
      selector: (row) => row.CountryName,
      sortable: true
    },
    {
      name: "Added By",
      selector: (row) => {
        return (<span> Admin <br /> {row.Created_at}</span>)
      }
    },
    {
      name: "Updated By",
      selector: (row) => {
        return (<span> {row.UpdatedBy == true ? 'Admin' : '-'} <br /> {row.Updated_at}</span>)
      }
    },
  ]

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
            <div className="card-body" >
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <input type="text" name="Search" placeholder="Search here.." className="search-input focus-ring form-input"
                   value={postData.Search}
                  onChange={(e) => setPostData({ ...postData, Search: e.target.value })} />
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

          <div className="card">
          <DataTable
              columns={columns}
              data={postData.Search!=="" || postData.Status!==""? filterData : getData}
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

export default StateMaster;
