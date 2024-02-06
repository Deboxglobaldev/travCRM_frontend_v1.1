import React from "react";
import {NavLink} from 'react-router-dom';

const PageHeader = () => {
  return (
    <>
      {/* <!-- Page header --> */}
      <div className="page-header">
        <div className="page-header-content header-elements-md-inline">
          <div className="page-title d-flex">
            <h4>
              <i className="icon-arrow-left52 mr-2"></i>
              <span className="font-weight-semibold">Home</span> - Dashboard
            </h4>
            <NavLink to="/" className="header-elements-toggle text-default d-md-none">
              <i className="icon-more"></i>
            </NavLink>
          </div>

          <div className="header-elements d-none py-0 mb-3 mb-md-0">
            <div className="breadcrumb">
              <NavLink to="/" className="breadcrumb-item">
                <i className="icon-home2 mr-2"></i> Home
              </NavLink>
              <span className="breadcrumb-item active">Dashboard</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /page header --> */}
    </>
  );
};

export default PageHeader;
