import React from "react";
import { NavLink } from "react-router-dom";

const MasterData = ({ masterList }) => {
  return (
    <>
      <div className="container-fluid">
        {/* General */}
        <div className="row bg-light shadow-lg my-2 text-dark">
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              GENERAL
            </p>
            <img
              src="assets/icons/main-menu.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/countries.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Country Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/process.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Business Type Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/united-states.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  State Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/languages.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Language Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/city.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  City Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/main-menu.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Division Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/conversion-rate.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Lead Source Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/travel-and-tourism.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Tour Type
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/destination.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Destination Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/season.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Season Master
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* /GENERAL */}

        {/* HOTEL */}

        <div className="row bg-light shadow-lg my-2 text-dark">
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              HOTEL
            </p>
            <img
              src="assets/icons/hotel.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Rate Sheet
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Category Master
                </span>
              </div>
            </div>
          </div>
          <div className="col mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/living-room.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Room Type Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel3.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Additional Master
                </span>
              </div>
            </div>
          </div>
          <div className="col mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/amenities.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Amenities Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/room.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Room Master
                </span>
              </div>
            </div>
          </div>
          <div className="col mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel2.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Type Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/building.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Chain Master
                </span>
              </div>
            </div>
          </div>
          <div className="col mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/restaurant.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Meal Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/restaurant-1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Restaurant Master
                </span>
              </div>
            </div>
          </div>
          <div className="col mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/amenities.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Meal Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/season.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Restaurant Master
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /HOTEL */}

        {/* SIGHNSEEING/ACTIVITY */}
        <div className="row bg-light shadow-lg my-2 text-dark">
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              SIGHNSEEING/ACTIVITY
            </p>
            <img
              src="assets/icons/sightseeing.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Monument Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Sightseeing Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              TOUR/ESCORT
            </p>
            <img
              src="assets/icons/tour-guide.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Monument Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Sightseeing Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              VISA
            </p>
            <img
              src="assets/icons/passport9.png"
              alt="main-menu"
              style={{ height: "40px", width: "35px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Monument Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Sightseeing Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              INSURANCE
            </p>
            <img
              src="assets/icons/health-ins.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Monument Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Sightseeing Master
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /SIGHNSEEING/ACTIVITY */}

        {/* PASSPORT */}

        <div className="row bg-light shadow-lg my-2 text-dark">
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              SIGHNSEEING/ACTIVITY
            </p>
            <img
              src="assets/icons/passport8.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/passport8.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Monument Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Sightseeing Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              TOUR/ESCORT
            </p>
            <img
              src="assets/icons/tour-guide.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Monument Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Sightseeing Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              VISA
            </p>
            <img
              src="assets/icons/passport9.png"
              alt="main-menu"
              style={{ height: "40px", width: "35px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Monument Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Sightseeing Master
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /PASSPORT */}

        {/* TRANSPORT */}

        <div className="row bg-light shadow-lg my-2 text-dark">
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              TRANSPORT
            </p>
            <img
              src="assets/icons/sep.png"
              alt="main-menu"
              style={{ height: "30px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Rate Sheet
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Category Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/living-room.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Room Type Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel3.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Additional Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/amenities.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Amenities Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/room.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Room Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel2.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Type Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/building.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Chain Master
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /TRANSPORT  */}

        {/* CRUISE */}
        
        <div className="row bg-light shadow-lg my-2 text-dark">
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              CRUISE
            </p>
            <img
              src="assets/icons/ship1.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/countries.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Country Master
                </span>
              </div>
            </div>
            
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/united-states.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  State Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/city.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  City Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/conversion-rate.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Lead Source Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/destination.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Destination Master
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /CRUISE */}

        {/* FERRY */}
        
        <div className="row bg-light shadow-lg my-2 text-dark">
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              FERRY
            </p>
            <img
              src="assets/icons/cruise4.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/countries.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Country Master
                </span>
              </div>
            </div>
            
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/united-states.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  State Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/city.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  City Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/conversion-rate.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Lead Source Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-end">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/destination.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Destination Master
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /FERRY */}

        {/* PROPOSAL SETTING */}

        <div className="row bg-light shadow-lg my-2 text-dark">
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "10px", fontWeight: "500" }}
            >
              ITINERARY PROPOSAL SETTING
            </p>
            <img
              src="assets/icons/itinerary3.png"
              alt="main-menu"
              style={{ height: "40px", width: "30px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Rate Sheet
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Category Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Rate Sheet
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Category Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/living-room.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Room Type Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/amenities.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Amenities Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel2.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Type Master
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /PROPOSAL SETTING */}

        {/* FINANCE */}
        <div className="row bg-light shadow-lg my-2 text-dark">
          <div className="col-1 py-2">
            <p
              className="text-primary fw-500 m-0 mb-1"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              FINANCE
            </p>
            <img
              src="assets/icons/budget1.png"
              alt="main-menu"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Rate Sheet
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Category Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/document.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Rate Sheet
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel1.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Category Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/living-room.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Room Type Master
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/living-room.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Room Type Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/amenities.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Amenities Master
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mt-4 mb-2 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col d-flex align-items-center">
                <img
                  src="assets/icons/hotel2.png"
                  alt="countries"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  className="fs-6 pl-1"
                  style={{ fontSize: "10px", fontWeight: "500" }}
                >
                  Hotel Type Master
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /FINANCILA */}
      </div>
    </>
  );
};

export default MasterData;
