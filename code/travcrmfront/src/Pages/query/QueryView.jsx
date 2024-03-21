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
          {/* <div className="col-xl-3">
            <div className="card shadow-none border">
              <div className="card-body rounded navbar-dark">
                <div className="media">
                  <div className="mr-3 align-self-center">
                    <h6 className="media-title font-weight-semibold">
                      ID: #856525
                    </h6>
                  </div>
                  <div className="media-body text-right">
                    <span className="opacity-75">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                      24/02/2024 - 10:47 AM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border">
              <div className="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
                <span style={{ fontWeight: 600 }}>Query Information </span>
              </div>
              <div className="">
                <div className="row justify-content-between px-3 py-2">
                  <div className="col-4 border p-0">
                    <div
                      className="d-flex align-items-center px-1"
                      style={{ background: "#f0ffef" }}
                    >
                      <div className="w-100">
                        <a
                          href="#"
                          className="text-default font-weight-semibold letter-icon-title"
                        >
                          Start City
                        </a>
                        <div className="text-muted font-size-sm w-100">
                          <img
                            src="/assets/icons/countries.png"
                            alt="image"
                            style={{ width: "15px" }}
                          />
                          <span className="pl-2">Delhi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 border p-0">
                    <div
                      className="d-flex align-items-center px-1"
                      style={{ background: "#f0ffef" }}
                    >
                      <div>
                        <a
                          href="#"
                          className="text-default font-weight-semibold letter-icon-title"
                        >
                          Nights
                        </a>
                        <div className="text-muted font-size-sm
                          m-auto w-100
                        ">
                          <i
                            className="fa fa-light fa-moon"
                            style={{ color: "black", fontSize: "11px" }}
                          ></i>
                          <span className="pl-2">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 border p-0">
                    <div
                      className="d-flex align-items-center px-1"
                      style={{ background: "#f0ffef" }}
                    >
                      <div className="w-100">
                        <a
                          href="#"
                          className="text-default font-weight-semibold letter-icon-title"
                        >
                          End City
                        </a>
                        <div className="text-muted font-size-sm w-100
                        ">
                          <img
                            src="/assets/icons/countries.png"
                            alt="image"
                            style={{ width: "15px" }}
                          />
                          <span className="pl-2">Mumbai</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table text-nowrap">
                  <thead>
                    <tr>
                      <th className="px-2"></th>
                      <th className="px-2">Destination</th>
                      <th className="px-2">Date</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Day 1
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Delhi
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Banglore
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Day 2
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Banglore
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Mumbai
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}

          <div>
          <CustomizedSteppers />
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
