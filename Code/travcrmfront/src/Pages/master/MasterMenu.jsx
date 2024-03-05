import React from "react";
import { NavLink } from "react-router-dom";

const MasterMenu = ({ img, head, list1, list2 }) => {
  return (
    <>
      <div className="card bg-light w-100 shadow-none border">
        <div className="card-body p-2 ">
          <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
            GENERAL
          </p>

          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 master-head-img">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src="/public/assets/icons/main-menu.png"
                alt="main-menu"
              ></img>
            </div>

            <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/country">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/countries.png" alt="image" />
                      <span className="pl-1">Country Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/business_type">
                    <div className="master-list-icon">
                      <img src="assets/icons/process.png" alt="image" />
                      <span className="pl-1">Business Type Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/state">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/united-states.png" alt="image" />
                      <span className="pl-1">State Master</span>
                    </div>
                  </NavLink>

                  <NavLink to="/master/language">
                    <div className="master-list-icon">
                      <img src="assets/icons/languages.png" alt="image" />
                      <span className="pl-1">Language Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/city">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/city.png" alt="image" />
                      <span className="pl-1">City Master</span>
                    </div>
                  </NavLink>

                  <NavLink to="/master/division">
                    <div className="master-list-icon">
                      <img src="assets/icons/split.png" alt="image" />
                      <span className="pl-1">Division Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/lead_source">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/conversion-rate.png" alt="image" />
                      <span className="pl-1">Lead Source Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/tour_type">
                    <div className="master-list-icon">
                      <img src="assets/icons/tourtype.png" alt="image" />
                      <span className="pl-1">Tour Type</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/destination">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/destination.png" alt="image" />
                      <span className="pl-1">Destination Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/season">
                    <div className="master-list-icon">
                      <img src="assets/icons/season.png" alt="image" />
                      <span className="pl-1">Season Master</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Master Menu List */}
      <div className="card bg-light w-100 shadow-none border">
        <div className="card-body p-2 ">
          <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
            HOTEL
          </p>

          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 master-head-img">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src={img}
                alt="main-menu"
              ></img>
            </div>

            <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/hotel_ratesheet">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/countries.png" alt="image" />
                      <span className="pl-1">Hotel Rate Sheet</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/hotelcategory">
                    <div className="master-list-icon">
                      <img src="assets/icons/process.png" alt="image" />
                      <span className="pl-1">Hotel Category Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/roomtype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/countries.png" alt="image" />
                      <span className="pl-1">Room Type Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/hotel_additional">
                    <div className="master-list-icon">
                      <img src="assets/icons/process.png" alt="image" />
                      <span className="pl-1">Hotel Additional Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/amenties">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/countries.png" alt="image" />
                      <span className="pl-1">Amenties Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/room_master">
                    <div className="master-list-icon">
                      <img src="assets/icons/process.png" alt="image" />
                      <span className="pl-1">Room Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/hoteltype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/countries.png" alt="image" />
                      <span className="pl-1">Hotel Type Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/hotelchain">
                    <div className="master-list-icon">
                      <img src="assets/icons/process.png" alt="image" />
                      <span className="pl-1">Hotel Chain Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/hotelmeal">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/countries.png" alt="image" />
                      <span className="pl-1">Hotel Meal Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/resturant">
                    <div className="master-list-icon">
                      <img src="assets/icons/process.png" alt="image" />
                      <span className="pl-1">Restaurant Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/weekend">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/countries.png" alt="image" />
                      <span className="pl-1">Weekend Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/resturant_mealplan">
                    <div className="master-list-icon">
                      <img src="assets/icons/process.png" alt="image" />
                      <span className="pl-1">Restaurant Meal Plan</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Master Menu List */}

    </>
  );
};


export default MasterMenu;
