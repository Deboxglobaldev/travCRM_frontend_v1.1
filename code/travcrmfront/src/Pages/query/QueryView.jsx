import React from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink, Outlet } from "react-router-dom";
import CustomizedSteppers from "./CustomizedSteppers";

const QueryView = () => {
  const cardBody = {
    MsFlex: "1 1 auto",
    flex: "1 1 auto",
    padding: "0.8rem 1rem",
  };


  return (
    <Layout>
      <div className="container-fluid mt-3 mb-5">
        <div className="row">


          <div>
          <CustomizedSteppers step={3} />
          </div>

          <div className="col-xl-12 pl-2" style={{ padding: 0 }}>
            <div className="card shadow-none border">

              <div className="card-body" style={{ padding: "1px" }}>
                <ul className="nav nav-pills nav-pills-bordered nav-pills-toolbar nav-justified">
                  <li className="nav-item">
                    <NavLink to="/query_list/queryview/" className="nav-link">Query</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="querydetails" className="nav-link">Query Details</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="quotation" className="nav-link">Quotation</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="tourextension" className="nav-link">Tour Extension</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="clientcomm" className="nav-link">Client Communi...</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="suppliercomm" className="nav-link">Supplier Communi...</NavLink>
                  </li>
                </ul>

                <div className="tab-content">
                    <Outlet/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QueryView;
