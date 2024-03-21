import React, { useState, useReducer, useEffect } from "react";
import Layout from "../../Component/Layout/Layout";
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

const Query = () => {
  const [selectedQueryType, setSelectedQueryType] = useState("");
  const [QueryType, setQueryType] = useState("");
  // console.log(queryInputs);
  const [hotelType, setHotelType] = useState([]);
  const [hotelMeal, setHotelMeal] = useState([]);
  const [leadList, setLeadList] = useState([]);

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
    console.log("This is console for inputs.....", { ...postData, QueryType });

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
    console.log(e.target.value);
    setQueryType(e.target.value);
  };

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="">
          <Formik
            initialValues={QueryinputInitialValue}
            validationSchema={QueryInputSchema}
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
              <div></div>

              <div className="row p-2">
                <div className="col-3 border py-2 rounded">
                  <div className="row row-gap-2">
                    <h6>Contact Information</h6>
                    <div className="col-12">
                      <Field
                        type="text"
                        className="form-input-1"
                        placeholder="Company, Email, Phone, Contact Person"
                        name="demo1"
                      ></Field>
                    </div>
                    <div className="col-12">
                      <Field
                        type="text"
                        className="form-input-1"
                        placeholder="Lead Pax Name"
                        name="LeadPax"
                      ></Field>
                    </div>
                    <div className="col-12">
                      <Field
                        type="text"
                        className="form-input-1"
                        placeholder="Subject"
                        name="Subject"
                      ></Field>
                    </div>
                    <div className="col-12">
                      <Field
                        type="text"
                        placeholder="text@example.com"
                        className="form-input-1"
                        name="AddEmail"
                      ></Field>
                    </div>
                    <div className="col-12">
                      <Field
                        type="textArea"
                        placeholder="Additional Information"
                        className="form-input-1 mt-1"
                        name="AdditionalInfo"
                      ></Field>
                    </div>
                  </div>
                </div>
                <div className="col-3 border py-2 mx-1 rounded">
                  <div className="row row-gap-2">
                    <h6>Room's Information</h6>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Single"
                        placeholder="Single"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Double"
                        placeholder="Double"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Twin"
                        placeholder="Twin"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.Triple"
                        placeholder="Triple"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="RoomInfo.ExtraBed"
                        placeholder="Extra Bed"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1 backgroundColor-3"
                        name="RoomInfo.Total"
                        placeholder="Total"
                      ></Field>
                    </div>
                  </div>
                  <div className="row py-2 row-gap-2">
                    <h6>Pax Information</h6>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="Adult"
                        placeholder="Adult"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="Child"
                        placeholder="Child"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1"
                        name="Infant"
                        placeholder="Infant"
                      ></Field>
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        className="form-input-1 backgroundColor-3"
                        name="Infant"
                        placeholder="Total"
                      ></Field>
                    </div>
                  </div>
                </div>

                <div className="col-3 border py-2 rounded">
                  <div className="row row-gap-2">
                    <h6>Travel Date</h6>
                    <div className="col-md-12 col-12">
                      <Field
                        component={"select"}
                        className="form-input-1"
                        name="TravelDate.Type"
                      >
                        <option value="1">Date Wise</option>
                        <option value="2">Day Wise</option>
                      </Field>
                    </div>
                    <div className="col-6">
                      <label>From Date</label>
                      <Field
                        type="date"
                        className="form-input-1"
                        name="TravelDate.FromDate"
                      ></Field>
                    </div>
                    <div className="col-6">
                      <label>To Date</label>
                      <Field
                        type="date"
                        className="form-input-1"
                        name="TravelDate.ToDate"
                      ></Field>
                    </div>
                    <div className="col-6">
                      <Field
                        type="text"
                        className="form-input-1 backgroundColor-3"
                        name="TravelDate.TotalDays"
                        placeholder="Total Nights"
                      ></Field>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-info w-100">Save</button>
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
