import React from "react";
import Layout from "../../Component/Layout/Layout";



const Query = () => {
  return (
    <Layout>
    <div className="container-fluid mt-2 mb-5 px-5">
      <div className="card pb-3">
        <div className="card-header bg-orange bg-height30 header-elements-inline">
          <h6 className="card-title text-dark">Contact Information</h6>
        </div>

        <form
          className="wizard-form steps-validation wizard clearfix px-2 py-4"
          action="#"
          data-fouc=""
          role="application"
          id="steps-uid-5"
          novalidate="novalidate"
        >
          <div className="content clearfix mt-3">
            <fieldset
              id="steps-uid-5-p-0"
              role="tabpanel"
              aria-labelledby="steps-uid-5-h-0"
              className="body current"
              aria-hidden="false"
            >
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group">
                    <label className="text-size">Query Type</label>
                    <select className="form-control input-style">
                      <option value="query">Select Query</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="form-group">
                    <label className="text-size">Business Type</label>
                    <select className="form-control input-style">
                      <option value="query">Direct Client</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-2">
                  <label htmlFor="name" className="text-size">
                    Name
                    <i className="fa-solid fa-address-card pl-lg-3 pl-md-2 pl-1 text-warning"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Client Name"
                    className="form-control input-style"
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="name" className="text-size">
                    Contact Person
                    <i className="fa-solid fa-address-book pl-lg-3 pl-md-2 pl-1 text-warning"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Person"
                    className="form-control input-style"
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="name" className="text-size">
                    Contact Number
                    <i className="fa-solid fa-phone pl-lg-3 pl-md-2 pl-1 text-warning"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="form-control input-style"
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="name" className="text-size">
                    Email Address
                    <i className="fa-regular fa-envelope pl-lg-3 pl-md-2 pl-1 text-warning"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="form-control input-style"
                  />
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-4 col-lg-4">
                  <label htmlFor="" className="text-size">
                    Lead Pax Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-100 input-style"
                    placeholder="Lead Pax Name input-style"
                  />
                </div>
                <div className="col-md-4 col-lg-4">
                  <label htmlFor="" className="text-size">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control w-100 input-style"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-md-4 col-lg-4">
                  <label htmlFor="" className="text-size">
                    Add More Emails(comma seprated email)
                  </label>
                  <input
                    type="text"
                    className="form-control input-style"
                    placeholder="exmaple@gmail.com"
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>

      <div className="row d-flex">
        <div className="col-md-6">
          <div className="card pb-3">
            <div className="bg-orange bg-height30">
              <p className="py-1 pl-1 text-dark">
                <i className="fa-solid fa-hand-holding-dollar py-1 pl-2"></i>{" "}
                Service Selection
              </p>
            </div>
            <div className="card-body">
              <div className="row d-flex justify-content-between">
                <div className="col-3">
                  <span className="text-secondary">Flight</span>
                  <i className="fa-solid fa-plane-departure pl-3"></i>
                  <div className="d-flex input-style justify-content-center">
                    <span>Yes</span>
                    <div className="form-check form-check-switchery switchery-sm ml-2">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          name="switchery_group"
                          className="form-input-switchery"
                          required=""
                          data-fouc=""
                          data-switchery="true"
                          style={{ display: "none" }}
                        />
                        <span
                          className="switchery switchery-default"
                          style={{
                            backgroundColor: "rgb(100, 189, 99)",
                            borderColor: "rgb(100, 189, 99)",
                            boxShadow:
                              "rgb(100, 189, 99) 0px 0px 0px 9.5px inset",
                            transition:
                              "border 0.4s ease 0s, box-shadow 0.4s ease 0s, background-color 1.2s ease 0s",
                          }}
                        >
                          <small
                            style={{
                              left: "18px",
                              transition:
                                "background-color 0.4s ease 0s, left 0.2s ease 0s",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                          ></small>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <span className="text-secondary">Visa</span>
                  <i className="fa-brands fa-cc-visa pl-3"></i>
                  <div className="d-flex input-style justify-content-center">
                    <span>Yes</span>
                    <div className="form-check form-check-switchery switchery-sm ml-2">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          name="switchery_group"
                          className="form-input-switchery"
                          required=""
                          data-fouc=""
                          data-switchery="true"
                          style={{ display: "none" }}
                        />
                        <span
                          className="switchery switchery-default"
                          style={{
                            backgroundColor: "rgb(100, 189, 99)",
                            borderColor: "rgb(100, 189, 99)",
                            boxShadow:
                              "rgb(100, 189, 99) 0px 0px 0px 9.5px inset",
                            transition:
                              "border 0.4s ease 0s, box-shadow 0.4s ease 0s, background-color 1.2s ease 0s",
                          }}
                        >
                          <small
                            style={{
                              left: "18px",
                              transition:
                                "background-color 0.4s ease 0s, left 0.2s ease 0s",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                          ></small>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <span className="text-secondary">Insurance</span>
                  <i className="fa-solid fa-shield-halved pl-3"></i>
                  <div className="d-flex input-style justify-content-center">
                    <span>Yes</span>
                    <div className="form-check form-check-switchery switchery-sm ml-2">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          name="switchery_group"
                          className="form-input-switchery"
                          required=""
                          data-fouc=""
                          data-switchery="true"
                          style={{ display: "none" }}
                        />
                        <span
                          className="switchery switchery-default"
                          style={{
                            backgroundColor: "rgb(100, 189, 99)",
                            borderColor: "rgb(100, 189, 99)",
                            boxShadow:
                              "rgb(100, 189, 99) 0px 0px 0px 9.5px inset",
                            transition:
                              "border 0.4s ease 0s, box-shadow 0.4s ease 0s, background-color 1.2s ease 0s",
                          }}
                        >
                          <small
                            style={{
                              left: "18px",
                              transition:
                                "background-color 0.4s ease 0s, left 0.2s ease 0s",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                          ></small>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-4">
                  <span className="text-secondary">From Date</span>
                  <div className="d-flex input-style justify-content-center">
                    <input type="date" className="date-input" />
                  </div>
                </div>
                <div className="col-4">
                  <span className="text-secondary">To Date</span>
                  <div className="d-flex input-style justify-content-center">
                    <input type="date" className="date-input" />
                  </div>
                </div>
                <div className="col-4">
                  <span className="text-secondary">Total Nights</span>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card pb-3">
            <div className="bg-orange bg-height30">
              <p className="py-1 pl-1 text-dark">
                <i className="fa-solid fa-file-invoice  py-1 pl-2"></i>
                Quotation/Itenary Information
              </p>
            </div>
            <div className="card-body">
              <form className="form">
                <div className="row">
                  <div className="col-2">
                    <div>
                      <span>Adult</span>
                      <i className="fa-solid fa-person pl-3"></i>
                    </div>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <div>
                      <span>Child</span>
                      <i className="fa-solid fa-child-reaching pl-3"></i>
                    </div>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <div>
                      <span>Infant</span>
                      <i className="fa-solid fa-baby-carriage pl-2"></i>
                    </div>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-2">
                    <span className="font-size-9">SGL Room</span>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span className="font-size-9">DBL Room</span>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span className="font-size-9">TWIN Room</span>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span className="font-size-9">TPL Room</span>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span className="font-size-9">QUAD Room</span>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-2">
                    <span className="font-size-9">ExtraBed(A)</span>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span className="font-size-9">CWBed</span>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span className="font-size-9">CNBed</span>
                    <input
                      type="text"
                      className="form-control input-style input-border-bottom"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="card p-4 card-bg-color">
          <form>
            <div className="form-group text-dark">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                className="form-control bg-light px-2"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </Layout>


  );
};

export default Query;
