import React from "react";
import "./master.css";
import MasterData from "./MasterData";
import { masterList } from "../../data";

const Master = () => {
  return (
    <>
      <div className="master container-fluid">
        <div className="row px-2 py-4 bg-light mb-4">
          <MasterData
            img={'/public/assets/icons/main-menu.png'}
            head='GENERAL'
            list1='Country Master'
            list2='Business Type Master'
            list3='State Master'
            list4='Language Master'
            list5='City Master'
            list6='Division Master'
            list7='Lead Source Master'
            list8='Tour Type'
            list9='Destination Master'
            list10='Season Master'
          />
          <MasterData
            img={'/public/assets/icons/hotel.png'}
            head='HOTEL'
            list1='Hotel Rate Sheet'
            list2='Hotel Category Master'
            list3='Room Type Master'
            list4='Hotel Additional Master'
            list5='Amenties Master'
            list6='Room Master'
            list7='Hotel Type Master'
            list8='Hotel Chain Master'
            list9='Hotel Meal Master'
            list10='Resturant Master'
            list11='Weekend Master'
            list12='Resturant Meal Plan'
          />
          <MasterData
            img={'/public/assets/icons/sightseeing.png'}
            head='SIGHTSEEING/ACTIVITY'
            list1='Monument Master'
            list2='SightSeeing Master'
            list3='Tour Escort Master'
            list4='Tour Escort Price Master'
            list5='Visa Type'
            list6='Visa Cost'
            list7='Insurance Type'
            list8='Insourance Cost'
          />
          <MasterData
            img={'/public/assets/icons/passport8.png'}
            head='PASSPORT'
            list1='Passport Type'
            list2='Passport Cost'
            list3='Train Master'
            list4='Airline Master'
            list5='Additional Requirement'
            list6='Operation Restriction'
          />
          <MasterData
            img={'/public/assets/icons/sep.png'}
            head='TRANSPORT'
            list1='Transfer Master'
            list2='Vehicle Type Master'
            list3='Transfer Type'
            list4='Vehicle Brand Master'
            list5='Transportation Master'
            list6='Driver Master'
            list7='Vehicle Master'
            list8='Fleet Master'
          />
          <MasterData
            img={'/public/assets/icons/ship1.png'}
            head='CRUISE'
            list1='Cruise Company'
            list2='Cruise Name Company'
            list3='Cabin Type'
            list4='Cabin Category'
            list5='Cruise Master'
          />
          <MasterData
            img={'/public/assets/icons/cruise4.png'}
            head='FERRY'
            list1='Ferry Company'
            list2='Ferry Master'
            list3='Ferry Seat Master'
            list4='Ferry Price Master'
          />
          <MasterData
            img={'/public/assets/icons/itinerary3.png'}
            head='ITINERARY PROPOSAL SETTING'
            list1='Itenary Requirements'
            list2='Letter Master'
            list3='Itenary Overiew'
            list4='Proposal Setting Master'
            list5='Emergency Details'
            list6='FIT Inc&Exc/T&C'
            list7='GIT Inc&Exc/T&C'
          />
          <MasterData
            img={'/public/assets/icons/budget1.png'}
            head='FINANCE'
            list1='Currency Master'
            list2='Bank Master'
            list3='Commission Master'
            list4='SAC Code Master'
            list5='TAX Master'
            list6='Payment Type Master'
            list7='Expense Type Master'
            list8='Expense Head Master'
          />
        </div>
      </div>
    </>
  );
};

export default Master;
