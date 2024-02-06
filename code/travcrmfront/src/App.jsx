import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import Mail from './Pages/Mail'
import Query from './Pages/Query'
import Home from "./Pages/Home";
import Master from "./Pages/Master";
import Login from "./Pages/Auth/Login";
import { useState } from "react";
import Logout from "./Pages/Auth/Logout";

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'


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
          <Route path='/login' element={<Login setLogged={setLogged} />} />
          <Route path='/logout' element={<Logout setLogged={setLogged} />} />
        </Routes>
      <Footer />
    </Router>
    </>


  )
}

export default App
