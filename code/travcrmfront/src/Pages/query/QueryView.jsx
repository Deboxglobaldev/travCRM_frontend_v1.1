import React from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import CustomizedSteppers from "./CustomizedSteppers";

const QueryView = () => {
  const { pathname } = useLocation();
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

          <div className="card-body d-sm-flex align-items-sm-center justify-content-sm-between flex-sm-wrap">
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="ml-3">
                {/* <span className="badge badge-mark border-success mr-1"></span>  */}
                <span className="text-muted">Query#: DB123/00788</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="ml-3">
                <span className="text-muted">Subject: </span>
                <span style={{ color: "#16b90e" }}>
                  02-11-2023 DeBox Global Pvt. Ltd.
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="ml-3">
                <span className="text-muted">
                  Status{" "}
                  <span className="badge bg-warning-400 ml-auto">Pending</span>
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="ml-3">
                <span className="text-muted">Date: Jun 4, 4:00 am</span>
              </div>
            </div>
          </div>
          <div className="col-xl-12 px-4" style={{ padding: 0 }}>
            <div className="card shadow-none border">
              <div className="card-body" style={{ padding: "1px" }}>
                <ul className="nav nav-pills-toolbar border-bottom nav-justified p-1">
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="/query_list/queryview/"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/query_list/queryview/"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Query
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="querydetails"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/query_list/queryview/querydetails"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Query Details
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="quotation"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/query_list/queryview/quotation"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Quotation
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="tourextension"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/query_list/queryview/tourextension"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Tour Extension
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="clientcomm"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/query_list/queryview/clientcomm"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Client Communi...
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="suppliercomm"
                      className={`nav-link fs-6 py-1 rounded-pill  ${
                        pathname === "/query_list/queryview/suppliercomm"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Supplier Communi...
                    </NavLink>
                  </li>
                </ul>
                <div className="tab-content">
                  <Outlet />
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
