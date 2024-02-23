import React from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";

const QueryView = () => {
  return (
    <Layout>
      <div className="container-fluid mt-3 mb-5">
        <div className="row">
          <div className="col-3 px-1">
            <div className="card min-vh-100 shadow-none border">
              <div className="card-header py-1 px-2">
                <div className="row">
                  <div>
                    <span className="err-fs text-secondary">
                      23 January 2024 10:32AM
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <p>Query Id</p>
                    <span
                      className="bg-warning p-1 rounded"
                      style={{ fontSize: "8px" }}
                    >
                      MEDIUM
                    </span>
                  </div>
                  <div>
                    <h5 className="">DB23-24/000927</h5>
                  </div>
                </div>
                <div className="row text-secondary bg-for-query-view">
                  <div className="d-flex align-items-center py-1">
                    <div>
                      <i className="fa-solid fa-user fs-5 bg-secondary text-light p-1 rounded-circle"></i>
                    </div>
                    <div className="d-flex flex-column pl-2">
                      <span>Disha India Limited</span>
                      <span>90990909090</span>
                    </div>
                  </div>
                  <div className="py-2 d-flex align-items-center">
                    <i className="fa-brands fa-whatsapp text-success fs-3"></i>
                    <span className="text-success pl-2 fs-5">Whatsapp</span>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="col p-0">
                  <table class="table table-bordered">
                    <thead className="p-0">
                      <tr className="p-0">
                        <th className="p-0 text-center"></th>
                        <th className="p-0 text-center">Destination</th>
                        <th className="p-0 text-center">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-0 text-center">Day 1</td>
                        <td className="p-0 text-center">Delhi</td>
                        <td className="p-0 text-center">23-02-24</td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">Day 2</td>
                        <td className="p-0 text-center">Agra</td>
                        <td className="p-0 text-center">24-02-24</td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">Day 3</td>
                        <td className="p-0 text-center">Mumbai</td>
                        <td className="p-0 text-center">25-02-24</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="table">
                    <div className="tbody">
                      <tr>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">Adult</span>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">Child</span>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">Infant</span>
                            <span>0</span>
                          </div>
                        </td>
                      </tr>
                    </div>
                  </div>
                </div>
                <div className="col p-0">
                  <table>
                    <tbody>
                      <tr>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">SGL</span>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">DBL</span>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">TPL</span>
                            <span>0</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">TWIN</span>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="p-1 d-flex justify-content-between">
                          <div className="rounded td-size-ex text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">CWB</span>
                            <span>1</span>
                          </div>
                          <div className="rounded td-size-ex text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">CNB</span>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">E.BED</span>
                            <span>0</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">QUAD BR</span>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="p-1 d-flex justify-content-between">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">BUDGET</span>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">.</span>
                            <span>0</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col border-top border-bottom mt-1 py-2">
                  <div className="d-flex flex-column">
                    <span className="text-secondary">OPERATION PERSON</span>
                    <span>Sanaul Ansari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 px-1">
            <div className="card min-vh-100 shadow-none border">
              <div
                className="card-header py-1 px-0"
                style={{ padding: "10px" }}
              >
                <div className="header-elements-inline">
                  <div className="col d-flex flex-column">
                    <div>
                      <span className="text-secondary font-size-10">
                        SUBJECT
                      </span>
                      <span
                        className="ml-3 bg-dark text-light rounded font-size-10"
                        style={{ padding: "2px" }}
                      >
                        Qoutatin Generated
                      </span>
                    </div>
                    <div>
                      <h6 className="text-secondary">
                        23-02-24 Disha Inida Limited
                      </h6>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-around">
                    <button
                      className="custom-button font-size-11"
                      style={{ height: "30px" }}
                    >
                      Send/Recieve
                    </button>
                    <button
                      className="custom-button font-size-11"
                      style={{ height: "30px" }}
                    >
                      Add Quotation
                    </button>
                    <NavLink
                      to="/query_list"
                      className="custom-button d-flex align-items-center justify-content-center font-size-11"
                      aria-expanded="false"
                      style={{ height: "30px", width: "50px" }}
                    >
                      Back
                    </NavLink>
                  </div>
                </div>
                <div className="col bg-for-query-view py-2">
                  <h4 className="m-0">Quotation Generated</h4>
                </div>
              </div>
              <div className="card-body p-0">
                <div class="table-responsive">
                  <table class="table table-bordered font-size-9">
                    <thead>
                      <tr>
                        <th className="p-0 text-center">Quotation Id</th>
                        <th className="p-0 text-center">From Date</th>
                        <th className="p-0 text-center">To Date</th>
                        <th className="p-0 text-center">Duration</th>
                        <th colSpan="5" className="text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="p-0 px-1 text-center">
                          DB23-24/000917-A
                        </td>
                        <td className="py-2 px-1 text-center">23-02-24</td>
                        <td className="py-2 px-1 text-center">24-02-24</td>
                        <td className="py-2 px-1 text-center">1 N/ 6 D</td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Costsheet
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Preview
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Duplicate
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Hotel Availability
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Make Final
                          </button>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="p-0 px-1 text-center">
                          DB23-24/000917-A
                        </td>
                        <td className="py-2 px-1 text-center">23-02-24</td>
                        <td className="py-2 px-1 text-center">24-02-24</td>
                        <td className="py-2 px-1 text-center">1 N/ 6 D</td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Costsheet
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Preview
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Duplicate
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Hotel Availability
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Make Final
                          </button>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="p-0 px-1 text-center">
                          DB23-24/000917-A
                        </td>
                        <td className="py-2 px-1 text-center">23-02-24</td>
                        <td className="py-2 px-1 text-center">24-02-24</td>
                        <td className="py-2 px-1 text-center">1 N/ 6 D</td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Costsheet
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Preview
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Duplicate
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Hotel Availability
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Make Final
                          </button>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="p-0 px-1 text-center">
                          DB23-24/000917-A
                        </td>
                        <td className="py-2 px-1 text-center">23-02-24</td>
                        <td className="py-2 px-1 text-center">24-02-24</td>
                        <td className="py-2 px-1 text-center">1 N/ 6 D</td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Costsheet
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Preview
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Duplicate
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Hotel Availability
                          </button>
                        </td>
                        <td className="py-1 px-1 text-center">
                          <button
                            className="py-1 rounded bg-primary"
                            style={{ border: "none" }}
                          >
                            Make Final
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 px-1">
            <div className="card min-vh-100 shadow-none border">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                
                {/* First Accordian */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body p-0">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <NavLink to="/query_list">irctc.com</NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">makemytrip.com</NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">booking.com</NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">cleartrip.com</NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">hotels.com</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Second Accordian */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Payment Information
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body p-0">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <NavLink to="/query_list">Expense Entry</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Third Accordian */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      class="accordion-button collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div class="accordion-body p-0">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <NavLink to="/query_list">Cancel Query</NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">Query History</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Fourth Accordian */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button
                      class="accordion-button collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFour"
                  >
                    <div class="accordion-body p-0">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <NavLink to="/query_list">Supplier Voucher</NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">
                            Supplier Confirmation
                          </NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">
                            Travle Arrangement List
                          </NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">Hotel Rooming List</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Five Accordian*/}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      ToDo List
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFive"
                  >
                    <div class="accordion-body p-0">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <NavLink to="/query_list">ToDo List</NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">
                            Assign Tour Manager
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Six Accordian */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSix"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSix"
                    >
                      Assign User
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSix"
                  >
                    <div class="accordion-body p-0">
                      <ul class="list-group list-group-flush px-2">
                        <li
                          class=""
                          style={{ listStyle: "none", paddingTop: "5px" }}
                        >
                          <input
                            type="text"
                            placeholder="Assign To"
                            className="form-control"
                          />
                        </li>
                        <li
                          class=""
                          style={{ listStyle: "none", paddingTop: "5px" }}
                        >
                          <input
                            type="text"
                            placeholder="Enter More Emails"
                            className="form-control"
                          />
                        </li>
                        <li class="pt-1 d-flex justify-content-end">
                          <button className="btn btn-success">Save</button>
                          <button className="btn btn-danger ml-2">
                            Cancel
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Seven Accordian */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSeven"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSeven"
                    >
                      Client Information
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSeven"
                  >
                    <div class="accordion-body p-0">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <NavLink to="/query_list">Guest List</NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">
                            Agent Welcom Letter
                          </NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">
                            Plain Welcome Letter
                          </NavLink>
                        </li>
                        <li class="list-group-item">
                          <NavLink to="/query_list">
                            Agent Feedback Form
                          </NavLink>
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
    </Layout>
  );
};

export default QueryView;

// <head>
// 	<meta charset="utf-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
// 	<title>Limitless - Responsive Web Application Kit by Eugene Kopyov</title>

// 	<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
// 	<link href="../../../../global_assets/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
// 	<link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
// 	<link href="assets/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
// 	<link href="assets/css/layout.min.css" rel="stylesheet" type="text/css">
// 	<link href="assets/css/components.min.css" rel="stylesheet" type="text/css">
// 	<link href="assets/css/colors.min.css" rel="stylesheet" type="text/css">

// 	<script src="../../../../global_assets/js/main/jquery.min.js"></script>
// 	<script src="../../../../global_assets/js/main/bootstrap.bundle.min.js"></script>
// 	<script src="../../../../global_assets/js/plugins/loaders/blockui.min.js"></script>

// 	<script src="../../../../global_assets/js/plugins/visualization/d3/d3.min.js"></script>
// 	<script src="../../../../global_assets/js/plugins/visualization/d3/d3_tooltip.js"></script>
// 	<script src="../../../../global_assets/js/plugins/forms/styling/switchery.min.js"></script>
// 	<script src="../../../../global_assets/js/plugins/forms/selects/bootstrap_multiselect.js"></script>
// 	<script src="../../../../global_assets/js/plugins/ui/moment/moment.min.js"></script>
// 	<script src="../../../../global_assets/js/plugins/pickers/daterangepicker.js"></script>

// 	<script src="assets/js/app.js"></script>
// 	<script src="../../../../global_assets/js/demo_pages/dashboard.js"></script>

// </head>
