import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
const HotelMasterCreate = () => {
  const [moreAddress, setMoreAddress] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <>
      <Layout>
        <div className="container-fluid mt-3 mb-5">
          <div className="card shadow-none border">
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Create New</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                <NavLink
                  to="/master/hotelmaster"
                  className="gray-button"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <button className="green-button">Save</button>
              </div>
            </div>

            <div className="card-body">
              <Formik>
                <Form>
                  <div className="row row-gap-3">
                    <div className="col-sm-2">
                      <label>Hotel Chain</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelChain"
                      >
                        <option value={""}>Select</option>
                        <option value={"1"}>ITC</option>
                        <option value={"2"}>Oberoi Group</option>
                        <option value={"3"}>Taj Group</option>
                      </Field>
                    </div>
                    <div className="col-sm-2">
                      <label>Hotel Name</label>
                      <Field
                        type="text"
                        placeholder="Hotel Name"
                        className="form-input-1"
                        name="HotelName"
                      />
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="HotelName" />
                      </span>
                    </div>
                    <div className="col-sm-2">
                      <label>Hotel Category</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelCategory"
                      >
                        <option value={""}>Select</option>
                        <option value={"1"}>3 Star</option>
                        <option value={"2"}>4 Star</option>
                        <option value={"4"}>5 Star</option>
                      </Field>
                    </div>
                    <div className="col-sm-2">
                      <label>Hotel Type</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelType"
                      >
                        <option value={""}>Select</option>
                        <option value={"1"}>Budget</option>
                        <option value={"2"}>Delite</option>
                        <option value={"4"}>Luxury</option>
                      </Field>
                    </div>
                    <div className="col-sm-2">
                      <label>Destination</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelDestination"
                      >
                        <option value={""}>Select</option>
                        <option value={"1"}>Delhi</option>
                        <option value={"2"}>Mumbai</option>
                        <option value={"3"}>Noida</option>
                        <option value={"4"}>Gurgaon</option>
                        <option value={"5"}>Banglore</option>
                      </Field>
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="HotelDestination" />
                      </span>
                    </div>
                    <div className="col-sm-2">
                      <label>Locality</label>
                      <Field
                        type="text"
                        placeholder="Locality"
                        className="form-input-1"
                        name="HotelLocality"
                      />
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="HotelLocality" />
                      </span>
                    </div>
                    <div className="col-sm-2">
                      <label>Room Type</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelRoomType"
                      >
                        <option value={""}>Select</option>
                        <option value={"1"}>Bamboo Tree House</option>
                        <option value={"2"}>Brook Side Cottage</option>
                        <option value={"3"}>Bunglow Suit</option>
                        <option value={"4"}>Classic Cottage</option>
                        <option value={"5"}>Classic Sea View</option>
                      </Field>
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="HotelRoomType" />
                      </span>
                    </div>
                    <div className="col-sm-2">
                      <label>Self Supplier</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="SelfSupplier"
                      >
                        <option value={"1"}>Yes</option>
                        <option value={"2"}>No</option>
                      </Field>
                    </div>
                    <div className="col-sm-2">
                      <label>Status</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelStatus"
                      >
                        <option value={"1"}>Active</option>
                        <option value={"2"}>Inactive</option>
                      </Field>
                    </div>
                    <span
                      className="cursor-pointer font-weight-bold text-success"
                      onClick={() => setMoreAddress(!moreAddress)}
                    >
                      <i className="fa-solid fa-plus font-size-15 pr-2"></i>
                      Add Address
                    </span>
                    {moreAddress && (
                      <>
                        <div className="col-sm-2">
                          <label>Country</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelCountry"
                          >
                            <option value={"1"}>India</option>
                            <option value={"2"}>Srilanka</option>
                            <option value={"3"}>Afghanistan</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>State</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelState"
                          >
                            <option value={"1"}>Delhi</option>
                            <option value={"2"}>Banglore</option>
                            <option value={"3"}>Haryana</option>
                            <option value={"4"}>UttarPradesh</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>City</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelCity"
                          >
                            <option value={"1"}>Gurgaon</option>
                            <option value={"2"}>Noida</option>
                            <option value={"3"}>Lucknow</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>PinCode</label>
                          <Field
                            type="text"
                            placeholder="Pin Code"
                            className="form-input-1"
                            name="HotelPinCode"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="PinCode" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>Address</label>
                          <Field
                            type="text"
                            placeholder="Address"
                            className="form-input-1"
                            name="HotelAddress"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="HotelAddress" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>GSTN</label>
                          <Field
                            type="text"
                            placeholder="GSTN"
                            className="form-input-1"
                            name="HotelGSTN"
                          />
                        </div>
                      </>
                    )}

                    <p
                      className="cursor-pointer font-weight-bold"
                      onClick={() => setMoreInfo(!moreInfo)}
                    >
                      More Information
                      <span className="pl-2 font-size-15">
                        {moreInfo ? (
                          <i className="fa-solid fa-caret-up"></i>
                        ) : (
                          <i className="fa-solid fa-caret-down"></i>
                        )}
                      </span>
                    </p>
                    {moreInfo && (
                      <div className="row">
                        <div className="col-sm-2">
                          <label>Weekend Days</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelWeekend"
                          >
                            <option value={"1"}>SAT-SUN</option>
                            <option value={"2"}>Special Weekend</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>Check In Time</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="CheckIn"
                          >
                            <option value={"1"}>01:00</option>
                            <option value={"2"}>02:00</option>
                            <option value={"3"}>05:00</option>
                            <option value={"4"}>06:00</option>
                            <option value={"5"}>07:00</option>
                            <option value={"6"}>08:00</option>
                            <option value={"7"}>09:00</option>
                            <option value={"8"}>10:00</option>
                            <option value={"9"}>11:00</option>
                            <option value={"10"}>12:00</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>Check Out Time</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="CheckOut"
                          >
                            <option value={"1"}>01:00</option>
                            <option value={"2"}>02:00</option>
                            <option value={"3"}>05:00</option>
                            <option value={"4"}>06:00</option>
                            <option value={"5"}>07:00</option>
                            <option value={"6"}>08:00</option>
                            <option value={"7"}>09:00</option>
                            <option value={"8"}>10:00</option>
                            <option value={"9"}>11:00</option>
                            <option value={"10"}>12:00</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>Hotel Link</label>
                          <Field
                            type="text"
                            placeholder="Locality"
                            className="form-input-1"
                            name="HotelLink"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="HotelLink" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>Hotel Amenties</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelAmenties"
                          >
                            <option value={"1"}>Ac Rooms</option>
                            <option value={"2"}>All Meal</option>
                            <option value={"3"}>Bar</option>
                            <option value={"4"}>Basic Toilter</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>Hotel Information</label>
                          <Field
                            type="text"
                            placeholder="Locality"
                            className="form-input-1"
                            name="HotelInfo"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="HotelInfo" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>Policy</label>
                          <Field
                            type="text"
                            placeholder="Locality"
                            className="form-input-1"
                            name="HotelPolicy"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="HotelPolicy" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>T&C</label>
                          <Field
                            type="text"
                            placeholder="Locality"
                            className="form-input-1"
                            name="HotelTC"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="T&C" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HotelMasterCreate;
