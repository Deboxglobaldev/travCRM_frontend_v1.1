import React from 'react';
import Layout from '../../Component/Layout/Layout';
import { NavLink } from 'react-router-dom';
const QueryList = () =>{
    return(
        <>
        <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card" style={{marginBottom:"0"}}>
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Query</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/* Bootstrap Modal */}
                <NavLink
                  to="/query_list/query"
                  className="btn mr-2 btn-gray fs-11 shadow"
                  aria-expanded="false"
                >
                  + Add
                </NavLink>
              </div>
            </div>
            <div className="card-body" >
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <input type="text" name="Search" placeholder="Search here.." className="search-input focus-ring form-input"/>
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select
                    className="select-input focus-ring form-input"
                  >
                    <option value="">Select Status</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
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

          
        </div>
        </Layout>
        </>
    )
};

export default QueryList;