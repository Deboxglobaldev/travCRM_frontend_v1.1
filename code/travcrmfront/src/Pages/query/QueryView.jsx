import React from "react";
import Layout from "../../Component/Layout/Layout";

const QueryView = () => {
  return (
    <Layout>
      <div className="container-fluid mt-3 mb-5">
        <div className="row">
          <div className="col-3">
            <div className="card min-vh-100 shadow-none border">
              <div className="card-header py-1 px-2">
                <div className="row">
                  <div>
                    <span className="err-fs text-secondary">
                      23 January 2024 10:32AM
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <p>Query Id</p>
                    <span
                      className="bg-warning p-1 rounded"
                      style={{ fontSize: "8px" }}
                    >
                      MEDIUM
                    </span>
                  </div>
                  <div>
                    <h5 className="">DB23-24/000927</h5>
                  </div>
                </div>
                <div className="row text-secondary bg-for-query-view">
                  <div className="d-flex align-items-center py-1">
                    <div>
                      <i className="fa-solid fa-user fs-5 bg-secondary text-light p-1 rounded-circle"></i>
                    </div>
                    <div className="d-flex flex-column pl-2">
                      <span>Disha India Limited</span>
                      <span>90990909090</span>
                    </div>
                  </div>
                  <div className="py-2 d-flex align-items-center">
                    <i className="fa-brands fa-whatsapp text-success fs-3"></i>
                    <span className="text-success pl-2 fs-5">Whatsapp</span>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="col p-0">
                  <table class="table table-bordered">
                    <thead className="p-0">
                      <tr className="p-0">
                        <th className="p-0 text-center"></th>
                        <th className="p-0 text-center">Destination</th>
                        <th className="p-0 text-center">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-0 text-center">Day 1</td>
                        <td className="p-0 text-center">Delhi</td>
                        <td className="p-0 text-center">23-02-24</td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">Day 2</td>
                        <td className="p-0 text-center">Agra</td>
                        <td className="p-0 text-center">24-02-24</td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">Day 3</td>
                        <td className="p-0 text-center">Mumbai</td>
                        <td className="p-0 text-center">25-02-24</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="table">
                    <div className="tbody">
                      <tr>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">Adult</span>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">Child</span>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">Infant</span>
                            <span>0</span>
                          </div>
                        </td>
                      </tr>
                    </div>
                  </div>
                </div>
                <div className="col p-0">
                  <table>
                    <tbody>
                      <tr>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">SGL</span>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">DBL</span>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">TPL</span>
                            <span>0</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">TWIN</span>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="p-1 d-flex justify-content-between">
                          <div className="rounded td-size-ex text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">CWB</span>
                            <span>1</span>
                          </div>
                          <div className="rounded td-size-ex text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">CNB</span>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">E.BED</span>
                            <span>0</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">QUAD BR</span>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="p-1 d-flex justify-content-between">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">BUDGET</span>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="p-1 ">
                          <div className="rounded td-size text-center bg-for-query-view text-light d-flex flex-column">
                            <span className="text-secondary">.</span>
                            <span>0</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col border-top border-bottom mt-1 py-2">
                  <div className="d-flex flex-column">
                    <span className="text-secondary">OPERATION PERSON</span>
                    <span>Sanaul Ansari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card min-vh-100 shadow-none border"></div>
          </div>
          <div className="col-3 ">
            <div className="card min-vh-100 shadow-none border"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QueryView;
