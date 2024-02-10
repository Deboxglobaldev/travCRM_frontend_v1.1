import React from "react";
import { NavLink } from "react-router-dom";

const MasterData = ({
  img,
  head,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
  list9,
  list10,
  list11,
  list12,
}) => {
  return (
    <>
      <div class="card bg-light w-100">
        <div class="card-body p-2">
          <p
            className="text-primary fw-500 m-0 mb-1 d-block"
            style={{ fontSize: "12px", fontWeight: "500" }}
          >
            {head}
          </p>

          <div className="row">
            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src={img}
                alt="main-menu"
                style={{ height: "40px", width: "40px" }}
              ></img>
            </div>

            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <DataPiece list1={list1} list2={list2} />
                <DataPiece list1={list3} list2={list4} />
                <DataPiece list1={list5} list2={list6} />
                <DataPiece list1={list7} list2={list8} />
                <DataPiece list1={list9} list2={list10} />
                <DataPiece list1={list11} list2={list12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DataPiece = ({ list1, list2 }) => {
  return (
    <>
      <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
        {list1 == null ? (
          ""
        ) : (
          <NavLink to="/master/country_master">
            <div className="mb-lg-3 mb-xl-3 mb-md-1 mb-1">
              <img
                src="assets/icons/countries.png"
                alt="image"
                style={{ height: "15px", width: "15px" }}
              />
              <span
                className="fs-6 pl-1"
                style={{ fontSize: "10px", fontWeight: "500" }}
              >
                {list1}
              </span>
            </div>
          </NavLink>
        )}

        {list2 == null ? (
          ""
        ) : (
          <NavLink to="/master">
            <div>
              <img
                src="assets/icons/process.png"
                alt="image"
                style={{ height: "15px", width: "15px" }}
              />
              <span
                className="pl-1"
                style={{ fontSize: "10px", fontWeight: "500" }}
              >
                {list2}
              </span>
            </div>
          </NavLink>
        )}
      </div>
    </>
  );
};

export default MasterData;
