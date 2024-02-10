import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const UserCheck = () => {
    let data = localStorage.getItem("auth");
    if(data!=null)  return <Outlet />;
    else return <Navigate to={"login"} />;
}

export default UserCheck