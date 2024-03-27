import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import { cityInitialValue, cityValidationSchema } from "./MasterValidation";
import { axiosOther } from "../../../http/axios/axios_new";
import { hotelMasterValue } from "./MasterValidation";

const HotelMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [valueForEdit, setValueForEdit] = useState({});
  const [moreInfo, setMoreInfo] = useState(false);
  const [moreAddress, setMoreAddress] = useState(false);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("citylist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };

    postDataToServer();
  }, []);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setValueForEdit({ ...rowValue });
  };

  const columns = [
    {
      name: "Hotel Chain",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.HotelChain}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Hotel Name",
      selector: (row) => row.HotelName,
      sortable: true,
    },
    {
      name: "Destination/Locality",
      selector: (row) => row.Destination,
    },
    {
      name: "Contact Person",
      selector: (row) => row.ContactPerson,
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Room Type",
      selector: (row) => row.RoomType,
      sortable: true,
    },
    {
      name: "Gallery",
      selector: (row) => row.Gallery,
      sortable: true,
    },
    {
      name: "Rate Sheet",
      selector: (row) => row.RateSheet,
      sortable: true,
    },
  ];

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card shadow-none border">
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Hotel Master</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/* Bootstrap Modal */}
                <NavLink
                  to="/master"
                  className="btn btn-gray mr-2 fs-11 shadow"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <Model
                  heading={"Add Hotel Rate"}
                  apiurl={"addupdatecity"}
                  initialValues={cityInitialValue}
                  validationSchema={cityValidationSchema}
                  valueForEdit={valueForEdit}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-3">
                        <label htmlFor="country">Hotel Chain</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="HotelChain"
                        >
                          <option value={"1"}>ITC</option>
                          <option value={"2"}>Oberoi Group</option>
                          <option value={"3"}>Taj Group</option>
                        </Field>
                      </div>
                      <div className="col-sm-3">
                        <label>Hotel Name</label>
                        <Field
                          type="text"
                          placeholder="Hotel Name"
                          className="form-control"
                          name="HotelName"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="HotelName" />
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <label>Hotel Category</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="HotelCategory"
                        >
                          <option value={"1"}>3 Star</option>
                          <option value={"2"}>4 Star</option>
                          <option value={"4"}>5 Star</option>
                        </Field>
                      </div>
                      <div className="col-sm-3">
                        <label>Hotel Type</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="HotelType"
                        >
                          <option value={"1"}>Budget</option>
                          <option value={"2"}>Delite</option>
                          <option value={"4"}>Luxury</option>
                        </Field>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="HotelType" />
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <label>Destination</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="HotelType"
                        >
                          <option value={"1"}>Delhi</option>
                          <option value={"2"}>Mumbai</option>
                          <option value={"4"}>Noida</option>
                          <option value={"4"}>Gurgaon</option>
                          <option value={"4"}>Banglore</option>
                        </Field>
                      </div>
                      <div className="col-sm-3">
                        <label>Locality</label>
                        <Field
                          type="text"
                          placeholder="Locality"
                          className="form-control"
                          name="Locality"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Locality" />
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <label>Room Type</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="HotelType"
                        >
                          <option value={"1"}>Bamboo Tree House</option>
                          <option value={"2"}>Brook Side Cottage</option>
                          <option value={"4"}>Bunglow Suit</option>
                          <option value={"4"}>Classic Cottage</option>
                          <option value={"4"}>Classic Sea View</option>
                        </Field>
                      </div>
                      <div className="col-sm-3">
                        <label>Self Supplier</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="HotelType"
                        >
                          <option value={"1"}>No</option>
                          <option value={"2"}>Yes</option>
                        </Field>
                      </div>
                      <div className="col-sm-3">
                        <label>Status</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="HotelType"
                        >
                          <option value={"1"}>Active</option>
                          <option value={"2"}>Inactive</option>
                        </Field>
                      </div>
                      <span className="cursor-pointer font-weight-bold text-success"
                      onClick={() => setMoreAddress(!moreAddress)}
                      >
                        <i
                          className="fa-solid fa-plus font-size-15 pr-2"
                        ></i>
                        Add Address
                      </span>
                      {moreAddress && (
                        <>
                          <div className="col-sm-3">
                            <label>Country</label>
                            <Field
                              className="form-control"
                              component={"select"}
                              name="Country"
                            >
                              <option value={"1"}>India</option>
                              <option value={"2"}>Srilanka</option>
                              <option value={"3"}>Afghanistan</option>
                            </Field>
                          </div>
                          <div className="col-sm-3">
                            <label>State</label>
                            <Field
                              className="form-control"
                              component={"select"}
                              name="State"
                            >
                              <option value={"1"}>Delhi</option>
                              <option value={"2"}>Banglore</option>
                              <option value={"3"}>Haryana</option>
                              <option value={"3"}>UttarPradesh</option>
                            </Field>
                          </div>
                          <div className="col-sm-3">
                            <label>City</label>
                            <Field
                              className="form-control"
                              component={"select"}
                              name="State"
                            >
                              <option value={"1"}>Gurgaon</option>
                              <option value={"2"}>Noida</option>
                              <option value={"3"}>Lucknow</option>
                            </Field>
                          </div>
                          <div className="col-sm-3">
                            <label>PinCode</label>
                            <Field
                              type="text"
                              placeholder="Pin Code"
                              className="form-control"
                              name="PinCode"
                            />
                            <span className="font-size-10 text-danger">
                              <ErrorMessage name="PinCode" />
                            </span>
                          </div>
                          <div className="col-sm-3">
                            <label>Address</label>
                            <Field
                              type="text"
                              placeholder="Address"
                              className="form-control"
                              name="Address"
                            />
                            <span className="font-size-10 text-danger">
                              <ErrorMessage name="Address" />
                            </span>
                          </div>
                          <div className="col-sm-3">
                            <label>GSTN</label>
                            <Field
                              type="text"
                              placeholder="GSTN"
                              className="form-control"
                              name="GSTN"
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
                        <>
                          <div className="col-sm-3">
                            <label>Weekend Days</label>
                            <Field
                              className="form-control"
                              component={"select"}
                              name="HotelType"
                            >
                              <option value={"1"}>SAT-SUN</option>
                              <option value={"2"}>Special Weekend</option>
                            </Field>
                          </div>
                          <div className="col-sm-3">
                            <label>Check In Time</label>
                            <Field
                              className="form-control"
                              component={"select"}
                              name="HotelType"
                            >
                              <option value={"1"}>01:00</option>
                              <option value={"2"}>02:00</option>
                              <option value={"2"}>05:00</option>
                              <option value={"2"}>06:00</option>
                              <option value={"2"}>07:00</option>
                              <option value={"2"}>08:00</option>
                              <option value={"2"}>09:00</option>
                              <option value={"2"}>10:00</option>
                              <option value={"2"}>11:00</option>
                              <option value={"2"}>12:00</option>
                            </Field>
                          </div>
                          <div className="col-sm-3">
                            <label>Check Out Time</label>
                            <Field
                              className="form-control"
                              component={"select"}
                              name="HotelType"
                            >
                              <option value={"1"}>01:00</option>
                              <option value={"2"}>02:00</option>
                              <option value={"2"}>05:00</option>
                              <option value={"2"}>06:00</option>
                              <option value={"2"}>07:00</option>
                              <option value={"2"}>08:00</option>
                              <option value={"2"}>09:00</option>
                              <option value={"2"}>10:00</option>
                              <option value={"2"}>11:00</option>
                              <option value={"2"}>12:00</option>
                            </Field>
                          </div>
                          <div className="col-sm-3">
                            <label>Hotel Link</label>
                            <Field
                              type="text"
                              placeholder="Locality"
                              className="form-control"
                              name="HotelLink"
                            />
                            <span className="font-size-10 text-danger">
                              <ErrorMessage name="HotelLink" />
                            </span>
                          </div>
                          <div className="col-sm-3">
                            <label>Hotel Amenties</label>
                            <Field
                              className="form-control"
                              component={"select"}
                              name="HotelAmenties"
                            >
                              <option value={"1"}>Ac Rooms</option>
                              <option value={"2"}>All Meal</option>
                              <option value={"2"}>Bar</option>
                              <option value={"2"}>Basic Toilter</option>
                            </Field>
                          </div>
                          <div className="col-sm-3">
                            <label>Hotel Information</label>
                            <Field
                              type="text"
                              placeholder="Locality"
                              className="form-control"
                              name="HotelInformation"
                            />
                            <span className="font-size-10 text-danger">
                              <ErrorMessage name="HotelInformation" />
                            </span>
                          </div>
                          <div className="col-sm-3">
                            <label>Policy</label>
                            <Field
                              type="text"
                              placeholder="Locality"
                              className="form-control"
                              name="HotelInformation"
                            />
                            <span className="font-size-10 text-danger">
                              <ErrorMessage name="HotelInformation" />
                            </span>
                          </div>
                          <div className="col-sm-3">
                            <label>T&C</label>
                            <Field
                              type="text"
                              placeholder="Locality"
                              className="form-control"
                              name="HotelInformation"
                            />
                            <span className="font-size-10 text-danger">
                              <ErrorMessage name="HotelInformation" />
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Model>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input focus-ring form-input"
                    name="Search"
                    value={postData.Search}
                    onChange={(e) =>
                      setPostData({ ...postData, Search: e.target.value })
                    }
                  />
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select
                    className="select-input focus-ring form-input"
                    name="Status"
                    value={postData.Status}
                    onChange={(e) =>
                      setPostData({ ...postData, Status: e.target.value })
                    }
                  >
                    <option value="0">Select Status</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                  </select>
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <button className="btn bg-teal-400 w-75 custom-h-37">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-none border">
            <DataTable
              columns={columns}
              data={hotelMasterValue}
              // data={
              //   postData.Search !== "" || postData.Status !== ""
              //     ? filterData
              //     : getData
              // }
              pagination
              fixedHeader
              fixedHeaderScrollHeight="280px"
              highlightOnHover
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HotelMaster;
