import React from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
          <div className="col-xl-3">
            <div className="card">
              <div className="card-body navbar-dark">
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
            <div className="card">
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
                            class="fa fa-light fa-moon"
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
          </div>

          <div className="col-xl-7" style={{ padding: 0 }}>
            <div className="card">
              <div className="card-body navbar-green">
                <div className="media">
                  <div className="col-xl-6" style={{ padding: 0 }}>
                    <h6 className="media-title font-weight-semibold">
                      <span style={{ color: "gray", fontSize: "12px" }}>
                        Subject:
                      </span>{" "}
                      <span class="badge bg-warning-400 ml-auto">Pending</span>{" "}
                      <br />{" "}
                      <span style={{ color: "#16b90e" }}>
                        02-11-2023 DeBox Global Pvt. Ltd.
                      </span>
                    </h6>
                  </div>
                  <div
                    className="col-xl-6"
                    style={{ textAlign: "right", padding: "0px" }}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ float: "right" }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        style={{ background: "#16b90e" }}
                      >
                        + Add Quotation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{ padding: "1px" }}>
                <ul className="nav nav-pills nav-pills-bordered nav-pills-toolbar nav-justified">
                  <li className="nav-item">
                    <a
                      href="#toolbar-justified-pill1"
                      className="nav-link active"
                      data-toggle="tab"
                    >
                      <b>Quotation</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#toolbar-justified-pill2"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      <b>Tour Extension</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#toolbar-justified-pill3"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      <b>Client Communication</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#toolbar-justified-pill4"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      <b>Supplier Communicat..</b>
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane fade" id="toolbar-justified-pill1">
                    To use in pills with equal widths add{" "}
                    <code>.nav-justified .nav-pills-toolbar</code> classNamees.
                  </div>

                  <div
                    className="tab-pane fade active show"
                    id="toolbar-justified-pill2"
                  >
                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                    single-origin coffee squid laeggin.
                  </div>

                  <div className="tab-pane fade" id="toolbar-justified-pill3">
                    DIY synth PBR banksy irony. Leggings gentrify squid 8-bit
                    cred pitchfork. Williamsburg whatever.
                  </div>

                  <div className="tab-pane fade" id="toolbar-justified-pill4">
                    Aliquip jean shorts ullamco ad vinyl cillum PBR. Homo
                    nostrud organic, assumenda labore aesthet.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-2">
            <div className="card">
              <div className="card-body navbar-dark">
                <div className="media" style={{ float: "left" }}>
                  <div className="align-self-center">
                    <h6 className="media-title font-weight-semibold">
                      Actions
                    </h6>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ float: "right", marginRight: "0px" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      padding: "3px",
                      fontSize: "11px",
                      background: "#969090",
                    }}
                  >
                    Back
                  </Button>
                </div>
              </div>
              <div className="card-body p-0">
                <div
                  className="accordion border-none"
                  id="accordionPanelsStayOpenExample"
                >
                  {/* First Accordian */}
                  <div className="accordion-item border-top-0">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button collapsed p-2 text-color-query-view font-size-12 font-weight-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Important Links
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body p-0">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <NavLink to="/query_list">irctc.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">makemytrip.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">booking.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">cleartrip.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">hotels.com</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Accordina Second */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed p-2
                        font-size-12 text-color-query-view font-weight-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Payement Information
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body p-0">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <NavLink to="/query_list">irctc.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">makemytrip.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">booking.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">cleartrip.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">hotels.com</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Accordian Third */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed p-2
                        font-size-12 font-weight-bold text-color-query-view"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Query Information
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body p-0">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <NavLink to="/query_list">irctc.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">makemytrip.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">booking.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">cleartrip.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">hotels.com</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Accordian Fourth */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        className="accordion-button collapsed p-2 
                        font-size-12 font-weight-bold text-color-query-view"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Supplier Information
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div className="accordion-body p-0">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <NavLink to="/query_list">irctc.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">makemytrip.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">booking.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">cleartrip.com</NavLink>
                          </li>
                          <li className="list-group-item">
                            <NavLink to="/query_list">hotels.com</NavLink>
                          </li>
                        </ul>
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
  );
};

export default QueryView;
