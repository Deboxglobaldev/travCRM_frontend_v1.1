import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import Mail from './Pages/Mail'
import Query from './Pages/Query'
import Home from "./Pages/Home";
import Master from './Pages/Master';
import Login from "./Pages/auth/Login";
import { useState } from "react";

import Logout from "./Pages/auth/Logout";
// import StateMaster from "./Pages/master/masterList/Statemaster";
import CityMaster from "./Pages/master/masterList/CityMaster";
import CountryMaster from "./Pages/master/masterList/CountryMaster";



function App() {

 const [isLogged, setLogged] = useState(true);

  return (
    <>
    <Router>
      {isLogged && <Header setLogged={setLogged}/>}
        <Routes>
          <Route path='/' element={isLogged ? <Home/> : <Login setLogged={setLogged} /> } />
          <Route path='/mail' element={isLogged ? <Mail/> : <Login />} />
          <Route path='/query' element={isLogged ? <Query/> : <Login />} />
          <Route path='/master' element={isLogged ? <Master /> : <Login />} />
          {/* <Route path='/master/state_master' element={isLogged ? <StateMaster/> : <Login/>}></Route> */}
          <Route path='/master/country_master' element={isLogged ? <CountryMaster/> : <Login/>}></Route>
          <Route path='/master/city_master' element={isLogged ? <CityMaster/> : <Login/>}></Route>
          <Route path='/login' element={<Login setLogged={setLogged} />} />
          <Route path='/logout' element={<Logout setLogged={setLogged} />} />
        </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
