import React, { useState, useReducer, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { QueryinputInitialValue, QueryInputSchema } from "./QuerySchema";
import { axiosOther } from "../../http/axios/axios_new";
import { eachDayOfInterval, format } from "date-fns";
import {
  hotelTypeInitialValue,
  hotelMealInitialValue,
  leadSourceInitialValue,
  tourtypeInitialValue,
} from "../master/masterList/MasterValidation";
import axios from "axios";
import "jquery";
import "select2";
import { NavLink } from "react-router-dom";
import Counter from "./Counter";

const Query = () => {

  const [TravelDate, setTravelDate] = useState({
    Type: "",
    FromDate: "",
    ToDate: "",
    TotalNights: "",
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
  const [queryFields, setQueryFields] = useState({
    CompanyInfo: "",
    AddEmail: "",
    LeadPax: "",
    Subject: "",
    AdditionalInfo: "",
    SearchPackage: "",
    OperationPerson: "",
    ContractPerson: "",
    Priority: "",
    TAT: "",
    TourType: "",
    LeadSource: "",
    HotelCategory: "",
    LeadReferenced: "",
    HotelType: "",
    MealPlan: "",
  });

  const [hotelType, setHotelType] = useState([]);
  const [hotelMeal, setHotelMeal] = useState([]);
  const [leadList, setLeadList] = useState([]);
  const [tourType, setTourType] = useState([]);
  const [toDate, setToDate] = useState();
  const [isSaving, setIsSaving] = useState(false);
  const [dateArray, setDateArray] = useState([]);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);
  const [counter8, setCounter8] = useState(0);
  const [PaxTotal, setPaxTotal] = useState(0);
  const [RoomsTotal, setRoomsTotal] = useState(0);

  const data = localStorage.getItem("Query");

  const storedData = JSON.parse(data);
  // console.log(storedData);


  console.log('hotelType', hotelType)
  console.log('hotelMeal', hotelMeal)
  console.log('laedList', leadList)
  console.log('tourtype', tourType)
  // Fetching Data From Api for Dropdown in Query
  useEffect(() => {
    const getDataToServer = async () => {
      try {
        const type = await axiosOther.post(
          "hoteltypelist",
          hotelTypeInitialValue
        );
        const meal = await axiosOther.post(
          "hotelmealplanlist",
          hotelMealInitialValue
        );
        const lead = await axiosOther.post(
          "leadlist", 
          leadSourceInitialValue
        );
        
        setHotelType(type.data.DataList);
        setHotelMeal(meal.data.DataList);
        setLeadList(lead.data.DataList);
        setTourType(tour);
      } catch (error) {
        console.log(error);
      }
    };
    getDataToServer();
  }, []);

  // Handling Submit Query Data
  const handleSubmit = async (postData) => {
    // console.log('Post Data', postData);
    console.log("Query Value", queryFields);
    if (document.activeElement.name === "SaveButton"){
      setIsSaving(true);
      localStorage.setItem(
        "Query",
        JSON.stringify({
          ...queryFields,
          TravelDate,
          PaxInfo,
          RoomInfo,
        })
      );
      console.log("LocalStorage Data", storedData);
    } else if (document.activeElement.name === "SubmitButton") {

      localStorage.removeItem('Query');

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/addupdatequerymaster",
          { postData }
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Hello Console");
    }
  };

  $(document).ready(function () {
    $(".select2-hidden-accessible").select2(); //bootstrap select box
  });

  // Handling onChange data inside query page
  const handleChange = (e) => {
    setTravelDate({ ...TravelDate, [e.target.name]: e.target.value });
  };

  const handleQueryChange = (e) => {
    setQueryFields({ ...queryFields, [e.target.name]: e.target.value });
  };

  // Looping date & stored into array
  function createDateArray() {
    const fromDate = new Date(
      TravelDate?.FromDate?.split("/")?.reverse()?.join("/")
    );
    const lastDate = new Date(
      TravelDate?.ToDate?.split("/")?.reverse()?.join("/")
    );
    const dateArray = eachDayOfInterval({ start: fromDate, end: lastDate }).map(
      (date) => format(date, "dd/MM/yyyy")
    );
    setDateArray(dateArray);
  }

  // Date Deleting
  const dateDeleting = () => {
    const updatedArray = [...dateArray];
    updatedArray.pop();
    setDateArray(updatedArray);

    setTravelDate({
      Type: TravelDate.Type,
      FromDate: TravelDate.FromDate,
      ToDate: TravelDate.ToDate,
      TotalNights:
        TravelDate.TotalNights !== 0 ? TravelDate.TotalNights - 1 : "",
      SeasonType: TravelDate.SeasonType,
      SeasonYear: TravelDate.SeasonYear,
    });
  };

  //Adding Date fromDate + Days = ToDate
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

  // Update Total Values in Pax and Rooms
  const updateTotal = () => {
    setPaxTotal(counter1 + counter2 + counter3);
    setRoomsTotal(counter4 + counter5 + counter6 + counter7 + counter8);
  };

  // Handling Increment and Decrement for counter
  const handleIncrement = (counterSetter) => {
    counterSetter((prevValue) => {
      const newValue = prevValue + 1;
      return newValue;
    });
  };

  const handleDecrement = (counterSetter) => {
    counterSetter((prevValue) => {
      if (prevValue !== 0) {
        const newValue = prevValue - 1;
        return newValue;
      } else {
        return 0;
      }
    });
  };

  // Set counter value into json
  useEffect(() => {
    updateTotal();
    setPaxInfo({
      Adult: counter1,
      Child: counter2,
      Infant: counter3,
    });
  }, [counter1, counter2, counter3]);

  useEffect(() => {
    updateTotal();
    setRoomInfo({
      Single: counter4,
      Double: counter5,
      Twin: counter6,
      Triple: counter7,
      ExtraBed: counter8,
    });
  }, [counter4, counter5, counter6, counter7, counter8]);

  // Data Set into input field from localstorage
  useEffect(() => {
    setTravelDate({
      Type: storedData?.TravelDate?.Type,
      FromDate: storedData?.TravelDate?.FromDate,
      ToDate: storedData?.TravelDate?.ToDate,
      TotalNights:storedData? storedData?.TravelDate?.TotalNights:'',
      SeasonType: storedData?.TravelDate?.SeasonType,
      SeasonYear: storedData?.TravelDate?.SeasonYear,
    });
    setCounter1(storedData? storedData?.PaxInfo?.Adult :0);
    setCounter2(storedData? storedData?.PaxInfo?.Child :0);
    setCounter3(storedData? storedData?.PaxInfo?.Infant:0);
    setCounter4(storedData? storedData?.RoomInfo?.Single:0);
    setCounter5(storedData? storedData?.RoomInfo?.Double:0);
    setCounter6(storedData? storedData?.RoomInfo?.Twin:0);
    setCounter7(storedData? storedData?.RoomInfo?.Triple:0);
    setCounter8(storedData? storedData?.RoomInfo?.ExtraBed:0);
    setQueryFields({
      CompanyInfo: storedData?.CompanyInfo,
      AddEmail: storedData?.AddEmail,
      LeadPax: storedData?.LeadPax,
      Subject: storedData?.Subject,
      AdditionalInfo: storedData?.AdditionalInfo,
      SearchPackage: storedData?.SearchPackage,
      OperationPerson: storedData?.OperationPerson,
      ContractPerson: storedData?.ContractPerson,
      Priority: storedData?.Priority,
      TAT: storedData?.TAT,
      TourType: storedData?.TourType,
      LeadSource: storedData?.LeadSource,
      HotelCategory: storedData?.HotelCategory,
      LeadReferenced: storedData?.LeadReferenced,
      HotelType: storedData?.HotelType,
      MealPlan: storedData?.MealPlan,
    });
  }, []);

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
                <h5 className="card-title d-none d-sm-block m-0 p-0">
                  Query Form
                </h5>
                <div className="p-0 m-0">
                  <button
                    className="blue-button"
                    type="submit"
                    name="SaveButton"
                  >
                    Save
                  </button>
                  <button
                    className="green-button"
                    type="submit"
                    name="SubmitButton"
                  >
                    Submit
                  </button>
                  <NavLink to="/querylist" className={"gray-button py-2"}>
                    Back
                  </NavLink>
                </div>
              </div>
              <div className="row p-1 column-gap-md-1 row-gap-2 justify-content-between">
                <div className="col-12 p-0 ">
                  <div className="card shadow-none border p-1 bg-gray">
                    <h6 className="text-dark m-0">Contact Information</h6>
                    <div className="row row-gap-2 ">
                      <div className="col-12 col-sm-6 col-md-3">
                        <input
                          type="text"
                          className="form-input-2"
                          placeholder="Company, Email, Phone, Contact Person"
                          name="CompanyInfo"
                          onChange={handleQueryChange}
                          value={queryFields.CompanyInfo}
                        ></input>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                        <input
                          type="text"
                          placeholder="text@example.com"
                          className="form-input-2"
                          name="AddEmail"
                          onChange={handleQueryChange}
                          value={queryFields.AddEmail}
                        ></input>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <input
                          type="text"
                          className="form-input-2"
                          placeholder="Lead Pax Name"
                          name="LeadPax"
                          onChange={handleQueryChange}
                          value={queryFields.LeadPax}
                        ></input>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <input
                          type="text"
                          className="form-input-2"
                          placeholder="Subject"
                          name="Subject"
                          onChange={handleQueryChange}
                          value={queryFields.Subject}
                        ></input>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <input
                          type="textArea"
                          placeholder="Additional Information"
                          className="form-input-2"
                          name="AdditionalInfo"
                          onChange={handleQueryChange}
                          value={queryFields.AdditionalInfo}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md col-sm-6 border rounded px-1">
                  <div className="row row-gap-2 p-0 pt-1 ">
                    <h6 className="m-0">Destination Details</h6>
                    <div className="col-md-12 col-12">
                      <select
                        component={"select"}
                        className="form-input-1"
                        name="Type"
                        value={TravelDate.Type}
                        onChange={handleChange}
                      >
                        <option value="1">Date Wise</option>
                        <option value="2">Day Wise</option>
                      </select>
                    </div>
                    <div className="col-5 pl-2 pr-0">
                      <label>From Date</label>
                      <input
                        type="date"
                        className="form-input-1"
                        name="FromDate"
                        value={TravelDate.FromDate}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="col-5 pl-1 pr-0">
                      <label>To Date</label>
                      <input
                        type="date"
                        className="form-input-1"
                        name="ToDate"
                        value={TravelDate.ToDate}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="col-2 pl-1">
                      <label>Night</label>
                      <input
                        type="text"
                        className="form-input-1 backgroundColor-3"
                        placeholder=""
                        name="TotalNights"
                        value={TravelDate.TotalNights}
                        onChange={handleChange}
                      ></input>
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
                                <td className="p-0 text-center">{value}</td>
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
                                <td>
                                  <i
                                    className="fa-solid fa-trash pr-1
                                   text-danger cursor-pointer"
                                    onClick={dateDeleting}
                                  ></i>
                                </td>
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
                <div className="col-md col-sm-6 border rounded">
                  <div className="row py-1 row-gap-2 ">
                    <h6 className="m-0 p-0 pl-2">Pax Information</h6>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Adult
                      </label>
                      <Counter
                        onIncrement={() => handleIncrement(setCounter1)}
                        onDecrement={() => handleDecrement(setCounter1)}
                        value={counter1}
                        setCounter={setCounter1}
                        name="Adult"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Child
                      </label>
                      <Counter
                        onIncrement={() => handleIncrement(setCounter2)}
                        onDecrement={() => handleDecrement(setCounter2)}
                        value={counter2}
                        setCounter={setCounter2}
                        name="Child"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Infant
                      </label>
                      <Counter
                        onIncrement={() => handleIncrement(setCounter3)}
                        onDecrement={() => handleDecrement(setCounter3)}
                        value={counter3}
                        setCounter={setCounter3}
                        name="Infant"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Total
                      </label>
                      <div
                        className="backgroundColor-1 rounded
                      d-flex justify-content-center align-items-center font-weight-bold"
                        style={{ height: "25px" }}
                      >
                        Total : {PaxTotal}
                      </div>
                    </div>
                  </div>
                  <div className="row row-gap-2">
                    <h6 className="m-0">Room's Information</h6>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Single
                      </label>
                      <Counter
                        onIncrement={() => handleIncrement(setCounter4)}
                        onDecrement={() => handleDecrement(setCounter4)}
                        value={counter4}
                        setCounter={setCounter4}
                        name="Single"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Double
                      </label>
                      <Counter
                        onIncrement={() => handleIncrement(setCounter5)}
                        onDecrement={() => handleDecrement(setCounter5)}
                        value={counter5}
                        setCounter={setCounter5}
                        name="Double"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Twin
                      </label>
                      <Counter
                        onIncrement={() => handleIncrement(setCounter6)}
                        onDecrement={() => handleDecrement(setCounter6)}
                        value={counter6}
                        setCounter={setCounter6}
                        name="Twin"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Triple
                      </label>
                      <Counter
                        onIncrement={() => handleIncrement(setCounter7)}
                        onDecrement={() => handleDecrement(setCounter7)}
                        value={counter7}
                        setCounter={setCounter7}
                        name="Triple"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Extra Bed
                      </label>
                      <Counter
                        onIncrement={() => handleIncrement(setCounter8)}
                        onDecrement={() => handleDecrement(setCounter8)}
                        value={counter8}
                        setCounter={setCounter8}
                        name="ExtraBed"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0">
                        Total
                      </label>
                      <div
                        className="backgroundColor-1 rounded
                      d-flex justify-content-center align-items-center font-weight-bold"
                        style={{ height: "25px" }}
                      >
                        Total : {RoomsTotal}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md col-sm-6 border py-2 rounded">
                  <div className="row row-gap-2">
                    <h6>Suggested Package</h6>
                    <div className="col-12">
                      <label>Search:</label>
                      <input
                        type="text"
                        className="form-input-1"
                        placeholder="Search Package.."
                        name="Search"
                        onChange={handleQueryChange}
                        value={queryFields.SearchPackage}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="col-md col-sm-6 border py-2 rounded">
                  <div className="row row-gap-2">
                    <h6>Other Detail's</h6>
                    <div className="col-md-6 col-12">
                      <label> Operation Person </label>
                      <select
                        type="select"
                        className="form-input-1"
                        name="OperationPerson"
                        onChange={handleQueryChange}
                        value={queryFields.OperationPerson}
                      >
                        <option value={0}>Select Person</option>
                        <option value={1}>Ansar</option>
                        <option value={2}>Satendra</option>
                        <option value={3}>Prasang</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Contract.. Person </label>
                      <input
                        type="text"
                        className="form-input-1"
                        name="ContractingPerson"
                        placeholder="Person"
                        onChange={handleQueryChange}
                        value={queryFields.ContractingPerson}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Priority </label>
                      <select
                        type="select"
                        className="form-input-1"
                        name="Priority"
                        onChange={handleQueryChange}
                        value={queryFields.Priority}
                      >
                        <option value={0}>Select Priority</option>
                        <option value={1}>Normal</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Hight</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> TAT </label>
                      <select
                        type="select"
                        className="form-input-1"
                        name="TAT"
                        onChange={handleQueryChange}
                        value={queryFields.TAT}
                      >
                        <option value={0}>Select TAT</option>
                        <option value={1}>24 Hours</option>
                        <option value={2}>48 Hours</option>
                        <option value={3}>72 Hours</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Tour Type </label>
                      <select
                        type="select"
                        className="form-input-1"
                        name="TourType"
                        onChange={handleQueryChange}
                        value={queryFields.TourType}
                      >
                        <option value={0}>Select</option>
                        {
                          tourType.map((value, ind)=>{
                            return <option value={ind+1} key={ind+1}>{value.Name}</option>
                          })
                        }
                      </select>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Lead Source </label>
                      <select
                        type="select"
                        className="form-input-1"
                        name="LeadSource"
                        onChange={handleQueryChange}
                        value={queryFields.LeadSource}
                      >
                        <option value={0}>Select</option>
                        {
                          leadList.map((value, ind)=>{
                            return <option value={ind+1} key={ind+1}>{value.Name}</option>
                          })
                        }
                      </select>
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
                      <input
                        type="text"
                        className="form-input-1"
                        name="LeadReferenced"
                        placeholder="Referenced Id"
                        onChange={handleQueryChange}
                        value={queryFields.LeadReferenced}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Hotel Type </label>
                      <select
                        type="select"
                        className="form-input-1"
                        name="HotelType"
                        onChange={handleQueryChange}
                        value={queryFields.HotelType}
                      >
                        <option value={0}>Select Type</option>
                      
                      {hotelType.map((value, ind)=>{
                          return <option value={ind+1} key={ind+1}>{value.Name}</option>
                      })}
                      </select>
                    </div>
                    <div className="col-md-6 col-12">
                      <label> Meal Plan </label>
                      <select
                        type="select"
                        className="form-input-1"
                        name="MealPlan"
                        onChange={handleQueryChange}
                        value={queryFields.MealPlan}
                      >
                        <option value={0}>Select Plan</option>
                        {
                          hotelMeal.map((value, ind)=>{
                            return <option value={ind+1} key={ind+1}>{value.Name}</option>
                          })
                        }
                        
                      </select>
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
