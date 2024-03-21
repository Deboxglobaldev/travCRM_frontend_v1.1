import React from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import CustomizedSteppers from "./CustomizedSteppers";

const QueryView = () => {
  const {pathname} = useLocation();
  const cardBody = {
    MsFlex: "1 1 auto",
    flex: "1 1 auto",
    padding: "0.8rem 1rem",
  };

  return (
    <Layout>
      <div className="container-fluid mt-3 mb-5">
        <div className="row">
          <div>
            <CustomizedSteppers step={3} />
          </div>
          <div className="col-xl-12 pl-2 mt-3" style={{ padding: 0 }}>
            <div className="col-xl-12 pl-2" style={{ padding: 0 }}>
              <div className="card shadow-none border">
                <div className="card-body" style={{ padding: "1px" }}>
                  <ul className="nav  nav-pills-toolbar nav-justified">
                    <li className="nav-item border">
                      <NavLink to="/query_list/queryview/"
                       className={`nav-link ${pathname==='/query_list/queryview/'?
                        'Active':'text-dark'}`}>
                        Query
                      </NavLink>
                    </li>
                    <li className="nav-item border">
                      <NavLink to="querydetails" 
                        className={`nav-link ${pathname==='/query_list/queryview/querydetails'?
                         'Active':'text-dark'}`}
                      >
                        Query Details
                      </NavLink>
                    </li>
                    <li className="nav-item border">
                      <NavLink to="quotation"
                      className={`nav-link ${pathname==='/query_list/queryview/quotation'? 
                      'Active':'text-dark'}`}
                      >
                        Quotation
                      </NavLink>
                    </li>
                    <li className="nav-item border">
                      <NavLink to="tourextension" 
                      className={`nav-link ${pathname==='/query_list/queryview/tourextension'? 
                      'Active':'text-dark'}`}
                      >
                        Tour Extension
                      </NavLink>
                    </li>
                    <li className="nav-item border">
                      <NavLink to="clientcomm" 
                      className={`nav-link ${pathname==='/query_list/queryview/clientcomm'? 
                      'Active':'text-dark'}`}
                      >
                        Client Communi...
                      </NavLink>
                    </li>
                    <li className="nav-item border">
                      <NavLink to="suppliercomm" 
                      className={`nav-link ${pathname==='/query_list/queryview/suppliercomm'?
                       'Active':'text-dark'}`}
                      >
                        Supplier Communi...
                      </NavLink>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QueryView;
