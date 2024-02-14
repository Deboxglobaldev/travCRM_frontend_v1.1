import React from "react";
import Layout from "../../Component/Layout/Layout";



const Query = () => {
  return (
    <Layout>
    <div className="container-fluid mt-2 mb-5 px-5">
      <div class="card pb-3">
        <div class="card-header bg-orange bg-height30 header-elements-inline">
          <h6 class="card-title text-dark">Contact Information</h6>
        </div>

        <form
          class="wizard-form steps-validation wizard clearfix px-2 py-4"
          action="#"
          data-fouc=""
          role="application"
          id="steps-uid-5"
          novalidate="novalidate"
        >
          <div class="content clearfix mt-3">
            <fieldset
              id="steps-uid-5-p-0"
              role="tabpanel"
              aria-labelledby="steps-uid-5-h-0"
              class="body current"
              aria-hidden="false"
            >
              <div class="row">
                <div class="col-md-2">
                  <div class="form-group">
                    <label class="text-size">Query Type</label>
                    <select class="form-control input-style">
                      <option value="query">Select Query</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-2">
                  <div class="form-group">
                    <label class="text-size">Business Type</label>
                    <select class="form-control input-style">
                      <option value="query">Direct Client</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-2">
                  <label htmlFor="name" class="text-size">
                    Name
                    <i class="fa-solid fa-address-card pl-lg-3 pl-md-2 pl-1 text-warning"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Client Name"
                    class="form-control input-style"
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="name" class="text-size">
                    Contact Person
                    <i class="fa-solid fa-address-book pl-lg-3 pl-md-2 pl-1 text-warning"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Person"
                    class="form-control input-style"
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="name" class="text-size">
                    Contact Number
                    <i class="fa-solid fa-phone pl-lg-3 pl-md-2 pl-1 text-warning"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    class="form-control input-style"
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="name" class="text-size">
                    Email Address
                    <i class="fa-regular fa-envelope pl-lg-3 pl-md-2 pl-1 text-warning"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    class="form-control input-style"
                  />
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-4 col-lg-4">
                  <label htmlFor="" class="text-size">
                    Lead Pax Name
                  </label>
                  <input
                    type="text"
                    class="form-control w-100 input-style"
                    placeholder="Lead Pax Name input-style"
                  />
                </div>
                <div className="col-md-4 col-lg-4">
                  <label htmlFor="" class="text-size">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="form-control w-100 input-style"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-md-4 col-lg-4">
                  <label htmlFor="" class="text-size">
                    Add More Emails(comma seprated email)
                  </label>
                  <input
                    type="text"
                    class="form-control input-style"
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
          <div class="card pb-3">
            <div class="bg-orange bg-height30">
              <p class="py-1 pl-1 text-dark">
                <i class="fa-solid fa-hand-holding-dollar py-1 pl-2"></i>{" "}
                Service Selection
              </p>
            </div>
            <div className="card-body">
              <div className="row d-flex justify-content-between">
                <div className="col-3">
                  <span class="text-secondary">Flight</span>
                  <i class="fa-solid fa-plane-departure pl-3"></i>
                  <div class="d-flex input-style justify-content-center">
                    <span>Yes</span>
                    <div class="form-check form-check-switchery switchery-sm ml-2">
                      <label class="form-check-label">
                        <input
                          type="checkbox"
                          name="switchery_group"
                          class="form-input-switchery"
                          required=""
                          data-fouc=""
                          data-switchery="true"
                          style={{ display: "none" }}
                        />
                        <span
                          class="switchery switchery-default"
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
                  <span class="text-secondary">Visa</span>
                  <i class="fa-brands fa-cc-visa pl-3"></i>
                  <div class="d-flex input-style justify-content-center">
                    <span>Yes</span>
                    <div class="form-check form-check-switchery switchery-sm ml-2">
                      <label class="form-check-label">
                        <input
                          type="checkbox"
                          name="switchery_group"
                          class="form-input-switchery"
                          required=""
                          data-fouc=""
                          data-switchery="true"
                          style={{ display: "none" }}
                        />
                        <span
                          class="switchery switchery-default"
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
                  <span class="text-secondary">Insurance</span>
                  <i class="fa-solid fa-shield-halved pl-3"></i>
                  <div class="d-flex input-style justify-content-center">
                    <span>Yes</span>
                    <div class="form-check form-check-switchery switchery-sm ml-2">
                      <label class="form-check-label">
                        <input
                          type="checkbox"
                          name="switchery_group"
                          class="form-input-switchery"
                          required=""
                          data-fouc=""
                          data-switchery="true"
                          style={{ display: "none" }}
                        />
                        <span
                          class="switchery switchery-default"
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
                  <span class="text-secondary">From Date</span>
                  <div class="d-flex input-style justify-content-center">
                    <input type="date" class="date-input" />
                  </div>
                </div>
                <div className="col-4">
                  <span class="text-secondary">To Date</span>
                  <div class="d-flex input-style justify-content-center">
                    <input type="date" class="date-input" />
                  </div>
                </div>
                <div className="col-4">
                  <span class="text-secondary">Total Nights</span>
                  <div class="d-flex justify-content-center">
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div class="card pb-3">
            <div class="bg-orange bg-height30">
              <p class="py-1 pl-1 text-dark">
                <i class="fa-solid fa-file-invoice  py-1 pl-2"></i>
                Quotation/Itenary Information
              </p>
            </div>
            <div className="card-body">
              <form class="form">
                <div className="row">
                  <div className="col-2">
                    <div>
                      <span>Adult</span>
                      <i class="fa-solid fa-person pl-3"></i>
                    </div>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <div>
                      <span>Child</span>
                      <i class="fa-solid fa-child-reaching pl-3"></i>
                    </div>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <div>
                      <span>Infant</span>
                      <i class="fa-solid fa-baby-carriage pl-2"></i>
                    </div>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-2">
                    <span class="font-size-9">SGL Room</span>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span class="font-size-9">DBL Room</span>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span class="font-size-9">TWIN Room</span>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span class="font-size-9">TPL Room</span>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span class="font-size-9">QUAD Room</span>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-2">
                    <span class="font-size-9">ExtraBed(A)</span>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span class="font-size-9">CWBed</span>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
                    />
                  </div>
                  <div className="col-2">
                    <span class="font-size-9">CNBed</span>
                    <input
                      type="text"
                      class="form-control input-style input-border-bottom"
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
            <div class="form-group text-dark">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                class="form-control bg-light px-2"
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
