import React, { useState, useReducer, useEffect} from "react";
import Layout from "../../Component/Layout/Layout";
import { Formik } from "formik";
import * as yup from 'yup';

const Query = () => {
  
  const initialState = {
    queryType: false,
    assignment: false,
    valueAdd: false,
    travelInfo: false,
    travelDate: false,
    priority: false,
    quotation: false,
  };
  

  const reducer = (state, action) => {
    switch (action.type) {
      case "QUERY_TYPE":
        return { ...state, queryType: !state.queryType };
      case "ASSIGNMENT":
        return { ...state, assignment: !state.assignment };
      case "VALUE_ADD":
        return { ...state, valueAdd: !state.valueAdd };
      case "TRAVEL_INFO":
        return { ...state, travelInfo: !state.travelInfo };
      case "TRAVEL_DATE":
        return { ...state, travelDate: !state.travelDate };
      case "PRIORITY":
        return { ...state, priority: !state.priority };
      case "QUOTATION":
        return { ...state, quotation: !state.quotation };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [queryInputs, setQueryInputs] = useState({
    id: "",
    QueryId: "",
    FDCode: "",
    PackageCode: "",
    PackageName: "",
    ClientType: "",
    AgentId: "",
    LeadPax: "",
    Subject: "",
    AddEmail: "",
    AdditionalInfo: "",
    QueryType: "",
    TravelInfo: "",
    PaxType: "",
    Priority: "",
    TAT: "",
    TourType: "",
    LeadSource: "",
    LeadRefrenced: "",
    HotelPrefrence: "",
    HotelType: "",
    MealPlan: "",
    AddedBy: "",
    UpdatedBy: "",
  });

  const [ValueAddedServices, setValueAddededServices] = useState({
    Flight: "No",
    Visa: "No",
    Insurance: "No",
    Train: "No",
    Transfer: "No",
  });

  const [TravelDate, setTravelDate] = useState({
    Type: "",
    FromDate: "",
    ToDate: "",
    TotalDays: "",
    SeasonType: "",
    SeasonYear: "",
  });

  const [PaxInfo, setPaxInfo] = useState({
    Adult: "",
    Child: "",
    Infant: "",
  });

  const [RoomInfo, setRoomInfo] = useState({
    Single: "",
    Double: "",
    Twin: "",
    Triple: "",
    ExtraBed: "",
  });

  const handleQueryInputs = (e) => {
    setQueryInputs({ ...queryInputs, [e.target.name]: e.target.value });
  };

  const handleValueAdded = (e) => {
    setValueAddededServices({
      ...ValueAddedServices,
      [e.target.name]: e.target.value,
    });
  };

  const handleTravelDate = (e) => {
    setTravelDate({ ...TravelDate, [e.target.name]: e.target.value });
  };

  const handlePaxInfo = (e) => {
    setPaxInfo({ ...PaxInfo, [e.target.name]: e.target.value });
  };

  const handleRoomInfo = (e) => {
    setRoomInfo({ ...RoomInfo, [e.target.name]: e.target.value });
  };

  const mergeAllData = () => {
    setQueryInputs({
      ...queryInputs,
      ValueAddedServices,
      TravelDate,
      PaxInfo,
      RoomInfo,
    });

    localStorage.setItem("Query", JSON.stringify(queryInputs));
  };
  let data = localStorage.getItem("Query");
  let result = JSON.parse(data);
  console.log("Data From LocalStorage.......", result);

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card">
            <div
              className="card-header header-elements-inline py-2"
              style={{ padding: "10px", backgroundColor: "rgb(245, 204, 129)" }}
            >
              <div className="col-xl-12 d-flex align-items-center justify-content-between">
                <h5 className="card-title d-none d-sm-block">Query Form</h5>
                <button className="btn btn-light" onClick={mergeAllData}>
                  Save
                </button>
              </div>
              <div></div>
            </div>
            <div className="card-body mt-4">

              {/* Contact Person */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header px-2 pt-2 pb-0 border">
                      <h6>Contact Information</h6>
                    </div>
                    <div className="card-body py-4">
                      <div className="row row-gap-4">
                        {queryInputs.QueryType == "3" && (
                          <div className="col-lg-2 p-0 mx-1">
                            <input
                              type="text"
                              className="form-input"
                              placeholder="Package Code"
                            />
                            <input
                              type="text"
                              className="form-input mt-1 mb-1"
                              placeholder="Package Name"
                            />
                          </div>
                        )}
                        {queryInputs.QueryType == "2" && (
                          <div className="col-lg-2 p-0 mx-1">
                            <input
                              type="text"
                              placeholder="Fixed Departure Code"
                              className="form-input"
                            />
                          </div>
                        )}
                        {queryInputs.QueryType == "4" && (
                          <div className="col-lg-2 p-0 mx-1">
                            <input
                              type="text"
                              placeholder="Query Id"
                              className="form-input"
                            />
                          </div>
                        )}
                        <div className="col-12 col-sm-6 col-lg-3">
                          <div className="row justify-content-between">
                            <div className="col-5 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="p-0 m-0">
                                Agent
                              </label>
                              <input
                                type="radio"
                                name="ClientType"
                                value="1"
                                onChange={handleQueryInputs}
                              />
                            </div>
                            <div className="col-5 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="p-0 m-0">
                                B2B
                              </label>
                              <input
                                type="radio"
                                name="ClientType"
                                value="2"
                                onChange={handleQueryInputs}
                              />
                            </div>
                            <div className="col-5 mt-lg-1 mt-0 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="p-0 m-0">
                                B2C
                              </label>
                              <input
                                type="radio"
                                name="ClientType"
                                value="3"
                                onChange={handleQueryInputs}
                              />
                            </div>
                            <div className="col-5 mt-lg-1 mt-0 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="p-0 m-0">
                                Corporate
                              </label>
                              <input
                                type="radio"
                                name="ClientType"
                                value="4"
                                onChange={handleQueryInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 mt-1 mt-sm-0">
                          <div className="row">
                            <div className="col-12 p-0 px-sm-1">
                              <input
                                type="text"
                                className="form-input"
                                placeholder="Company, Email, Phone, Contact Person"
                                name=""
                              />
                            </div>
                            <div className="col-12 mt-1 p-0 px-sm-1">
                              <div className="row m-0 rounded">
                                <div className="col-4 p-0 pl-1">
                                  <input
                                    type="text"
                                    placeholder="Name"
                                    className="form-control"
                                    readOnly
                                  />
                                </div>
                                <div className="col-4">
                                  <input
                                    type="text"
                                    placeholder="Contact"
                                    className="form-control"
                                    readOnly
                                  />
                                </div>
                                <div className="col-4 p-0">
                                  <input
                                    type="text"
                                    placeholder="Email"
                                    className="form-control"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-2 mt-lg-0 mt-1">
                          <div className="row">
                            <div className="col-12 p-0 px-lg-1">
                              <input
                                type="text"
                                className="form-input"
                                placeholder="Lead Pax Name"
                                name="LeadPax"
                                value={queryInputs.LeadPax}
                                onChange={handleQueryInputs}
                              />
                            </div>
                            <div className="col-12 p-0 px-lg-1">
                              <input
                                type="text"
                                className="form-input mt-1"
                                placeholder="Subject"
                                name="Subject"
                                value={queryInputs.Subject}
                                onChange={handleQueryInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mt-lg-0 mt-1">
                          <div className="row">
                            <div className="col-12 p-0 px-sm-1">
                              <input
                                type="text"
                                placeholder="text@example.com"
                                className="form-input"
                                name="AddEmail"
                                value={queryInputs.AddEmail}
                                onChange={handleQueryInputs}
                              />
                            </div>
                            <div className="col-12 p-0 px-sm-1">
                              <input
                                type="textArea"
                                placeholder="Additional Information"
                                className="form-input mt-1"
                                name="AdditionalInfo"
                                value={queryInputs.AdditionalInfo}
                                onChange={handleQueryInputs}
                              />
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
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div
                          className="card-header point-cursor d-flex justify-content-between align-items-center px-2 pt-2 pb-0 border"
                          onClick={() => dispatch({ type: "QUERY_TYPE" })}
                        >
                          <h6>Query Type</h6>
                          {state.queryType ? (
                            <i
                              className="fa-solid fa-caret-up up-arrow"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "QUERY_TYPE" });
                              }}
                            ></i>
                          ) : (
                            <i
                              className="fa-solid fa-caret-down up-arrow"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "QUERY_TYPE" });
                              }}
                            ></i>
                          )}
                        </div>
                        {state.queryType && (
                          <div className="card-body py-4">
                            <div className="row">
                              <div className="col-lg-3 col-md-6 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  Query
                                </label>
                                <input
                                  type="radio"
                                  name="QueryType"
                                  value="1"
                                  // checked={selectedOption == "1"}
                                  onChange={handleQueryInputs}
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
                                  // checked={selectedOption == "2"}
                                  onChange={handleQueryInputs}
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
                                  // checked={selectedOption == "3"}
                                  onChange={handleQueryInputs}
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
                                  // checked={selectedOption == "4"}
                                  onChange={handleQueryInputs}
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
                                  // checked={selectedOption == "5"}
                                  onChange={handleQueryInputs}
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
                                  // checked={selectedOption == "6"}
                                  onChange={handleQueryInputs}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* value add service selection row */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div
                          className="card-header point-cursor px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center"
                          onClick={() => dispatch({ type: "VALUE_ADD" })}
                        >
                          <h6>Value Added Service Selection</h6>
                          {state.valueAdd ? (
                            <i
                              className="fa-solid fa-caret-up up-arrow"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "VALUE_ADD" });
                              }}
                            ></i>
                          ) : (
                            <i
                              className="fa-solid fa-caret-down up-arrow"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "VALUE_ADD" });
                              }}
                            ></i>
                          )}
                        </div>
                        {state.valueAdd && (
                          <div className="card-body">
                            <div className="row justify-content-md-between mt-2">
                              <div className="col-lg-2 col-md-3 col-4 p-0">
                                <div className="d-flex align-items-end">
                                  <label htmlFor="" className="m-0">
                                    Flight
                                  </label>
                                  <i className="fa-solid fa-plane-departure mb-1 pl-md-3 pl-1"></i>
                                </div>
                                <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                  <label htmlFor="" className="p-0 m-0">
                                    No
                                  </label>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="Flight"
                                      value="Yes"
                                      onChange={handleValueAdded}
                                    />
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
                                  <label htmlFor="" className="p-0 m-0">
                                    No
                                  </label>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="visa"
                                      value="Yes"
                                      onChange={handleValueAdded}
                                    />
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
                                  <label htmlFor="" className="p-0 m-0">
                                    No
                                  </label>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="insurance"
                                      value="Yes"
                                      onChange={handleValueAdded}
                                    />
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
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="Train"
                                      value="Yes"
                                      onChange={handleValueAdded}
                                    />
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
                                  <label htmlFor="" className="p-0 m-0">
                                    No
                                  </label>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="Transfer"
                                      value="Yes"
                                      onChange={handleValueAdded}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Travel Info */}
                  {queryInputs.QueryType !== "5" && (
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div
                            className="card-header point-cursor px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center"
                            onClick={() => dispatch({ type: "TRAVEL_INFO" })}
                          >
                            <h6>Travel Info | Domestic | Guest Type - FIT</h6>
                            {state.travelInfo ? (
                              <i
                                className="fa-solid fa-caret-up up-arrow"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  dispatch({ type: "TRAVEL_INFO" });
                                }}
                              ></i>
                            ) : (
                              <i
                                className="fa-solid fa-caret-down up-arrow"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  dispatch({ type: "TRAVEL_INFO" });
                                }}
                              ></i>
                            )}
                          </div>
                          {state.travelInfo && (
                            <div className="card-body">
                              <div className="row justify-content-between mt-2">
                                <div className="col-lg-5 col-sm-6 col-5">
                                  <label htmlFor="" className="m-0">
                                    Travel Type
                                  </label>
                                  <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                    <label htmlFor="" className="p-0 m-0">
                                      International
                                    </label>
                                    <input
                                      type="radio"
                                      name="TravelInfo"
                                      value="1"
                                      onChange={handleQueryInputs}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-5 col-sm-6 col-5 mt-3">
                                  <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                    <label htmlFor="" className="p-0 m-0">
                                      Domestic
                                    </label>
                                    <input
                                      type="radio"
                                      name="TravelInfo"
                                      value="2"
                                      onChange={handleQueryInputs}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row justify-content-between mt-2">
                                <div className="col-lg-5 col-sm-6 col-5">
                                  <label htmlFor="" className="m-0">
                                    Pax Type
                                  </label>
                                  <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                    <label htmlFor="" className="p-0 m-0">
                                      GIT
                                    </label>
                                    <input
                                      type="radio"
                                      name="PaxType"
                                      value="1"
                                      onChange={handleQueryInputs}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-5 col-sm-6 col-5 mt-3">
                                  <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                    <label htmlFor="" className="p-0 m-0">
                                      FIT
                                    </label>
                                    <input
                                      type="radio"
                                      name="PaxType"
                                      value="2"
                                      onChange={handleQueryInputs}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Information it will show only on multiple services check */}
                  {queryInputs.QueryType == "5" && (
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header point-cursor px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center">
                            <h6>Travel Information</h6>
                          </div>

                          <div className="card-body">
                            <div className="row align-items-center mt-2">
                              <div className="col-lg-6 col-md-12 justify-content-between d-flex align-items-center">
                                <p className="m-0">Pax Information</p>
                                <p className="m-0 bg-info p-1">Total Pax:</p>
                                <input
                                  type="text"
                                  className="form-input w-25"
                                />
                              </div>
                            </div>
                            <div className="row  mt-1">
                              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="d-flex justify-content-between align-items-end">
                                  <label className="m-0">Adult</label>
                                  <i className="fa-solid fa-person mb-1"></i>
                                </div>
                                <input
                                  type="text"
                                  className="form-input"
                                  name="Adult"
                                  value={PaxInfo.Adult}
                                  onChange={handlePaxInfo}
                                />
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="d-flex justify-content-between align-items-end">
                                  <label className="m-0">Child</label>
                                  <i className="fa-solid fa-child-reaching mb-1"></i>
                                </div>
                                <input
                                  type="text"
                                  className="form-input"
                                  name="Child"
                                  value={PaxInfo.Child}
                                  onChange={handlePaxInfo}
                                />
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="d-flex justify-content-between align-items-end">
                                  <label className="m-0">Infant</label>
                                  <i className="fa-solid fa-baby-carriage mb-1"></i>
                                </div>
                                <input
                                  type="text"
                                  className="form-input"
                                  name="Infant"
                                  value={PaxInfo.Infant}
                                  onChange={handlePaxInfo}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Travel Date */}
                  {queryInputs.QueryType !== "5" && (
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div
                            className="card-header point-cursor px-2 pt-2 pb-0 border d-flex justify-content-between"
                            onClick={() => dispatch({ type: "TRAVEL_DATE" })}
                          >
                            <h6>Travel Date</h6>
                            {state.travelDate ? (
                              <i
                                className="fa-solid fa-caret-up up-arrow"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  dispatch({ type: "TRAVEL_DATE" });
                                }}
                              ></i>
                            ) : (
                              <i
                                className="fa-solid fa-caret-down up-arrow"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  dispatch({ type: "TRAVEL_DATE" });
                                }}
                              ></i>
                            )}
                          </div>
                          {state.travelDate && (
                            <div className="card-body">
                              <div className="row mt-2">
                                <div className="col-md-6 col-12">
                                  <select
                                    className="form-input"
                                    name="Type"
                                    onChange={handleTravelDate}
                                  >
                                    <option value="1">Date Wise</option>
                                    <option value="2">Day Wise</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row mt-1">
                                <div className="col-lg-3 col-md-6 col-12">
                                  <label>From Date</label>
                                  <input
                                    type="date"
                                    className="form-input"
                                    name="FromDate"
                                    value={TravelDate.FromDate}
                                    onChange={handleTravelDate}
                                  />
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                  <label>To Date</label>
                                  <input
                                    type="date"
                                    className="form-input"
                                    name="ToDate"
                                    value={TravelDate.ToDate}
                                    onChange={handleTravelDate}
                                  />
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                  <label>Total Nights</label>
                                  <div className="d-flex ">
                                    <input
                                      type="text"
                                      className="form-input"
                                      name="TotalDays"
                                      value={TravelDate.TotalDays}
                                      onChange={handleTravelDate}
                                    />
                                    <button className="btn btn-info">
                                      Save
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quotation/Itinerary Information */}
                  {queryInputs.QueryType !== "5" && (
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div
                            className="card-header point-cursor px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center"
                            onClick={() => dispatch({ type: "QUOTATION" })}
                          >
                            <h6>Quotation/Itinerary Information</h6>
                            {state.quotation ? (
                              <i
                                className="fa-solid fa-caret-up up-arrow"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  dispatch({ type: "QUOTATION" });
                                }}
                              ></i>
                            ) : (
                              <i
                                className="fa-solid fa-caret-down up-arrow"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  dispatch({ type: "QUOTATION" });
                                }}
                              ></i>
                            )}
                          </div>
                          {state.quotation && (
                            <div className="card-body">
                              <div className="row align-items-center mt-2">
                                <div className="col-lg-6 col-md-12 justify-content-between d-flex align-items-center">
                                  <p className="m-0">Pax Information</p>
                                  <p className="m-0 bg-info p-1">Total Pax:</p>
                                  <input
                                    type="text"
                                    className="form-input w-25"
                                  />
                                </div>
                              </div>
                              <div className="row  mt-1">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="d-flex justify-content-between align-items-end">
                                    <label className="m-0">Adult</label>
                                    <i className="fa-solid fa-person mb-1"></i>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-input"
                                    name="Adult"
                                    value={PaxInfo.Adult}
                                    onChange={handlePaxInfo}
                                  />
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="d-flex justify-content-between align-items-end">
                                    <label className="m-0">Child</label>
                                    <i className="fa-solid fa-child-reaching mb-1"></i>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-input"
                                    name="Child"
                                    value={PaxInfo.Child}
                                    onChange={handlePaxInfo}
                                  />
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="d-flex justify-content-between align-items-end">
                                    <label className="m-0">Infant</label>
                                    <i className="fa-solid fa-baby-carriage mb-1"></i>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-input"
                                    name="Infant"
                                    value={PaxInfo.Infant}
                                    onChange={handlePaxInfo}
                                  />
                                </div>
                              </div>
                              {queryInputs.QueryType !== "4" && (
                                <div className="row align-items-center mt-4">
                                  <div className="col-lg-7 col-md-12  justify-content-between d-flex align-items-center">
                                    <p className="m-0">Room Information</p>
                                    <p className="m-0 bg-info p-1">
                                      Total Rooms:
                                    </p>
                                    <input
                                      type="text"
                                      className="form-input w-25"
                                    />
                                  </div>
                                </div>
                              )}
                              {queryInputs.QueryType !== "4" && (
                                <div className="row  mt-1">
                                  <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                    <label>Single</label>
                                    <input
                                      type="text"
                                      className="form-input"
                                      name="Single"
                                      value={RoomInfo.Single}
                                      onChange={handleRoomInfo}
                                    />
                                  </div>
                                  <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                    <label>Double</label>
                                    <input
                                      type="text"
                                      className="form-input"
                                      name="Double"
                                      value={RoomInfo.Double}
                                      onChange={handleRoomInfo}
                                    />
                                  </div>
                                  <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                    <label>Twin</label>
                                    <input
                                      type="text"
                                      className="form-input"
                                      name="Twin"
                                      value={RoomInfo.Twin}
                                      onChange={handleRoomInfo}
                                    />
                                  </div>
                                  <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                    <label>Triple</label>
                                    <input
                                      type="text"
                                      className="form-input"
                                      name="Triple"
                                      value={RoomInfo.Triple}
                                      onChange={handleRoomInfo}
                                    />
                                  </div>
                                  <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                    <label>ExtraBed(A)</label>
                                    <input
                                      type="text"
                                      className="form-input"
                                      name="ExtraBed"
                                      value={RoomInfo.ExtraBed}
                                      onChange={handleRoomInfo}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/*Ending Query Type and Assignment columsn */}
                </div>

                {/* Assignment Column */}
                <div className="col-sm-6 col-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div
                          className="card-header point-cursor px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center"
                          onClick={() => dispatch({ type: "ASSIGNMENT" })}
                        >
                          <h6>Assignment</h6>
                          {state.assignment ? (
                            <i
                              className="fa-solid fa-caret-up up-arrow"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "ASSIGNMENT" });
                              }}
                            ></i>
                          ) : (
                            <i
                              className="fa-solid fa-caret-down up-arrow"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "ASSIGNMENT" });
                              }}
                            ></i>
                          )}
                        </div>
                        {state.assignment && (
                          <div className="card-body pt-3 pb-4">
                            <div className="row">
                              <div className="col-md-6 col-12 d-flex justify-content-between align-items-center">
                                <input
                                  type="text"
                                  placeholder="Sales Person"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 col-12">
                                <label htmlFor="">Operation Person</label>
                                <input type="text" className="form-input" />
                              </div>
                              <div className="col-md-6 col-12">
                                <label htmlFor="">Contracting Person</label>
                                <input type="text" className="form-input" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Priority Preference */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div
                          className="card-header point-cursor px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center"
                          onClick={() => dispatch({ type: "PRIORITY" })}
                        >
                          <h6>Priority Preference</h6>
                          {state.priority ? (
                            <i
                              className="fa-solid fa-caret-up up-arrow"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "PRIORITY" });
                              }}
                            ></i>
                          ) : (
                            <i
                              className="fa-solid fa-caret-down up-arrow"
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: "PRIORITY" });
                              }}
                            ></i>
                          )}
                        </div>
                        {state.priority && (
                          <div className="card-body">
                            <div className="mt-2">Priority</div>
                            <div className="row justify-content-between">
                              <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  Normal
                                </label>
                                <input
                                  type="radio"
                                  name="Priority"
                                  value="1"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                              <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  Medium
                                </label>
                                <input
                                  type="radio"
                                  name="Priority"
                                  value="2"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                              <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  High
                                </label>
                                <input
                                  type="radio"
                                  name="Priority"
                                  value="3"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                            </div>
                            <hr className="my-2 p-0" />
                            <div>TAT</div>
                            <div className="row justify-content-between">
                              <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  24 Hours
                                </label>
                                <input
                                  type="radio"
                                  name="TAT"
                                  value="24"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                              <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  28 Hours
                                </label>
                                <input
                                  type="radio"
                                  name="TAT"
                                  value="28"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                              <div className="col-md-3 col-4 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  72 Hours
                                </label>
                                <input
                                  type="radio"
                                  name="TAT"
                                  value="72"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                            </div>
                            <hr className="my-2" />
                            <div>Tour Type</div>
                            <div className="row justify-content-between">
                              <div className="col-lg-5 col-6 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  Adventure Tour
                                </label>
                                <input
                                  type="radio"
                                  name="TourType"
                                  value="1"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                              <div className="col-lg-5 col-6 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  Adventrure Tour
                                </label>
                                <input
                                  type="radio"
                                  name="TourType"
                                  value="2"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                              <div className="col-lg-5 col-6 mt-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  Collage Tour
                                </label>
                                <input
                                  type="radio"
                                  name="TourType"
                                  value="3"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                              <div className="col-lg-5 col-6 mt-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  Collage Tour
                                </label>
                                <input
                                  type="radio"
                                  name="TourType"
                                  value="4"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                              <div className="col-lg-5 col-6 mt-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  Family Tour
                                </label>
                                <input
                                  type="radio"
                                  name="TourType"
                                  value="5"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                              <div className="col-lg-5 col-6 mt-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="m-0 p-0">
                                  Wildlife Tour
                                </label>
                                <input
                                  type="radio"
                                  name="TourType"
                                  value="6"
                                  onClick={handleQueryInputs}
                                />
                              </div>
                            </div>
                            <hr className="my-2" />
                            <div className="row justify-content-between">
                              <div className="col-lg-5 col-6">
                                <label>Lead Source</label>
                                <select
                                  className="form-input"
                                  name="LeadSource"
                                  onChange={handleQueryInputs}
                                >
                                  <option value="1">Select</option>
                                  <option value="2">Facebook</option>
                                  <option value="3">Instagram</option>
                                  <option value="4">Twitter</option>
                                  <option value="5">Snapchat</option>
                                  <option value="6">LinkedIn</option>
                                  <option value="7">Website</option>
                                  <option value="8">Other</option>
                                </select>
                              </div>
                              <div className="col-lg-5 col-6">
                                <label>Lead Preference</label>
                                <input
                                  type="text"
                                  className="form-input"
                                  name="LeadRefrenced"
                                  onChange={handleQueryInputs}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hotel Preference */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header px-2 pt-2 pb-0 border">
                          <h6>Hotel Preference</h6>
                        </div>
                        <div className="card-body">
                          <div className="mt-2">Hotel Category</div>
                          <div className="row justify-content-between">
                            <div className="col-md-3 col-6 form-input d-flex justify-content-between align-items-center">
                              <label className="m-0 p-0">All</label>
                              <input
                                type="radio"
                                name="HotelPrefrence"
                                value="1"
                                onChange={handleQueryInputs}
                              />
                            </div>
                            <div className="col-md-3 col-6 form-input d-flex justify-content-between align-items-center">
                              <label className="m-0 p-0">3 Star</label>
                              <input
                                type="radio"
                                name="HotelPrefrence"
                                value="2"
                                onChange={handleQueryInputs}
                              />
                            </div>
                            <div className="col-md-3 col-6 form-input d-flex justify-content-between align-items-center">
                              <label className="m-0 p-0">4 Star</label>
                              <input
                                type="radio"
                                name="HotelPrefrence"
                                value="3"
                                onChange={handleQueryInputs}
                              />
                            </div>
                            <div className="col-md-3 col-6 form-input d-flex justify-content-between align-items-center">
                              <label className="m-0 p-0">5 Star</label>
                              <input
                                type="radio"
                                name="HotelPrefrence"
                                value="4"
                                onChange={handleQueryInputs}
                              />
                            </div>
                          </div>
                          <hr className="my-2" />
                          <div className="row justify-content-between">
                            <div className="col-lg-5 col-sm-6">
                              <label>Hotel Type</label>
                              <select
                                className="form-input"
                                name="HotelType"
                                onChange={handleQueryInputs}
                              >
                                <option value="1">All</option>
                                <option value="2">Budget</option>
                                <option value="3">Delux</option>
                                <option value="4">Elite</option>
                                <option value="5">Luxury</option>
                                <option value="6">Standard</option>
                              </select>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                              <label>Meal Plan</label>
                              <select
                                className="form-input"
                                name="MealPlan"
                                onChange={handleQueryInputs}
                              >
                                <option value="1">All</option>
                                <option value="2">AP</option>
                                <option value="3">CP</option>
                                <option value="4">EP</option>
                                <option value="5">JPAI</option>
                                <option value="6">MAP</option>
                              </select>
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
      </Layout>
    </>
  );
};

export default Query;
