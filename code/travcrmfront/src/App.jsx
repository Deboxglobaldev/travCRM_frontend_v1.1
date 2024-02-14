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
import '../public/global_assets/custom_css/master.css';
import Another from "./Pages/master/masterList/Another";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Protected><Home /></Protected>} />
            <Route path="/mail" element={<Protected><Mail /></Protected>} />
            <Route path="/query" element={<Protected><Query /></Protected>} />
            <Route path="/master" element={<Protected><Master /></Protected>} ></Route>
            <Route path="/master/state_master" element={<Protected><StateMaster /></Protected>} />
            <Route path="/master/state_master/another_master" element={<Protected><Another/></Protected>}/>
            <Route path="/master/country_master" element={<Protected><CountryMaster /></Protected>} />
            <Route path="/master/city_master" element={<Protected><CityMaster /></Protected>} />
            <Route path="/profile" element={<Protected><Profile /></Protected>}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Protected><Logout /></Protected>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
