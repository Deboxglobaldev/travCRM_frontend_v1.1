import React from "react";
import './master.css';
import { NavLink } from "react-router-dom";

const Master = () => {
  return (
    <>
      <div className="master container-fluid d-flex flex-wrap p-x-2 py-3">
        <ul class="list-group col-2">
          <li class="list-group-item text-primary first" aria-current="true">
            General Master
          </li>
          <li class="list-group-item">
            <i class="fa-solid fa-flag"></i>
            Country Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-flag"></i>
            <NavLink to='/master/state' style={{color:'inherit'}}>
            State Master
            </NavLink>
            </li>
          <li class="list-group-item">
            <i class="fa-solid fa-flag"></i>
            City Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-flag"></i>
            Lead Source Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-flag"></i>
            Destination Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-flag"></i>
            Business Type Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-flag"></i>
            Language Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-flag"></i>
            Market Type Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-flag"></i>
            Division Master</li>
        </ul>
        <ul class="list-group col-2">
          <li class="list-group-item text-primary first" aria-current="true">
            Hotel Master
          </li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Room Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Room Type Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Amenities Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Hotel Category Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Hotel Type Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Hotel Meal Plan</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Weakend Master Plan</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Hotel Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Hotel Additional Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Hotel Chain Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-layer-group"></i>
            Operation Restriction</li>
          
        </ul>
        <ul class="list-group col-2">
          <li class="list-group-item text-primary first" aria-current="true">
            SIGHTSEEING MASTER
          </li>
          <li class="list-group-item">
            <i class="fa-solid fa-plane"></i>
            Monument Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-plane"></i>
            Airline Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-plane"></i>
            Train Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-plane"></i>
            Sighseeing Master</li>
          <li class="list-group-item text-primary">
            TOURESCORT MASTER</li>
          <li class="list-group-item ">
            <i class="fa-solid fa-plane"></i>
            Tour Escort Master</li>
          <li class="list-group-item ">
            <i class="fa-solid fa-plane"></i>
            Tour Escort Price Master</li>
          <li class="list-group-item text-primary">
            Visa Master</li>
          <li class="list-group-item ">
            <i class="fa-solid fa-plane"></i>
            Visa Type</li>
          <li class="list-group-item ">
            <i class="fa-solid fa-plane"></i>
            Visa Cost</li>
          <li class="list-group-item text-primary">
            INSURANCE MASTER</li>
        </ul>
        <ul class="list-group col-2">
          <li class="list-group-item text-primary first" aria-current="true">
           TRANSPORT MASTER
          </li>
          <li class="list-group-item">
            <i class="fa-solid fa-briefcase"></i>
            Transfer Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-briefcase"></i>
            Transfer Type</li>
          <li class="list-group-item">
            <i class="fa-solid fa-briefcase"></i>
            Transportation Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-briefcase"></i>
            Vehicle Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-briefcase"></i>
            Vehicle Type Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-briefcase"></i>
            Vehicle Brand Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-briefcase"></i>
            Driver Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-briefcase"></i>
            Fleet Master</li>
        </ul>
        <ul class="list-group col-2">
          <li class="list-group-item text-primary first" aria-current="true">
            CRUISE MASTER
          </li>
          <li class="list-group-item">
            <i class="fa-solid fa-list"></i>
            Cruise Company</li>
          <li class="list-group-item">
            <i class="fa-solid fa-list"></i>
            Cruise Name Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-list"></i>
            Cabin Type</li>
          <li class="list-group-item">
            <i class="fa-solid fa-list"></i>
            Cabin Category</li>
          <li class="list-group-item">
            <i class="fa-solid fa-list"></i>
            Cruise Master</li>
          <li class="list-group-item text-primary">
            FERRY MASTER</li>
          <li class="list-group-item">
            <i class="fa-solid fa-list"></i>
            Ferry Company</li>
          <li class="list-group-item">
            <i class="fa-solid fa-list"></i>
            Ferry Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-list"></i>
            Ferry Seat Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-list"></i>
            Ferry Price Master</li>
        </ul>
        <ul class="list-group col-2">
          <li class="list-group-item text-primary first" aria-current="true">
            ADDITIONAL MASTER
          </li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            Additional Requirements</li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            Itinerary Information</li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            Itinerary Overview</li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            Social Media Details</li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            FIC Inc&Exc/T&C</li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            GIT Inc&Exc/T&C</li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            Letter Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            Proposal Setting Master</li>
          <li class="list-group-item text-primary">
            FINANCE MASTER</li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            Currency Master</li>
          <li class="list-group-item">
            <i class="fa-solid fa-share-from-square"></i>
            TAX Master</li>
        </ul>
      </div>
    </>
  );
};

export default Master;
