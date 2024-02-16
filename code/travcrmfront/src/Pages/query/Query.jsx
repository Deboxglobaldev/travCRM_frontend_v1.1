import React, { useState } from "react";
import Layout from "../../Component/Layout/Layout";

const Query = () => {
  const [showQueryType , setShowQueryType] = useState(false);
  const [showAssignment, setShowAssignment] = useState(false);
  const [showValueAdd, setShowValueAdd] = useState(false);
  const [showTravelInfo, setShowTravelInfo] = useState(false);
  const [showTravelDate, setShowTravelDate]  = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  const [showQuotation, setShowQuotation] = useState(false);
  const queryCardShow = () =>{
    setShowQueryType(!showQueryType);
  }

  const assignmentCardShow = () =>{
    setShowAssignment(!showAssignment);
  }

  const valueAddCardShow = () =>{
    setShowValueAdd(!showValueAdd)
  }

  const travelInfoCardShow = () =>{
    setShowTravelInfo(!showTravelInfo);
  }
  const travelDateCardShow = () =>{
    setShowTravelDate(!showTravelDate);
  }
  const priorityCardShow = () =>{
    setShowPriority(!showPriority);
  }
  const quotationCardShow = () =>{
    setShowQuotation(!showQuotation);
  }
  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card">
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-5 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Query Form</h5>
              </div>
              <div></div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header px-2 pt-2 pb-0 border">
                      <h6>Contact Information</h6>
                    </div>
                    <div className="card-body py-4">
                      <div className="row">
                        <div className="col-3">
                          <div className="row justify-content-between">
                            <div className="col-5 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="p-0 m-0">
                                Agent
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-5 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="p-0 m-0">
                                B2B
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-5 mt-1 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="p-0 m-0">
                                B2C
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-5 mt-1 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="p-0 m-0">
                                Corporate
                              </label>
                              <input type="radio" />
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <div className="col-12">
                              <input
                                type="text"
                                className="form-input"
                                placeholder="Company, Email, Phone, Contact Person"
                              />
                            </div>
                            <div className="col-12 mt-1">
                              <div className="row bg-secondary m-0 rounded">
                                <div className="col-4">
                                  <span className="d-block">Name</span>
                                  <span className="d-block">
                                    - - - - - - - -
                                  </span>
                                </div>
                                <div className="col-4">
                                  <span className="d-block">Contact</span>
                                  <span className="d-block">
                                    - - - - - - - -
                                  </span>
                                </div>
                                <div className="col-4">
                                  <span className="d-block">Email Address</span>
                                  <span className="d-block">
                                    - - - - - - - -
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="row">
                            <div className="col-12">
                              <input
                                type="text"
                                className="form-input"
                                placeholder="Lead Pax Name"
                              />
                            </div>
                            <div className="col-12">
                              <input
                                type="text"
                                className="form-input mt-1"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="row">
                            <div className="col-12">
                              <input
                                type="text"
                                placeholder="text@example.com"
                                className="form-input"
                              />
                            </div>
                            <div className="col-12">
                              <input
                                type="textArea"
                                placeholder="Additional Information"
                                className="form-input mt-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Query Type and Assignment columsn */}

              <div className="row">
                {/* Query Type */}
                <div className="col-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center px-2 pt-2 pb-0 border">
                          <h6>Query Type</h6>
                          {showQueryType? <i className="fa-solid fa-caret-up up-arrow" onClick={queryCardShow}></i>:
                          <i class="fa-solid fa-caret-down up-arrow" onClick={queryCardShow}></i>}
                        </div>
                        {showQueryType && <div className="card-body py-4">
                          <div className="row justify-content-between">
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Query
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Fixed Departure
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Package
                              </label>
                              <input type="radio" />
                            </div>
                          </div>
                          <div className="row justify-content-between mt-1">
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Duplicate Query
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Multiple Services
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Activity
                              </label>
                              <input type="radio" />
                            </div>
                          </div>
                        </div>}
                      </div>
                    </div>
                  </div>
                  {/* value add service selection row */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center">
                          <h6>Value Added Service Selection</h6>
                          {showValueAdd? <i className="fa-solid fa-caret-up up-arrow" onClick={valueAddCardShow}></i>:
                          <i class="fa-solid fa-caret-down up-arrow" onClick={valueAddCardShow}></i>}
                        </div>
                        {showValueAdd && <div className="card-body">
                          <div className="row justify-content-between mt-2">
                            <div className="col-3">
                              <div className="d-flex justify-content-between align-items-end">
                                <label htmlFor="" className="m-0">
                                  Flight
                                </label>
                                <i className="fa-solid fa-plane-departure mb-1"></i>
                              </div>
                              <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="p-0 m-0">
                                  No
                                </label>
                                <input type="radio" />
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="d-flex justify-content-between align-items-end">
                                <label htmlFor="" className="m-0">
                                  Visa
                                </label>
                                <i className="fa-brands fa-cc-visa mb-1"></i>
                              </div>
                              <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="p-0 m-0">
                                  No
                                </label>
                                <input type="radio" />
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="d-flex justify-content-between align-items-end">
                                <label htmlFor="" className="m-0">
                                  Insurance
                                </label>
                                <i className="fa-solid fa-shield-halved mb-1"></i>
                              </div>
                              <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="p-0 m-0">
                                  No
                                </label>
                                <input type="radio" />
                              </div>
                            </div>
                          </div>
                          <div className="row justify-content-between mt-2">
                            <div className="col-3">
                              <div className="d-flex justify-content-between align-items-end">
                                <label htmlFor="" className="m-0">
                                  Train
                                </label>
                                <i className="fa-solid fa-train mb-1"></i>
                              </div>
                              <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="p-0 m-0">
                                  No
                                </label>
                                <input type="radio" />
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="d-flex justify-content-between align-items-end">
                                <label htmlFor="" className="m-0">
                                  Transfer
                                </label>
                                <i className="fa-solid fa-car mb-1"></i>
                              </div>
                              <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="p-0 m-0">
                                  No
                                </label>
                                <input type="radio" />
                              </div>
                            </div>
                            <div className="col-3"></div>
                          </div>
                        </div>}
                      </div>
                    </div>
                  </div>
                  {/* Travel Info */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center">
                          <h6>Travel Info | Domestic | Guest Type - FIT</h6>
                          {showTravelInfo? <i className="fa-solid fa-caret-up up-arrow" onClick={travelInfoCardShow}></i>:
                          <i class="fa-solid fa-caret-down up-arrow" onClick={travelInfoCardShow}></i>}
                        </div>
                        {showTravelInfo&&<div className="card-body">
                          <div className="row justify-content-between mt-2">
                            <div className="col-5">
                              <label htmlFor="" className="m-0">
                                Travel Type
                              </label>
                              <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="p-0 m-0">
                                  International
                                </label>
                                <input type="radio" />
                              </div>
                            </div>
                            <div className="col-5 mt-3">
                              <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="p-0 m-0">
                                  Domestic
                                </label>
                                <input type="radio" />
                              </div>
                            </div>
                          </div>
                          <div className="row justify-content-between mt-2">
                            <div className="col-5">
                              <label htmlFor="" className="m-0">
                                Pax Type
                              </label>
                              <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="p-0 m-0">
                                  GIT
                                </label>
                                <input type="radio" />
                              </div>
                            </div>
                            <div className="col-5 mt-3">
                              <div className="pr-2 form-input d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="p-0 m-0">
                                  FIT
                                </label>
                                <input type="radio" />
                              </div>
                            </div>
                          </div>
                        </div>}
                      </div>
                    </div>
                  </div>
                  {/* Travel Date */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header px-2 pt-2 pb-0 border d-flex justify-content-between">
                          <h6>Travel Date</h6>
                          {showTravelDate? <i className="fa-solid fa-caret-up up-arrow" onClick={travelDateCardShow}></i>:
                          <i class="fa-solid fa-caret-down up-arrow" onClick={travelDateCardShow}></i>}
                        </div>
                        {showTravelDate&&<div className="card-body">
                          <div className="row mt-2">
                            <div className="col-6">
                              <select className="form-input">
                                <option>Date Wise</option>
                                <option>Day Wise</option>
                              </select>
                            </div>
                          </div>
                          <div className="row mt-1">
                            <div className="col-3">
                              <label>From Date</label>
                              <input type="date" className="form-input" />
                            </div>
                            <div className="col-3">
                              <label>To Date</label>
                              <input type="date" className="form-input" />
                            </div>
                            <div className="col-4">
                              <label>Total Nights</label>
                              <div className="d-flex ">
                                <input type="text" className="form-input" />
                                <button className="btn btn-info">Save</button>
                              </div>
                            </div>
                          </div>
                        </div>}
                      </div>
                    </div>
                  </div>
                  {/* Quotation/Itinerary Information */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center">
                          <h6>Quotation/Itinerary Information</h6>
                          {showQuotation? <i className="fa-solid fa-caret-up up-arrow" onClick={quotationCardShow}></i>:
                          <i class="fa-solid fa-caret-down up-arrow" onClick={quotationCardShow}></i>}
                        </div>
                        {showQuotation&&<div className="card-body">
                          <div className="row align-items-center mt-2">
                            <div className="col-6 justify-content-between d-flex align-items-center">
                              <p className="m-0">Pax Information</p>
                              <p className="m-0 bg-info p-1">Total Pax:</p>
                              <input type="text" className="form-input w-25" />
                            </div>
                          </div>
                          <div className="row  mt-1">
                            <div className="col-3">
                              <div className="d-flex justify-content-between align-items-end">
                                <label className="m-0">Adult</label>
                                <i className="fa-solid fa-person mb-1"></i>
                              </div>
                              <input type="text" className="form-input" />
                            </div>
                            <div className="col-3">
                              <div className="d-flex justify-content-between align-items-end">
                                <label className="m-0">Child</label>
                                <i className="fa-solid fa-child-reaching mb-1"></i>
                              </div>
                              <input type="text" className="form-input" />
                            </div>
                            <div className="col-3">
                              <div className="d-flex justify-content-between align-items-end">
                                <label className="m-0">Child</label>
                                <i className="fa-solid fa-baby-carriage mb-1"></i>
                              </div>
                              <input type="text" className="form-input" />
                            </div>
                          </div>
                          <div className="row align-items-center mt-4">
                            <div className="col-7 justify-content-between d-flex align-items-center">
                              <p className="m-0">Room Information</p>
                              <p className="m-0 bg-info p-1">Total Rooms:</p>
                              <input type="text" className="form-input w-25" />
                            </div>
                          </div>
                          <div className="row  mt-1">
                            <div className="col-2">
                              <label>Single</label>
                              <input type="text" className="form-input" />
                            </div>
                            <div className="col-2">
                              <label>Double</label>
                              <input type="text" className="form-input" />
                            </div>
                            <div className="col-2">
                              <label>Twin</label>
                              <input type="text" className="form-input" />
                            </div>
                            <div className="col-2">
                              <label>Triple</label>
                              <input type="text" className="form-input" />
                            </div>
                            <div className="col-2">
                              <label>ExtraBed(A)</label>
                              <input type="text" className="form-input" />
                            </div>
                          </div>
                        </div>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Assignment Column */}
                <div className="col-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center">
                          <h6>Assignment</h6>
                          {showAssignment? <i className="fa-solid fa-caret-up up-arrow" onClick={assignmentCardShow}></i>:
                          <i class="fa-solid fa-caret-down up-arrow" onClick={assignmentCardShow}></i>}
                        </div>
                        {showAssignment && <div className="card-body pt-3 pb-4">
                          <div className="row">
                            <div className="col-6 d-flex justify-content-between align-items-center">
                              <h5 className="m-0 p-0">Sales Person</h5>
                              <h5 className="m-0 p-0">- - - - - - - - - -</h5>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="">Operation Person</label>
                              <input type="text" className="form-input" />
                            </div>
                            <div className="col-6">
                              <label htmlFor="">Contracting Person</label>
                              <input type="text" className="form-input" />
                            </div>
                          </div>
                        </div>}
                      </div>
                    </div>
                  </div>
                  {/* Priority Preference */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header px-2 pt-2 pb-0 border d-flex justify-content-between align-items-center">
                          <h6>Priority Preference</h6>
                          {showPriority? <i className="fa-solid fa-caret-up up-arrow" onClick={priorityCardShow}></i>:
                          <i class="fa-solid fa-caret-down up-arrow" onClick={priorityCardShow}></i>}
                        </div>
                        {showPriority&&<div className="card-body">
                          <div className="mt-2">Priority</div>
                          <div className="row justify-content-between">
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Normal
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Medium
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                High
                              </label>
                              <input type="radio" />
                            </div>
                          </div>
                          <hr className="my-2 p-0" />
                          <div>TAT</div>
                          <div className="row justify-content-between">
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                24 Hours
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                28 Hours
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                72 Hours
                              </label>
                              <input type="radio" />
                            </div>
                          </div>
                          <hr className="my-2" />
                          <div>Tour Type</div>
                          <div className="row justify-content-between">
                            <div className="col-5 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Adventure Tour
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-5 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Adventrure Tour
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-5 mt-2 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Collage Tour
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-5 mt-2 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Collage Tour
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-5 mt-2 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Family Tour
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-5 mt-2 form-input d-flex justify-content-between align-items-center">
                              <label htmlFor="" className="m-0 p-0">
                                Wildlife Tour
                              </label>
                              <input type="radio" />
                            </div>
                          </div>
                          <hr className="my-2" />
                          <div className="row justify-content-between">
                            <div className="col-5">
                              <label className="m-0">Lead Source</label>
                              <select className="form-input mt-1">
                                <option value="">Select</option>
                                <option value="">Facebook</option>
                                <option value="">Instagram</option>
                                <option value="">Twitter</option>
                                <option value="">Snapchat</option>
                                <option value="">LinkedIn</option>
                                <option value="">Website</option>
                                <option value="">Other</option>
                              </select>
                            </div>
                            <div className="col-5">
                              <label htmlFor="">Lead Preference</label>
                              <input type="text" className="form-input" />
                            </div>
                          </div>
                        </div>}
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
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label className="m-0 p-0">
                                All
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label className="m-0 p-0">
                                3 Star
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label  className="m-0 p-0">
                                4 Star
                              </label>
                              <input type="radio" />
                            </div>
                            <div className="col-3 form-input d-flex justify-content-between align-items-center">
                              <label  className="m-0 p-0">
                                5 Star
                              </label>
                              <input type="radio" />
                            </div>
                          </div>
                          <hr className="my-2"/>
                          <div className="row justify-content-between">
                            <div className="col-5">
                                <label>Hotel Type</label>
                                <select className="form-input">
                                  <option>All</option>
                                  <option>Budget</option>
                                  <option>Delux</option>
                                  <option>Elite</option>
                                  <option>Luxury</option>
                                  <option>Standard</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label>All Plan</label>
                                <select className="form-input">
                                  <option>All</option>
                                  <option>AP</option>
                                  <option>CP</option>
                                  <option>EP</option>
                                  <option>JPAI</option>
                                  <option>MAP</option>
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
