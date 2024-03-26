import React, { useState, useReducer, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { QueryinputInitialValue, QueryInputSchema } from "./QuerySchema";
import { axiosOther } from "../../http/axios/axios_new";
import {
  hotelTypeInitialValue,
  hotelMealInitialValue,
  leadSourceInitialValue,
} from "../master/masterList/MasterValidation";
import axios from "axios";
import "jquery";
import "select2";
import { NavLink } from "react-router-dom";
import Counter from "./Counter";

const Query = () => {
  const [selectedQueryType, setSelectedQueryType] = useState("");
  const [QueryType, setQueryType] = useState("");
  const [TravelDate, setTravelDate] = useState({
    Type: "",
    FromDate: "",
    ToDate: "",
    TotalNights: "",
    SeasonType: "",
    SeasonYear: "",
  });

  const [hotelType, setHotelType] = useState([]);
  const [hotelMeal, setHotelMeal] = useState([]);
  const [leadList, setLeadList] = useState([]);
  const [toDate, setToDate] = useState();

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const type = await axiosOther.post(
          "hoteltypelist",
          hotelTypeInitialValue
        );
        const meal = await axiosOther.post(
          "hotelmealplanlist",
          hotelMealInitialValue
        );
        const lead = await axiosOther.post("leadlist", leadSourceInitialValue);
        setHotelType(type.data.DataList);
        setHotelMeal(meal.data.DataList);
        setLeadList(lead.data.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, []);

  const handleSubmit = async (postData) => {
    console.log("This is console for inputs.....", {
      ...postData,
      QueryType,
      TravelDate,
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addupdatequerymaster",
        { ...postData, QueryType }
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
    setQueryType(e.target.value);
    setTravelDate({ ...TravelDate, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const dateStr = TravelDate.FromDate;
    const days = Number(TravelDate.TotalNights);
    let hours = 24,
      minute = 60,
      second = 60,
      millisecond = 1000;
    let nightsDayIntoTime = days * hours * minute * second * millisecond;
    const dateIntoFullTime = new Date(dateStr).getTime();
    const toDate = nightsDayIntoTime + dateIntoFullTime;
    const actualDate = new Date(toDate);
    const toDateYear = `${actualDate.getFullYear()}`;
    const toDateMonth = `${actualDate.getMonth() + 1}`;
    const toDateDay = `${actualDate.getDate()}`;
    const finalToDate = `${toDateYear}-${
      toDateMonth.length == 2 ? toDateMonth : "0" + toDateMonth
    }-${toDateDay.length == 2 ? toDateDay : "0" + toDateDay}`;
    setTravelDate({ ...TravelDate, ToDate: finalToDate });
    // console.log(TravelDate);
  }, [TravelDate.TotalNights, TravelDate.FromDate]);

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="">
          <Formik
            initialValues={QueryinputInitialValue}
            // validationSchema={QueryInputSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              {/* <div className=""> */}
              <div className="col-xl-12 d-flex align-items-start justify-content-between p-0">
                <h5 className="card-title d-none d-sm-block">Query Form</h5>
                <div>
                  <button className="btn btn-primary mr-2" type="submit">
                    Save
                  </button>
                  <NavLink to="/query_list" className={"btn btn-primary"}>
                    Close
                  </NavLink>
                </div>
              </div>
              <div className="row p-1 column-gap-md-1 row-gap-2 justify-content-between">
                <div className="col-12 p-0">
                  <div className="card shadow-none border p-2">
                    <h6>Contact Information</h6>
                    <div className="row row-gap-2 pt-2">
                      <div className="col-12 col-sm-6 col-md-3">
                        <Field
                          type="text"
                          className="form-input-1"
                          placeholder="Company, Email, Phone, Contact Person"
                          name="demo1"
                        ></Field>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                        <Field
                          type="text"
                          placeholder="text@example.com"
                          className="form-input-1"
                          name="AddEmail"
                        ></Field>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <Field
                          type="text"
                          className="form-input-1"
                          placeholder="Lead Pax Name"
                          name="LeadPax"
                        ></Field>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <Field
                          type="text"
                          className="form-input-1"
                          placeholder="Subject"
                          name="Subject"
                        ></Field>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <Field
                          type="textArea"
                          placeholder="Additional Information"
                          className="form-input-1"
                          name="AdditionalInfo"
                        ></Field>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md col-sm-6 border py-2 rounded">
                  <div className="row row-gap-2">
                    <h6>Destination Details</h6>
                    <div className="col-md-12 col-12">
                      <Field
                        component={"select"}
                        className="form-input-1"
                        name="Type"
                        value={TravelDate.Type}
                        onChange={handleChange}
                      >
                        <option value="1">Date Wise</option>
                        <option value="2">Day Wise</option>
                      </Field>
                    </div>
                    <div className="col-5">
                      <label>From Date</label>
                      <Field
                        type="date"
                        className="form-input-1"
                        name="FromDate"
                        value={TravelDate.FromDate}
                        onChange={handleChange}
                      ></Field>
                    </div>
                    <div className="col-5">
                      <label>To Date</label>
                      <Field
                        type="date"
                        className="form-input-1"
                        name="ToDate"
                        value={TravelDate.ToDate}
                        onChange={handleChange}
                      ></Field>
                    </div>
                    <div className="col-2">
                      <label>Night</label>
                      <Field
                        type="text"
                        className="form-input-1 backgroundColor-3"
                        placeholder=""
                        name="TotalNights"
                        value={TravelDate.TotalNights}
                        onChange={handleChange}
                      ></Field>
                    </div>
                  </div>
                  {TravelDate.TotalNights !== "" &&
                  TravelDate.FromDate !== "" ? (
                    <div className="row p-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th className="p-0 text-center">Sr.No</th>
                            <th>Date/Day</th>
                            <th>Country</th>
                            <th>Destination</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td className="p-0 text-center">22-03-2024</td>
                            <td className="p-1">
                              <Field
                                component={"select"}
                                className="form-input-1"
                                style={{ height: "30px" }}
                                name="Country"
                              >
                                <option value="1">Select</option>
                                <option value="2">Inida</option>
                                <option value="3">Australia</option>
                              </Field>
                            </td>
                            <td className="p-1">
                              <Field
                                component={"select"}
                                className="form-input-1"
                                style={{ height: "30px" }}
                                name="Destination"
                              >
                                <option value="1">Select</option>
                                <option value="2">Delhi</option>
                                <option value="3">Dubai</option>
                              </Field>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md col-sm-6 border py-2 rounded">
                  <div className="row py-2 row-gap-2">
                    <h6>Pax Information</h6>
                    <div className="col-6">
                      <label htmlFor="">Adult</label>
                      <Counter />
                    </div>
                    <div className="col-6">
                      <label htmlFor="">Child</label>
                      <Counter />
                    </div>
                    <div className="col-6">
                      <label htmlFor="">Infant</label>
                      <Counter />
                    </div>
                    <div className="col-6">
                      <label htmlFor="">Total</label>
                      <div
                        className="backgroundColor-1 rounded 
                      d-flex justify-content-center align-items-center font-weight-bold"
                        style={{ height: "30px" }}
                      >
                        Total : {9}
                      </div>
                    </div>
                  </div>
                  <div className="row row-gap-2 pt-2">
                    <h6>Room's Information</h6>
                    <div className="col-4">
                      <label htmlFor="">Single</label>
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Single"
                        placeholder="Single"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <label htmlFor="">Double</label>
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Double"
                        placeholder="Double"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <label htmlFor="">Twin</label>
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Twin"
                        placeholder="Twin"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <label htmlFor="">Triple</label>
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Triple"
                        placeholder="Triple"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <label htmlFor="">Extra Bed</label>
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.ExtraBed"
                        placeholder="Extra Bed"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <label htmlFor="">Total</label>
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.TotalRooms"
                        placeholder="Total"
                      ></Field>
                    </div>
                  </div>
                </div>
                <div className="col-md col-sm-6 border py-2 rounded">
                  <div className="row row-gap-2">
                    <h6>Suggested Package</h6>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Single"
                        placeholder=""
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Double"
                        placeholder=""
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Twin"
                        placeholder=""
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Triple"
                        placeholder=""
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.ExtraBed"
                        placeholder=""
                      ></Field>
                    </div>
                    <div className="col-12">
                      <label>Search:</label>
                      <Field
                        type="text"
                        className="form-input-1"
                        placeholder="Search Package.."
                        name="Search"
                      ></Field>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default Query;
