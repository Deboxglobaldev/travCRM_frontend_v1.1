import React from 'react';
import Layout from '../../../Component/Layout/Layout';
import { NavLink } from 'react-router-dom';


const Another = () =>{


    //Read Here 
    // It's a demo puropose component for checking logo or another image on nesting is showing or not

    return(
        <>
        <Layout>
            <div className="container my-5">
                <NavLink to="/master/state_master">GoBack</NavLink>
                <h1 className='mt-5'>This is Another Master Page</h1>      
            </div>
        </Layout>
        </>
    )
};

export default Another;