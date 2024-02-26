import React, { useEffect, useState } from 'react'
import { axiosOther } from '../../http/axios/axios_new';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Model = ({ children, heading, value, apiurl }) => {
    const navigate = useNavigate();
    const [popup, setPopup] = useState(true)
    const handleCloseModal = () => {
        document.getElementById("cancel").click();
    }


    const handleSubmit = async (e) => {
        //console.log(value)
        e.preventDefault();
        try {
            const response = await axiosOther.post(apiurl, value);
            console.log(response);
            console.log('Response is : ',response.data.Status);
            if (response.data.Status) {
                console.log("inside success", response.data.Status)
                toast.success(`${response.data.Message}`);
                navigate('/master/country_master');
                //handleCloseModal();
            } else {
                toast.error(`${response.data.Name}`);
                navigate('/master/country_master');
            }
        } catch (err) {
            console.log(err)
            toast.error(`${err.message}`);
        }
    }


    return (
        <>
            <button
                type="button"
                className="btn bg-teal-400 add-button fs-11 shadow"
                data-toggle="modal"
                data-target="#modal_form_vertical"
            >
                <i className="fa fa-plus pr-1" aria-hidden="true"></i>
                Create New
            </button>

            {/* <!-- Modal --> */}
            <Toaster />
            <div className="modal fade" id="modal_form_vertical">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header  bg-info-700">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {heading}
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form method="POST" action="" onSubmit={handleSubmit}>
                            <div className="modal-body">
                                {/* modal body */}
                                {children}
                                {/* /modal body */}
                            </div>

                            <div className="modal-footer">
                                <button type="button" id="cancel" className="btn btn-link" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model