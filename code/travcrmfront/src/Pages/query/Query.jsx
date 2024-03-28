import React, { useState, useReducer, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { QueryinputInitialValue, QueryInputSchema } from "./QuerySchema";
import { axiosOther } from "../../http/axios/axios_new";
import { eachDayOfInterval, format } from "date-fns";
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
  const [dateArray, setDateArray] = useState([]);
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

  // Looping date & stored into array
  function createDateArray() {
    const fromDate = new Date(
      TravelDate.FromDate.split("/").reverse().join("/")
    );
    const lastDate = new Date(TravelDate.ToDate.split("/").reverse().join("/"));
    const dateArray = eachDayOfInterval({ start: fromDate, end: lastDate }).map(
      (date) => format(date, "dd/MM/yyyy")
    );
    setDateArray(dateArray);
  }

  const dateDeleting = () => {
    const updatedArray = [...dateArray];
    updatedArray.pop();
    setDateArray(updatedArray);
    console.log(setTravelDate({
      Type: TravelDate.Type,
      FromDate: TravelDate.FromDate,
      ToDate: TravelDate.ToDate,
      TotalNights: TravelDate.TotalNights!==0?
      TravelDate.TotalNights-1:'',
      SeasonType: TravelDate.SeasonType,
      SeasonYear: TravelDate.SeasonYear,
    }));
  };

  // Message: Adding Date fromDate + Days = ToDate
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
    createDateArray();

  }, [TravelDate.FromDate, TravelDate.TotalNights, TravelDate.ToDate]);

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
                  <NavLink to="/querylist" className={"btn btn-primary"}>
                    Close
                  </NavLink>
                </div>
              </div>
              <div className="row p-1 column-gap-md-1 row-gap-2 justify-content-between">
                <div className="col-12 p-0">
                  <div className="card shadow-none border p-2 bg-gray">
                    <h6 className="text-dark">Contact Information</h6>
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
                <div className="col-md col-sm-6 border py-2 rounded px-1">
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
                    <div className="col-5 pl-2 pr-0">
                      <label>From Date</label>
                      <Field
                        type="date"
                        className="form-input-1"
                        name="FromDate"
                        value={TravelDate.FromDate}
                        onChange={handleChange}
                      ></Field>
                    </div>
                    <div className="col-5 pl-1 pr-0">
                      <label>To Date</label>
                      <Field
                        type="date"
                        className="form-input-1"
                        name="ToDate"
                        value={TravelDate.ToDate}
                        onChange={handleChange}
                      ></Field>
                    </div>
                    <div className="col-2 pl-1">
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
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Date/Day</th>
                            <th>Country</th>
                            <th>Destination</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {dateArray.map((value, index) => {
                            return (
                              <tr key={index + 1}>
                                <td className="p-0 text-center">
                                    {value}</td>
                                <td className="p-1">
                                  <Field
                                    component={"select"}
                                    className="form-input-1"
                                    style={{ height: "30px" }}
                                    name={`Country${index}`}
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
                                    name={`Destination${index}`}
                                  >
                                    <option value="1">Select</option>
                                    <option value="2">Delhi</option>
                                    <option value="3">Dubai</option>
                                  </Field>
                                  
                                </td>
                                <td><i className="fa-solid fa-trash pr-1
                                   text-danger cursor-pointer" onClick={dateDeleting}>
                                   </i></td>
                              </tr>
                            );
                          })}
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
                <div className="col-md col-sm-6 border py-2 rounded">
                  <div className="row row-gap-2">
                    <h6>Other Detail's</h6>
                    <div className="col-md-6 col-12">
                      <label> Operation Person </label>
                      <Field
                        component={"select"}
                        className="form-input-1"
                        name="OperationPerson"
                      >
                        <option value={0}>Select Person</option>
                        <option value={1}>Ansar</option>
                        <option value={2}>Satendra</option>
                        <option value={3}>Prasang</option>
                      </Field>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Contract.. Person </label>
                      <Field
                        type="text"
                        className="form-input-1"
                        name="ContractingPerson"
                        placeholder="Person"

                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Priority </label>
                      <Field
                        component={"select"}
                        className="form-input-1"
                        name="Priority"
                      >
                        <option value={0}>Select Priority</option>
                        <option value={1}>Normal</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Hight</option>
                      </Field>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> TAT </label>
                      <Field
                        component={"select"}
                        className="form-input-1"
                        name="TAT"
                      >
                        <option value={0}>Select TAT</option>
                        <option value={1}>24 Hours</option>
                        <option value={2}>48 Hours</option>
                        <option value={3}>72 Hours</option>
                      </Field>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Tour Type </label>
                      <Field
                        component={"select"}
                        className="form-input-1"
                        name="TourType"
                      >
                        <option value={0}>Select Tour</option>
                        <option value={1}>Adventure Tour</option>
                        <option value={2}>Collage Tour</option>
                        <option value={3}>Family Tour</option>
                      </Field>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Lead Source </label>
                      <Field
                        component={"select"}
                        className="form-input-1"
                        name="LeadSource"
                      >
                        <option value={0}>Select Source</option>
                        <option value={1}>Instagram</option>
                        <option value={2}>Facebook</option>
                        <option value={3}>Tweeter</option>
                      </Field>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Hotel Category </label>
                      <div className="form-input-1 pl-0 border-0 d-flex justify-content-between align-items-center">
                        <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                        <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                        <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                        <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                        <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Lead Referenced </label>
                      <Field
                        type="text"
                        className="form-input-1"
                        name="LeadReferenced"
                        placeholder="Referenced Id"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Hotel Type </label>
                      <Field
                        component={"select"}
                        className="form-input-1"
                        name="HotelType"
                      >
                        <option value={0}>Select Type</option>
                        <option value={1}>Budget</option>
                        <option value={2}>Delux</option>
                        <option value={3}>Elite</option>
                      </Field>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Meal Plan </label>
                      <Field
                        component={"select"}
                        className="form-input-1"
                        name="MealPlan"
                      >
                        <option value={0}>Select Plan</option>
                        <option value={1}>CP</option>
                        <option value={2}>AP</option>
                        <option value={3}>EP</option>
                      </Field>
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
