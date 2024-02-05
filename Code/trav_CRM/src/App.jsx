import React, { useState } from "react";
import './components/global_assets/css/icons/icomoon/styles.css';
import './components/assets/css/bootstrap.min.css';
import "./components/assets/css/bootstrap_limitless.min.css";
import "./components/assets/css/layout.min.css";
import "./components/assets/css/components.min.css";
import "./components/assets/css/colors.min.css";
import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dahsboard";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Master from "./components/master/Master";

const App = () => {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
        <Router>
          {/* {isLogged && <Navbar/>} */}
          <Navbar/>
          <Routes>
            {/* <Route path="/" element={isLogged ? <Dashboard /> : <Login setIsLogged={setIsLogged}/>}></Route> */}
            <Route path='/' element={<Master/>}></Route>
          </Routes>
          <Footer/>
        </Router>
    </>
  );
};

export default App;
