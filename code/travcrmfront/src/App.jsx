import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../public/global_assets/custom_css/master.css";
import Home from "./Pages/home/Home";
import Mail from "./Pages/mail/Mail";
import Query from "./Pages/query/Query";
import Master from "./Pages/master/Master";
import Login from "./Pages/auth/Login";
import Logout from "./Pages/auth/Logout";
import StateMaster from "./Pages/master/masterList/StateMaster";
import CityMaster from "./Pages/master/masterList/CityMaster";
import CountryMaster from "./Pages/master/masterList/CountryMaster";
import Profile from "./Component/Layout/Profile";
import Protected from "./Pages/auth/Protected";
import QueryList from "./Pages/query/QueryList";
import QueryView from "./Pages/query/QueryView";
import LeadSource from "./Pages/master/masterList/LeadSource";
import DestinationMaster from "./Pages/master/masterList/DestinationMaster";
import BusinessType from "./Pages/master/masterList/BusinessType";
import Language from "./Pages/master/masterList/Language";
import MarketType from "./Pages/master/masterList/MarketType";
import DivisionMaster from "./Pages/master/masterList/DivisionMaster";
import TourType from "./Pages/master/masterList/TourType";
import SeasonMaster from "./Pages/master/masterList/SeasonMaster";
import RoomMaster from "./Pages/master/masterList/RoomMaster";
import HotelRateSheet from "./Pages/master/masterList/HotelRateSheet";
import RoomType from "./Pages/master/masterList/RoomType";
import Amenties from "./Pages/master/masterList/Amenties";
import HotelType from "./Pages/master/masterList/HotelType";
import HotelMeal from "./Pages/master/masterList/HotelMeal";
import Weekend from "./Pages/master/masterList/Weekend";
import HotelCategory from "./Pages/master/masterList/HotelCategory";
import HotelAdditional from "./Pages/master/masterList/HotelAdditional";
import HotelChain from "./Pages/master/masterList/HotelChain";
import Resturant from "./Pages/master/masterList/Resturant";
import ResturantMealPlan from "./Pages/master/masterList/ResturantMealPlan";
import Monument from "./Pages/master/masterList/Monument";
import Sightseeing from "./Pages/master/masterList/Sightseeing";
import TourEscort from "./Pages/master/masterList/TourEscrot";
import TourEscortPrice from "./Pages/master/masterList/TourEscortPrice";
import VisaType from "./Pages/master/masterList/VisaType";
import VisaCost from "./Pages/master/masterList/VisaCost";
import InsuranceType from "./Pages/master/masterList/InsuranceType";
import InsuranceCost from "./Pages/master/masterList/InsuranceCost";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Protected><Home /></Protected>}/>
          <Route path="/mail" element={  <Protected><Mail /></Protected>}/>
          <Route path="/query_list" element={ <Protected>  <QueryList />  </Protected>}/>
          <Route path="/query_list/query" element={ <Protected> <Query /></Protected>}/>
          <Route path="/query_list/queryview/:queryid" element={ <Protected> <QueryView /></Protected>}/>

          <Route path="/master" element={ <Protected> <Master /> </Protected>}/>
          <Route path="/master/country" element={ <Protected> <CountryMaster /></Protected>}/>
          <Route path="/master/state" element={<Protected><StateMaster /></Protected>} />
          <Route path="/master/city" element={ <Protected> <CityMaster /></Protected>}/>
          <Route path="/master/lead_source" element={ <Protected> <LeadSource /></Protected>}/>
          <Route path="/master/destination" element={ <Protected> <DestinationMaster /> </Protected>}/>
          <Route path="/master/business_type" element={ <Protected> <BusinessType /></Protected> } />
          <Route path="/master/language" element={ <Protected> <Language /></Protected>} />
          <Route path="/master/market_type" element={ <Protected> <MarketType /> </Protected> } />
          <Route path="/master/division" element={ <Protected> <DivisionMaster /> </Protected>}/>
          <Route path="/master/tour_type" element={ <Protected> <TourType /> </Protected>} />
          <Route path="/master/season" element={ <Protected><SeasonMaster /> </Protected>}/>
          <Route path="/master/room_master" element={<RoomMaster/>}></Route>
          <Route path="/master/hotel_ratesheet" element={<HotelRateSheet/>}></Route>
          <Route path="/master/roomtype" element={<RoomType/>}></Route>
          <Route path="/master/amenties" element={<Amenties/>}></Route>
          <Route path="/master/hoteltype" element={<HotelType/>}></Route>
          <Route path="/master/hotelmeal" element={<HotelMeal/>}></Route>
          <Route path="/master/weekend" element={<Weekend/>}></Route>
          <Route path="/master/hotelcategory" element={<HotelCategory/>}></Route>
          <Route path="/master/hotel_additional" element={<HotelAdditional/>}></Route>
          <Route path="/master/hotelchain" element={<HotelChain/>}></Route>
          <Route path="/master/resturant" element={<Resturant/>}></Route>
          <Route path="/master/resturant_mealplan" element={<ResturantMealPlan/>}></Route>
          <Route path="/master/monument" element={<Monument/>}></Route>
          <Route path="/master/sightseeing" element={<Sightseeing/>}></Route>
          <Route path="/master/tourescort" element={<TourEscort/>}></Route>
          <Route path="/master/tourescortprice" element={<TourEscortPrice/>}></Route>
          <Route path="/master/visatype" element={<VisaType/>}></Route>
          <Route path="/master/visacost" element={<VisaCost/>}></Route>
          <Route path="/master/insurancetype" element={<InsuranceType/>}></Route>
          <Route path="/master/insurancecost" element={<InsuranceCost/>}></Route>

          <Route path="/profile" element={<Protected><Profile /></Protected>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout"element={<Protected><Logout /></Protected>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
