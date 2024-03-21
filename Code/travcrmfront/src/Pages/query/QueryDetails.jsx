import React from "react";

const QueryDetails = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div className="col-xl-3">

            <div className="card shadow-none border" style={{ marginTop:"10px" }}>
              <div className="">
                <div className="row justify-content-between px-3 py-2">
                  <div className="col-4 border p-0">
                    <div
                      className="d-flex align-items-center px-1"
                      style={{ background: "#f0ffef" }}
                    >
                      <div className="w-100">
                        <a
                          href="#"
                          className="text-default font-weight-semibold letter-icon-title"
                        >
                          Start City
                        </a>
                        <div className="text-muted font-size-sm w-100">
                          <img
                            src="/assets/icons/countries.png"
                            alt="image"
                            style={{ width: "15px" }}
                          />
                          <span className="pl-2">Delhi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 border p-0">
                    <div
                      className="d-flex align-items-center px-1"
                      style={{ background: "#f0ffef" }}
                    >
                      <div>
                        <a
                          href="#"
                          className="text-default font-weight-semibold letter-icon-title"
                        >
                          Nights
                        </a>
                        <div className="text-muted font-size-sm
                          m-auto w-100
                        ">
                          <i
                            className="fa fa-light fa-moon"
                            style={{ color: "black", fontSize: "11px" }}
                          ></i>
                          <span className="pl-2">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 border p-0">
                    <div
                      className="d-flex align-items-center px-1"
                      style={{ background: "#f0ffef" }}
                    >
                      <div className="w-100">
                        <a
                          href="#"
                          className="text-default font-weight-semibold letter-icon-title"
                        >
                          End City
                        </a>
                        <div className="text-muted font-size-sm w-100
                        ">
                          <img
                            src="/assets/icons/countries.png"
                            alt="image"
                            style={{ width: "15px" }}
                          />
                          <span className="pl-2">Mumbai</span>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
              <div className="table-responsive">
                <table className="table text-nowrap">
                  <thead>
                    <tr>
                      <th className="px-2"></th>
                      <th className="px-2">Destination</th>
                      <th className="px-2">Date</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Day 1
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Delhi
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Banglore
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Day 2
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Banglore
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#"
                              className="text-default font-weight-semibold letter-icon-title"
                            >
                              Mumbai
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default QueryDetails;