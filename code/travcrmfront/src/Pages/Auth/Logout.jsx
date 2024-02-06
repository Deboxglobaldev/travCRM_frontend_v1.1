import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({setLogged}) => {
    const navigate = useNavigate();
    //clear local storate auth data
    localStorage.removeItem('auth');
    setLogged(false);
    navigate('/login');
}

export default Logout