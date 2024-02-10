import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";
import Home from "./Pages/home/Home";
import Mail from "./Pages/mail/Mail";
import Query from "./Pages/query/Query";
import Master from "./Pages/master/Master";
import Login from "./Pages/auth/Login";
import Logout from "./Pages/auth/Logout";
import { useState } from "react";
import StateMaster from "./Pages/master/masterList/StateMaster";
import CityMaster from "./Pages/master/masterlist/CityMaster";
import CountryMaster from "./Pages/master/masterlist/CountryMaster";

const App = () => {
  const [isLogged, setLogged] = useState(true);

  return (
    <>
      <Router>
        {isLogged && <Header setLogged={setLogged} />}
        <Routes>
          <Route path="/" element={isLogged ? <Home /> : <Login setLogged={setLogged} />}/>
          <Route path="/mail" element={isLogged ? <Mail /> : <Login />} />
          <Route path="/query" element={isLogged ? <Query /> : <Login />} />
          <Route path="/master" element={isLogged ? <Master /> : <Login />} />
          <Route path="/master/state_master" element={isLogged ? <StateMaster /> : <Login />} ></Route>
          <Route path="/master/country_master" element={isLogged ? <CountryMaster /> : <Login />} ></Route>
          <Route path="/master/city_master" element={isLogged ? <CityMaster /> : <Login />}></Route>
          <Route path="/login" element={<Login setLogged={setLogged} />} />
          <Route path="/logout" element={<Logout setLogged={setLogged} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
