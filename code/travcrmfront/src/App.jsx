import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import Mail from './Pages/Mail'
import Query from './Pages/Query'
import Home from "./Pages/Home";
import Master from './Pages/master/Master';
import Login from "./Pages/Auth/Login";
import { useState } from "react";
import Logout from "./Pages/Auth/Logout";
import Statemaster from "./Pages/master/stateMaster/Statemaster";
import Countrymaster from './Pages/master/countryMaster/Countrymaster';
import Citymaster from './Pages/master/cityMaster/Citymaster';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';

function App() {

 const [isLogged, setLogged] = useState(false);

  return (
    <>

    <Router>
      {isLogged && <Header setLogged={setLogged} /> }
        <Routes>
          <Route path='/' element={isLogged ? <Home/> : <Login setLogged={setLogged} /> } />
          <Route path='/mail' element={isLogged ? <Mail/> : <Login />} />
          <Route path='/query' element={isLogged ? <Query/> : <Login />} />
          <Route path='/master' element={isLogged ? <Master /> : <Login />} />
          <Route path='/master/state' element={isLogged ? <Statemaster/> : <Login/>}></Route>
          <Route path='/master/country' element={isLogged ? <Countrymaster/> : <Login/>}></Route>
          <Route path='/master/city' element={isLogged ? <Citymaster/> : <Login/>}></Route>
          <Route path='/login' element={<Login setLogged={setLogged} />} />
          <Route path='/logout' element={<Logout setLogged={setLogged} />} />
        </Routes>
      <Footer />
    </Router>
    </>


  )
}

export default App
