import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home/Home";
import Mail from "./Pages/mail/Mail";
import Query from "./Pages/query/Query";
import Master from "./Pages/master/Master";
import Login from "./Pages/auth/Login";
import Logout from "./Pages/auth/Logout";
import StateMaster from "./Pages/master/masterlist/StateMaster";
import CityMaster from "./Pages/master/masterlist/CityMaster";
import CountryMaster from "./Pages/master/masterlist/CountryMaster";
import Profile from "./Component/Layout/Profile";
import Protected from "./Pages/auth/Protected";
import QueryList from "./Pages/query/QueryList";
import '../public/global_assets/custom_css/master.css';
import QueryView from "./Pages/query/QueryView";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Protected><Home /></Protected>} />
            <Route path="/mail" element={<Protected><Mail /></Protected>}/>

            <Route path="/query_list" element={<Protected><QueryList/></Protected>}/>
            <Route path="/query_list/query" element={<Protected><Query/></Protected>}/>
            <Route path="/query_list/queryview" element={<Protected><QueryView/></Protected>}/>

            <Route path="/master" element={<Protected><Master /></Protected>} />
            <Route path="/master/country_master" element={<Protected><CountryMaster /></Protected>} />
            <Route path="/master/state_master" element={<Protected><StateMaster /></Protected>} />
            <Route path="/master/city_master" element={<Protected><CityMaster /></Protected>} />

            <Route path="/profile" element={<Protected><Profile /></Protected>}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Protected><Logout /></Protected>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
