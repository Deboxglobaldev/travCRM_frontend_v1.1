import React, { useState, useReducer, useEffect } from "react";
import Layout from "../../Component/Layout/Layout";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { inputInitialValue, InputSchema } from "./QuerySchema";
import { axiosOther } from "../../http/axios/axios_new";
import { hotelTypeInitialValue, 
  hotelMealInitialValue, 
  leadSourceInitialValue } 
  from "../master/masterList/MasterValidation";
import axios from "axios";
import "jquery";
import "select2";

const Query = () => {
  const [queryInputs, setQueryInputs] = useState({
    QueryType: "",
  });
  const [hotelType, setHotelType] = useState([]);
  const [hotelMeal, setHotelMeal] = useState([]);
  const [leadList, setLeadList] = useState([]);

  
  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const  type  = await axiosOther.post("hoteltypelist", hotelTypeInitialValue);
        const  meal  = await axiosOther.post("hotelmealplanlist", hotelMealInitialValue);
        const  lead = await axiosOther.post("leadlist", leadSourceInitialValue);
        setHotelType(type.data.DataList);
        setHotelMeal(meal.data.DataList);
        setLeadList(lead.data.DataList);
        // console.log("API Data", getData);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, []);

  const [selectedQueryType, setSelectedQueryType] = useState("");

  const handleSubmit = async (postData) => {
    console.log("This is console for inputs.....", postData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addupdatequerymaster",
        postData
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  $(document).ready(function () {
    $(".select2-hidden-accessible").select2();
  });

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card shadow-none border">
            <Formik initialValues={inputInitialValue} onSubmit={handleSubmit}>
              <Form>
                <div
                  className="card-header header-elements-inline py-2"
                  style={{
                    padding: "10px",
                    backgroundColor: "rgb(245, 204, 129)",
                  }}
                >
                  <div className="col-xl-12 d-flex align-items-center justify-content-between">
                    <h5 className="card-title d-none d-sm-block">Query Form</h5>
                    <button className="btn btn-light" type="submit">
                      Save
                    </button>
                  </div>
                  <div></div>
                </div>
                <div className="card-body mt-4">
                  {/* Contact Person */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card shadow-none border">
                        <div className="card-header px-2 pt-2 pb-0 border-bottom">
                          <h6>Contact Information</h6>
                        </div>
                        <div className="card-body py-4">
                          <div className="row row-gap-4">
                            {queryInputs.QueryType == "3" && (
                              <div className="col-lg-2 p-0 mx-1">
                                <Field
                                  type="text"
                                  className="form-input"
                                  placeholder="Package Code"
                                ></Field>
                                <span className="text-danger">
                                  <ErrorMessage />
                                </span>
                                <Field
                                  type="text"
                                  className="form-input mt-1 mb-1"
                                  placeholder="Package Name"
                                ></Field>
                                <span className="text-danger">
                                  <ErrorMessage />
                                </span>
                              </div>
                            )}
                            {queryInputs.QueryType == "2" && (
                              <div className="col-lg-2 p-0 mx-1">
                                <Field
                                  type="text"
                                  placeholder="Fixed Departure Code"
                                  className="form-input"
                                ></Field>
                                <span className="text-danger">
                                  <ErrorMessage />
                                </span>
                              </div>
                            )}
                            {queryInputs.QueryType == "4" && (
                              <div className="col-lg-2 p-0 mx-1">
                                <Field
                                  type="text"
                                  placeholder="Query Id"
                                  className="form-input"
                                ></Field>
                                <span className="text-danger">
                                  <ErrorMessage />
                                </span>
                              </div>
                            )}
                            <div className="col-12 col-sm-6 col-lg-3">
                              <div className="row justify-content-between">
                                <div className="col-5 form-input d-flex justify-content-between align-items-center">
                                  <label htmlFor="" className="p-0 m-0">
                                    Agent
                                  </label>
                                  <Field
                                    type="radio"
                                    name="ClientType"
                                    value="1"
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                  <span className="text-danger">
                                    <ErrorMessage name="clientType" />
                                  </span>
                                </div>
                                <div className="col-5 form-input d-flex justify-content-between align-items-center">
                                  <label htmlFor="" className="p-0 m-0">
                                    B2B
                                  </label>
                                  <Field
                                    type="radio"
                                    name="ClientType"
                                    value="2"
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                  <span className="text-danger">
                                    <ErrorMessage name="clientType" />
                                  </span>
                                </div>
                                <div className="col-5 mt-lg-1 mt-0 form-input d-flex justify-content-between align-items-center">
                                  <label htmlFor="" className="p-0 m-0">
                                    B2C
                                  </label>
                                  <Field
                                    type="radio"
                                    name="ClientType"
                                    value="3"
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                  <span className="text-danger">
                                    <ErrorMessage name="clientType" />
                                  </span>
                                </div>
                                <div className="col-5 mt-lg-1 mt-0 form-input d-flex justify-content-between align-items-center">
                                  <label htmlFor="" className="p-0 m-0">
                                    Corporate
                                  </label>
                                  <Field
                                    type="radio"
                                    name="ClientType"
                                    value="4"
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                  <span className="text-danger">
                                    <ErrorMessage name="clientType" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-1 mt-sm-0">
                              <div className="row">
                                <div className="col-12 p-0 px-sm-1">
                                  <Field
                                    type="text"
                                    className="form-input"
                                    placeholder="Company, Email, Phone, Contact Person"
                                    name="demo1"
                                  ></Field>
                                  <span className="text-danger">
                                    <ErrorMessage name="demo1" />
                                  </span>
                                </div>
                                <div className="col-12 mt-1 p-0 px-sm-1">
                                  <div className="row m-0 rounded">
                                    <div className="col-4 p-0 pl-1">
                                      <Field
                                        type="text"
                                        placeholder="Name"
                                        className="form-control"
                                        name="demo2"
                                        readOnly
                                      ></Field>
                                      <span className="text-danger">
                                        <ErrorMessage name="demo2" />
                                      </span>
                                    </div>
                                    <div className="col-4">
                                      <Field
                                        type="text"
                                        placeholder="Contact"
                                        className="form-control"
                                        name="demo2"
                                        readOnly
                                      ></Field>
                                      <span className="text-danger">
                                        <ErrorMessage name="demo2" />
                                      </span>
                                    </div>
                                    <div className="col-4 p-0">
                                      <Field
                                        type="text"
                                        placeholder="Email"
                                        className="form-control"
                                        name="demo3"
                                        readOnly
                                      ></Field>
                                      <span className="text-danger">
                                        <ErrorMessage name="demo3" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 mt-lg-0 mt-1">
                              <div className="row">
                                <div className="col-12 p-0 px-lg-1">
                                  <Field
                                    type="text"
                                    className="form-input"
                                    placeholder="Lead Pax Name"
                                    name="LeadPax"
                                    // value={queryInputs.LeadPax}
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                  <span className="text-danger">
                                    <ErrorMessage name="LeadPax" />
                                  </span>
                                </div>
                                <div className="col-12 p-0 px-lg-1">
                                  <Field
                                    type="text"
                                    className="form-input mt-1"
                                    placeholder="Subject"
                                    name="Subject"
                                    // value={queryInputs.Subject}
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                  <span className="text-danger">
                                    <ErrorMessage name="Subject" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 mt-lg-0 mt-1">
                              <div className="row">
                                <div className="col-12 p-0 px-sm-1">
                                  <Field
                                    type="text"
                                    placeholder="text@example.com"
                                    className="form-input"
                                    name="AddEmail"
                                    // value={queryInputs.AddEmail}
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                  <span className="text-danger">
                                    <ErrorMessage name="AddEmail" />
                                  </span>
                                </div>
                                <div className="col-12 p-0 px-sm-1">
                                  <Field
                                    type="textArea"
                                    placeholder="Additional Information"
                                    className="form-input mt-1"
                                    name="AdditionalInfo"
                                    // value={queryInputs.AdditionalInfo}
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                  <span className="text-danger">
                                    <ErrorMessage name="AdditionalInfo" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*Starting Query Type and Assignment columsn */}
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      {/* Query Type */}
                      <div className="row my-2">
                        <div className="col-12">
                          <div
                            className="accordion"
                            id="accordionPanelsStayOpenExample"
                          >
                            <div className="accordion-item ">
                              <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingOne"
                              >
                                <button
                                  className="accordion-button collapsed py-2 px-3 font-size-14"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseOne"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseOne"
                                >
                                  Query Type
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingOne"
                              >
                                <div className="accordion-body py-3 px-2">
                                  <div className="row m-0">
                                    <span className="text-danger">
                                      <ErrorMessage name="QueryType" />
                                    </span>
                                    <div className="col-lg-3 col-md-6 form-input d-flex justify-content-between align-items-center">
                                      <label htmlFor="" className="m-0 p-0">
                                        Query
                                      </label>
                                      <input
                                        type="radio"
                                        name="QueryType"
                                        value="1"
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="mt-1 mt-md-0 col-lg-3 col-md-6 form-input d-flex justify-content-between align-items-center">
                                      <label htmlFor="" className="m-0 p-0">
                                        Fixed Departure
                                      </label>
                                      <input
                                        type="radio"
                                        name="QueryType"
                                        value="2"
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="mt-1 mt-lg-0 col-lg-3 col-md-6 form-input d-flex justify-content-between align-items-center">
                                      <label htmlFor="" className="m-0 p-0">
                                        Package
                                      </label>
                                      <input
                                        type="radio"
                                        name="QueryType"
                                        value="3"
                                        onKeyUp={handleChange}
                                      />
                                    </div>
                                    <div className="mt-1 mt-lg-0 col-lg-3 col-md-6 form-input d-flex justify-content-between align-items-center">
                                      <label htmlFor="" className="m-0 p-0">
                                        Duplicate Query
                                      </label>
                                      <input
                                        type="radio"
                                        name="QueryType"
                                        value="4"
                                        onKeyUp={handleChange}
                                      />
                                    </div>
                                    <div className="mt-1 col-lg-3 col-md-6 form-input d-flex justify-content-between align-items-center">
                                      <label htmlFor="" className="m-0 p-0">
                                        Multiple Services
                                      </label>
                                      <input
                                        type="radio"
                                        name="QueryType"
                                        value="5"
                                        onKeyUp={handleChange}
                                      />
                                    </div>
                                    <div className="mt-1 col-lg-3 col-md-6 form-input d-flex justify-content-between align-items-center">
                                      <label htmlFor="" className="m-0 p-0">
                                        Activity
                                      </label>
                                      <input
                                        type="radio"
                                        name="QueryType"
                                        value="6"
                                        onKeyUp={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* value add service selection row */}
                      <div className="row">
                        <div className="col-12">
                          <div className="row my-2">
                            <div className="col-12">
                              <div
                                className="accordion"
                                id="accordionPanelsStayOpenExample"
                              >
                                <div className="accordion-item ">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-headingTwo"
                                  >
                                    <button
                                      className="accordion-button collapsed py-2 px-3 font-size-14"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseTwo"
                                      aria-expanded="false"
                                      aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                      value add service selection
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingTwo"
                                  >
                                    <div className="accordion-body py-3 px-2">
                                      <div className="row justify-content-md-between mx-0">
                                        <div className="col-lg-2 col-md-3 col-4 p-0">
                                          <div className="d-flex align-items-end">
                                            <label htmlFor="" className="m-0">
                                              Flight
                                            </label>
                                            <i className="fa-solid fa-plane-departure mb-1 pl-md-3 pl-1"></i>
                                          </div>
                                          <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                            <label
                                              htmlFor=""
                                              className="p-0 m-0"
                                            >
                                              No
                                            </label>
                                            <div className="form-check form-switch">
                                              <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                name="ValueAddededServices.Flight"
                                                value="Yes"
                                                // onChange={handleValueAdded}
                                              ></Field>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-4 p-0">
                                          <div className="d-flex align-items-end">
                                            <label htmlFor="" className="m-0">
                                              Visa
                                            </label>
                                            <i className="fa-brands fa-cc-visa mb-1 pl-md-3 pl-1"></i>
                                          </div>
                                          <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                            <label
                                              htmlFor=""
                                              className="p-0 m-0"
                                            >
                                              No
                                            </label>
                                            <div className="form-check form-switch">
                                              <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                name="ValueAddededServices.Visa"
                                                value="Yes"
                                                // onChange={handleValueAdded}
                                              ></Field>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-4 p-0">
                                          <div className="d-flex align-items-end">
                                            <label htmlFor="" className="m-0">
                                              Insurance
                                            </label>
                                            <i className="fa-solid fa-shield-halved mb-1 pl-md-3 pl-1"></i>
                                          </div>
                                          <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                            <label
                                              htmlFor=""
                                              className="p-0 m-0"
                                            >
                                              No
                                            </label>
                                            <div className="form-check form-switch">
                                              <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                name="ValueAddededServices.Insurance"
                                                value="Yes"
                                                // onChange={handleValueAdded}
                                              ></Field>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-4 p-0">
                                          <div className="d-flex align-items-end">
                                            <label htmlFor="" className="m-0">
                                              Train
                                            </label>
                                            <i className="fa-solid fa-train mb-1 pl-md-3 pl-1"></i>
                                          </div>
                                          <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                            <label
                                              htmlFor=""
                                              className="pValueAddedServices-0 m-0"
                                            >
                                              No
                                            </label>
                                            <div className="form-check form-switch">
                                              <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                name="ValueAddededServices.Train"
                                                value="Yes"
                                                // onChange={handleValueAdded}
                                              ></Field>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-4 p-0">
                                          <div className="d-flex align-items-end">
                                            <label htmlFor="" className="m-0">
                                              Transfer
                                            </label>
                                            <i className="fa-solid fa-car mb-1 pl-md-3 pl-1"></i>
                                          </div>
                                          <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                            <label
                                              htmlFor=""
                                              className="p-0 m-0"
                                            >
                                              No
                                            </label>
                                            <div className="form-check form-switch">
                                              <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                name="ValueAddededServices.Transfer"
                                                value="Yes"
                                                // onChange={handleValueAdded}
                                              ></Field>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Travel Info */}
                      <div className="row">
                        <div className="col-12">
                          <div className="row my-2">
                            <div className="col-12">
                              <div
                                className="accordion"
                                id="accordionPanelsStayOpenExample"
                              >
                                <div className="accordion-item ">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-headingThree"
                                  >
                                    <button
                                      className="accordion-button collapsed py-2 px-3 font-size-14"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseThree"
                                      aria-expanded="false"
                                      aria-controls="panelsStayOpen-collapseThree"
                                    >
                                      Travel Info
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingThree"
                                  >
                                    <div className="accordion-body py-3 px-2">
                                      <div className="row justify-content-between mt-2">
                                        <span className="text-danger">
                                          <ErrorMessage name="TravelInfo" />
                                        </span>
                                        <div className="col-lg-5 col-sm-6 col-5">
                                          <label htmlFor="" className="m-0">
                                            Travel Type
                                          </label>
                                          <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                            <label
                                              htmlFor=""
                                              className="p-0 m-0"
                                            >
                                              International
                                            </label>
                                            <Field
                                              type="radio"
                                              name="TravelInfo"
                                              value="1"
                                              // onChange={handleQueryInputs}
                                            ></Field>
                                          </div>
                                        </div>
                                        <div className="col-lg-5 col-sm-6 col-5 mt-3">
                                          <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                            <label
                                              htmlFor=""
                                              className="p-0 m-0"
                                            >
                                              Domestic
                                            </label>
                                            <Field
                                              type="radio"
                                              name="TravelInfo"
                                              value="2"
                                              // onChange={handleQueryInputs}
                                            ></Field>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row justify-content-between mt-2">
                                        <span className="text-danger">
                                          <ErrorMessage name="PaxType" />
                                        </span>
                                        <div className="col-lg-5 col-sm-6 col-5">
                                          <label htmlFor="" className="m-0">
                                            Pax Type
                                          </label>
                                          <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                            <label
                                              htmlFor=""
                                              className="p-0 m-0"
                                            >
                                              GIT
                                            </label>
                                            <Field
                                              type="radio"
                                              name="PaxType"
                                              value="1"
                                              // onChange={handleQueryInputs}
                                            ></Field>
                                          </div>
                                        </div>
                                        <div className="col-lg-5 col-sm-6 col-5 mt-3">
                                          <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                            <label
                                              htmlFor=""
                                              className="p-0 m-0"
                                            >
                                              FIT
                                            </label>
                                            <Field
                                              type="radio"
                                              name="PaxType"
                                              value="2"
                                              // onChange={handleQueryInputs}
                                            ></Field>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Information it will show only on multiple services check */}
                      {queryInputs.QueryType == "5" && (
                        <div className="row">
                          <div className="col-12">
                            <div className="row my-2">
                              <div className="col-12">
                                <div
                                  className="accordion"
                                  id="accordionPanelsStayOpenExample"
                                >
                                  <div className="accordion-item ">
                                    <h2
                                      className="accordion-header"
                                      id="panelsStayOpen-headingThree"
                                    >
                                      <button
                                        className="accordion-button collapsed py-2 px-3 font-size-14"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree"
                                      >
                                        Travel Info
                                      </button>
                                    </h2>
                                    <div
                                      id="panelsStayOpen-collapseThree"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="panelsStayOpen-headingThree"
                                    >
                                      <div className="accordion-body py-3 px-2">
                                        <div className="row align-items-center mt-2">
                                          <div className="col-lg-6 col-md-12 justify-content-between d-flex align-items-center">
                                            <p className="m-0">
                                              Pax Information
                                            </p>
                                            <p className="m-0 bg-info p-1">
                                              Total Pax:
                                            </p>
                                            <Field
                                              type="text"
                                              className="form-input w-25"
                                            ></Field>
                                          </div>
                                        </div>
                                        <div className="row  mt-1">
                                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                            <div className="d-flex justify-content-between align-items-end">
                                              <label className="m-0">
                                                Adult
                                              </label>
                                              <i className="fa-solid fa-person mb-1"></i>
                                            </div>
                                            <Field
                                              type="text"
                                              className="form-input"
                                              name="Adult"
                                              // value={PaxInfo.Adult}
                                              // onChange={handlePaxInfo}
                                            ></Field>
                                          </div>
                                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                            <div className="d-flex justify-content-between align-items-end">
                                              <label className="m-0">
                                                Child
                                              </label>
                                              <i className="fa-solid fa-child-reaching mb-1"></i>
                                            </div>
                                            <Field
                                              type="text"
                                              className="form-input"
                                              name="Child"
                                              // value={PaxInfo.Child}
                                              // onChange={handlePaxInfo}
                                            ></Field>
                                          </div>
                                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                            <div className="d-flex justify-content-between align-items-end">
                                              <label className="m-0">
                                                Infant
                                              </label>
                                              <i className="fa-solid fa-baby-carriage mb-1"></i>
                                            </div>
                                            <Field
                                              type="text"
                                              className="form-input"
                                              name="Infant"
                                              // value={PaxInfo.Infant}
                                              // onChange={handlePaxInfo}
                                            ></Field>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Travel Date */}
                      <div className="row">
                        <div className="col-12">
                          <div className="row my-2">
                            <div className="col-12">
                              <div
                                className="accordion"
                                id="accordionPanelsStayOpenExample"
                              >
                                <div className="accordion-item ">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-headingFour"
                                  >
                                    <button
                                      className="accordion-button collapsed py-2 px-3 font-size-14"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseFour"
                                      aria-expanded="false"
                                      aria-controls="panelsStayOpen-collapseFour"
                                    >
                                      Travel Date
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingFour"
                                  >
                                    <div className="accordion-body py-3 px-2">
                                      <div className="row mt-2">
                                        <div className="col-md-6 col-12">
                                          <Field
                                            component={"select"}
                                            className="form-input"
                                            name="TravelDate.Type"
                                            // onChange={handleTravelDate}
                                          >
                                            <option value="1">Date Wise</option>
                                            <option value="2">Day Wise</option>
                                          </Field>
                                          <span className="text-danger">
                                            <ErrorMessage name="TravelDate.Type" />
                                          </span>
                                        </div>
                                      </div>
                                      <div className="row mt-1">
                                        <div className="col-lg-3 col-md-6 col-12">
                                          <label>From Date</label>
                                          <Field
                                            type="date"
                                            className="form-input"
                                            name="TravelDate.FromDate"
                                            // value={TravelDate.FromDate}
                                            // onChange={handleTravelDate}
                                          ></Field>
                                          <span className="text-danger">
                                            <ErrorMessage name="TravelDate.FromDate" />
                                          </span>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                          <label>To Date</label>
                                          <Field
                                            type="date"
                                            className="form-input"
                                            name="TravelDate.ToDate"
                                            // value={TravelDate.ToDate}
                                            // onChange={handleTravelDate}
                                          ></Field>
                                          <span className="text-danger">
                                            <ErrorMessage name="TravelDate.ToDate" />
                                          </span>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                          <label>Total Nights</label>
                                          <div className="d-flex ">
                                            <Field
                                              type="text"
                                              className="form-input"
                                              name="TravelDate.TotalDays"
                                              // value={TravelDate.TotalDays}
                                              // onChange={handleTravelDate}
                                            ></Field>
                                            <button className="btn btn-info">
                                              Save
                                            </button>
                                          </div>
                                          <span className="text-danger">
                                            <ErrorMessage name="TravelDate.TotalDays" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quotation/Itinerary Information */}
                      <div className="row">
                        <div className="col-12">
                          <div className="row my-2">
                            <div className="col-12">
                              <div
                                className="accordion"
                                id="accordionPanelsStayOpenExample"
                              >
                                <div className="accordion-item ">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-headingFive"
                                  >
                                    <button
                                      className="accordion-button collapsed py-2 px-3 font-size-14"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseFive"
                                      aria-expanded="false"
                                      aria-controls="panelsStayOpen-collapseFive"
                                    >
                                      Quotation/Itinerary Information
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseFive"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingFive"
                                  >
                                    <div className="accordion-body py-3 px-2">
                                      <div className="row align-items-center mt-2">
                                        <div className="col-lg-6 col-md-12 justify-content-between d-flex align-items-center">
                                          <p className="m-0">Pax Information</p>
                                          <p className="m-0 bg-info p-1">
                                            Total Pax:
                                          </p>
                                          <Field
                                            type="text"
                                            className="form-input w-25"
                                          ></Field>
                                        </div>
                                      </div>
                                      <div className="row  mt-1">
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                          <div className="d-flex justify-content-between align-items-end">
                                            <label className="m-0">Adult</label>
                                            <i className="fa-solid fa-person mb-1"></i>
                                          </div>
                                          <Field
                                            type="text"
                                            className="form-input"
                                            name="PaxInfo.Adult"
                                            // value={PaxInfo.Adult}
                                            // onChange={handlePaxInfo}
                                          ></Field>
                                          <span className="text-danger err-fs">
                                            <ErrorMessage name="PaxInfo.Adult" />
                                          </span>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                          <div className="d-flex justify-content-between align-items-end">
                                            <label className="m-0">Child</label>
                                            <i className="fa-solid fa-child-reaching mb-1"></i>
                                          </div>
                                          <Field
                                            type="text"
                                            className="form-input "
                                            name="PaxInfo.Child"
                                            // value={PaxInfo.Child}
                                            // onChange={handlePaxInfo}
                                          ></Field>
                                          <span className="text-danger err-fs">
                                            <ErrorMessage name="PaxInfo.Child" />
                                          </span>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                          <div className="d-flex justify-content-between align-items-end">
                                            <label className="m-0">
                                              Infant
                                            </label>
                                            <i className="fa-solid fa-baby-carriage mb-1"></i>
                                          </div>
                                          <Field
                                            type="text"
                                            className="form-input"
                                            name="PaxInfo.Infant"
                                            // value={PaxInfo.Infant}
                                            // onChange={handlePaxInfo}
                                          ></Field>
                                          <span className="text-danger err-fs">
                                            <ErrorMessage name="PaxInfo.Infant" />
                                          </span>
                                        </div>
                                      </div>
                                      {queryInputs.QueryType !== "4" && (
                                        <div className="row align-items-center mt-4">
                                          <div className="col-lg-7 col-md-12  justify-content-between d-flex align-items-center">
                                            <p className="m-0">
                                              Room Information
                                            </p>
                                            <p className="m-0 bg-info p-1">
                                              Total Rooms:
                                            </p>
                                            <Field
                                              type="text"
                                              className="form-input w-25"
                                            ></Field>
                                          </div>
                                        </div>
                                      )}
                                      {queryInputs.QueryType !== "4" && (
                                        <div className="row  mt-1">
                                          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                            <label>Single</label>
                                            <Field
                                              type="text"
                                              className="form-input"
                                              name="RoomInfo.Single"
                                              // value={RoomInfo.Single}
                                              // onChange={handleRoomInfo}
                                            ></Field>
                                            <span className="text-danger err-fs">
                                              <ErrorMessage name="RoomInfo.Single" />
                                            </span>
                                          </div>
                                          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                            <label>Double</label>
                                            <Field
                                              type="text"
                                              className="form-input"
                                              name="RoomInfo.Double"
                                              // value={RoomInfo.Double}
                                              // onChange={handleRoomInfo}
                                            ></Field>
                                            <span className="text-danger err-fs">
                                              <ErrorMessage name="RoomInfo.Double" />
                                            </span>
                                          </div>
                                          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                            <label>Twin</label>
                                            <Field
                                              type="text"
                                              className="form-input"
                                              name="RoomInfo.Twin"
                                              // value={RoomInfo.Twin}
                                              // onChange={handleRoomInfo}
                                            ></Field>
                                            <span className="text-danger err-fs">
                                              <ErrorMessage name="RoomInfo.Twin" />
                                            </span>
                                          </div>
                                          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                            <label>Triple</label>
                                            <Field
                                              type="text"
                                              className="form-input"
                                              name="RoomInfo.Triple"
                                              // value={RoomInfo.Triple}
                                              // onChange={handleRoomInfo}
                                            ></Field>
                                            <span className="text-danger err-fs">
                                              <ErrorMessage name="RoomInfo.Triple" />
                                            </span>
                                          </div>
                                          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                            <label>ExtraBed(A)</label>
                                            <Field
                                              type="text"
                                              className="form-input"
                                              name="RoomInfo.ExtraBed"
                                              // value={RoomInfo.ExtraBed}
                                              // onChange={handleRoomInfo}
                                            ></Field>
                                            <span className="text-danger err-fs">
                                              <ErrorMessage name="RoomInfo.ExtraBed" />
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*Ending Query Type */}
                    </div>

                    <div className="col-sm-6 col-12">
                      {/* Assignment Column */}
                      <div className="row">
                        <div className="col-12">
                          <div className="row my-2">
                            <div className="col-12">
                              <div
                                className="accordion"
                                id="accordionPanelsStayOpenExample"
                              >
                                <div className="accordion-item ">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-headingSix"
                                  >
                                    <button
                                      className="accordion-button collapsed py-2 px-3 font-size-14"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseSix"
                                      aria-expanded="false"
                                      aria-controls="panelsStayOpen-collapseSix"
                                    >
                                      Assignment
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseSix"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingSix"
                                  >
                                    <div className="accordion-body py-3 px-2">
                                      <div className="row">
                                        <div className="col-6">
                                          <div className="form-group">
                                            <label>Seles Person</label>
                                            <Field
                                              name="salesPerson"
                                              component={"select"}
                                              data-placeholder="Seles Person"
                                              className="select ui-wizard-content select2-hidden-accessible"
                                              tabIndex="-1"
                                              aria-hidden="true"
                                            >
                                              <optgroup label="Europe">
                                                <option value="8">
                                                  Croatia
                                                </option>
                                                <option value="9">
                                                  Hungary
                                                </option>
                                                <option value="10">
                                                  Ukraine
                                                </option>
                                                <option value="11">
                                                  Greece
                                                </option>
                                                <option value="12">
                                                  Norway
                                                </option>
                                                <option value="13">
                                                  Germany
                                                </option>
                                                <option value="14">
                                                  United Kingdom
                                                </option>
                                              </optgroup>
                                            </Field>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-6 col-12">
                                          <label htmlFor="">
                                            Operation Person
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-input"
                                            name="oerationPerson"
                                            placeholder="Operation Person"
                                          ></Field>
                                        </div>
                                        <div className="col-md-6 col-12">
                                          <label htmlFor="">
                                            Contracting Person
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-input"
                                            name="contractPerson"
                                            placeholder="Contract Person"
                                          ></Field>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Priority Preference */}
                      <div className="row">
                        <div className="col-12">
                          <div className="row my-2">
                            <div className="col-12">
                              <div
                                className="accordion"
                                id="accordionPanelsStayOpenExample"
                              >
                                <div className="accordion-item ">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-headingSeven"
                                  >
                                    <button
                                      className="accordion-button collapsed py-2 px-3 font-size-14"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseSeven"
                                      aria-expanded="false"
                                      aria-controls="panelsStayOpen-collapseSeven"
                                    >
                                      Priority Preference
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseSeven"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingSeven"
                                  >
                                    <div className="accordion-body py-3 px-2">
                                      <span className="text-danger m-0 p-0">
                                        <ErrorMessage name="Priority" />
                                      </span>
                                      <div className="mt-2">Priority</div>
                                      <div className="row justify-content-between m-0">
                                        <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            Normal
                                          </label>
                                          <Field
                                            type="radio"
                                            name="Priority"
                                            value="1"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                        <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            Medium
                                          </label>
                                          <Field
                                            type="radio"
                                            name="Priority"
                                            value="2"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                        <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            High
                                          </label>
                                          <Field
                                            type="radio"
                                            name="Priority"
                                            value="3"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                      </div>
                                      <hr className="my-2 p-0" />
                                      <span className="text-danger m-0 p-0">
                                        <ErrorMessage name="TAT" />
                                      </span>
                                      <div>TAT</div>
                                      <div className="row justify-content-between m-0">
                                        <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            24 Hours
                                          </label>
                                          <Field
                                            type="radio"
                                            name="TAT"
                                            value="24"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                        <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            28 Hours
                                          </label>
                                          <Field
                                            type="radio"
                                            name="TAT"
                                            value="28"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                        <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            72 Hours
                                          </label>
                                          <Field
                                            type="radio"
                                            name="TAT"
                                            value="72"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                      </div>
                                      <hr className="my-2" />
                                      <span className="text-danger m-0 p-0">
                                        <ErrorMessage name="TourType" />
                                      </span>
                                      <div>Tour Type</div>
                                      <div className="row justify-content-between m-0">
                                        <div className="col-lg-5 col-6 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            Adventure Tour
                                          </label>
                                          <Field
                                            type="radio"
                                            name="TourType"
                                            value="1"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                        <div className="col-lg-5 col-6 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            Adventrure Tour
                                          </label>
                                          <Field
                                            type="radio"
                                            name="TourType"
                                            value="2"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                        <div className="col-lg-5 col-6 mt-2 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            Collage Tour
                                          </label>
                                          <Field
                                            type="radio"
                                            name="TourType"
                                            value="3"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                        <div className="col-lg-5 col-6 mt-2 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            Collage Tour
                                          </label>
                                          <Field
                                            type="radio"
                                            name="TourType"
                                            value="4"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                        <div className="col-lg-5 col-6 mt-2 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            Family Tour
                                          </label>
                                          <Field
                                            type="radio"
                                            name="TourType"
                                            value="5"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                        <div className="col-lg-5 col-6 mt-2 form-input d-flex justify-content-between align-items-center">
                                          <label htmlFor="" className="m-0 p-0">
                                            Wildlife Tour
                                          </label>
                                          <Field
                                            type="radio"
                                            name="TourType"
                                            value="6"
                                            // onClick={handleQueryInputs}
                                          ></Field>
                                        </div>
                                      </div>
                                      <hr className="my-2" />
                                      <div className="row justify-content-between m-0">
                                        <div className="col-lg-5 col-6">
                                          <span className="text-danger m-0 p-0">
                                            <ErrorMessage name="LeadSource" />
                                          </span>
                                          <label>Lead Source</label>
                                          <Field
                                            component={"select"}
                                            className="form-input"
                                            name="LeadSource"
                                            // onChange={handleQueryInputs}
                                          >
                                            {
                                              leadList.map((value)=>{
                                                return(
                                                  <option value={value.Id}>{value.Name}</option>
                                                )
                                              })
                                            }
                                          
                                          </Field>
                                        </div>
                                        <div className="col-lg-5 col-6">
                                          <span className="text-danger m-0 p-0">
                                            <ErrorMessage name="LeadRefrenced" />
                                          </span>
                                          <label>Lead Reference</label>
                                          <Field
                                            type="text"
                                            className="form-input"
                                            name="LeadRefrenced"
                                            // onChange={handleQueryInputs}
                                          ></Field>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hotel Preference */}
                      <div className="row">
                        <div className="col-12">
                          <div className="card shadow-none border">
                            <div className="card-header px-2 pt-2 pb-0 border-bottom">
                              <h6>Hotel Preference</h6>
                            </div>
                            <div className="card-body">
                              <div className="mt-2">Hotel Category</div>
                              <div className="row justify-content-between">
                                <div className="col-md-3 col-6 form-input d-flex justify-content-between align-items-center">
                                  <label className="m-0 p-0">All</label>
                                  <Field
                                    type="radio"
                                    name="HotelPrefrence"
                                    value="1"
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                </div>
                                <div className="col-md-3 col-6 form-input d-flex justify-content-between align-items-center">
                                  <label className="m-0 p-0">3 Star</label>
                                  <Field
                                    type="radio"
                                    name="HotelPrefrence"
                                    value="2"
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                </div>
                                <div className="col-md-3 col-6 form-input d-flex justify-content-between align-items-center">
                                  <label className="m-0 p-0">4 Star</label>
                                  <Field
                                    type="radio"
                                    name="HotelPrefrence"
                                    value="3"
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                </div>
                                <div className="col-md-3 col-6 form-input d-flex justify-content-between align-items-center">
                                  <label className="m-0 p-0">5 Star</label>
                                  <Field
                                    type="radio"
                                    name="HotelPrefrence"
                                    value="4"
                                    // onChange={handleQueryInputs}
                                  ></Field>
                                </div>
                              </div>
                              <span className="text-danger m-0 p-0">
                                <ErrorMessage name="HotelPrefrence" />
                              </span>
                              <hr className="my-2" />
                              <div className="row justify-content-between">
                                <div className="col-lg-5 col-sm-6">
                                  <label>Hotel Type</label>
                                  <Field
                                    component={"select"}
                                    className="form-input"
                                    name="HotelType"
                                  >
                                    {
                                      hotelType.map((value)=>{
                                        return(
                                          <option value={value.Id}>{value.Name}</option>
                                        )
                                      })
                                    }
                                  </Field>
                                  <span className="text-danger m-0 p-0">
                                    <ErrorMessage name="HotelType" />
                                  </span>
                                </div>
                                <div className="col-lg-5 col-sm-6">
                                  <label>Meal Plan</label>
                                  <Field
                                    component="select"
                                    className="form-input"
                                    name="MealPlan"
                                    // onChange={handleQueryInputs}
                                  >
                                    {
                                      hotelMeal.map((value)=>{
                                        return(
                                          <option value={value.Id}>{value.Name}</option>
                                        )
                                      })
                                    }
                                  </Field>
                                  <span className="text-danger m-0 p-0">
                                    <ErrorMessage name="MealPlan" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Query;
