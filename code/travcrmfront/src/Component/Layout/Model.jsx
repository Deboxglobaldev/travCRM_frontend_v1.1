import React, { useEffect, useState } from "react";
import { axiosOther } from "../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Model = ({
  children,
  heading,
  value,
  apiurl,
  setErrorMessage,
  setInputValue,
  isEditing,
  setIsEditing
}) => {

  const navigate = useNavigate();
  
  const [popup, setPopup] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isEditing){
      // alert('You Are Editing Value.....');
      try {
        const response = await axiosOther.put(apiurl, value);
        if (response.data.Status) {
          toast.success(`${response.data.Message}`);
          navigate("/master/country_master");
          setInputValue({
            id: "",
            Name: "",
            ShortName: "",
            SetDefault: "0",
            Status: "1",
            AddedBy: "1",
            UpdatedBy: "1",
          });
        } else {
          toast.error(`${response.data.Name}`);
          navigate("/master/country_master");
          setErrorMessage(`${response.data.Name}`);
        }
      } catch (err) {
        console.log(err);
        setErrorMessage(`${err.message}`);
      }
    }else{

      try {
        const response = await axiosOther.post(apiurl, value);
        if (response.data.Status) {
          toast.success(`${response.data.Message}`);
          navigate("/master/country_master");
          setInputValue({
            id: "",
            Name: "",
            ShortName: "",
            SetDefault: "0",
            Status: "1",
            AddedBy: "1",
            UpdatedBy: "1",
          });
        } else {
          toast.error(`${response.data.Name}`);
          navigate("/master/country_master");
          setErrorMessage(`${response.data.Name}`);
        }
      } catch (err) {
        console.log(err);
        setErrorMessage(`${err.message}`);
      }
    }
  };

  const closeButton = () => {
    setInputValue({
      id: "",
      Name: "",
      ShortName: "",
      SetDefault: "0",
      Status: "1",
      AddedBy: "1",
      UpdatedBy: "1",
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn bg-teal-400 add-button fs-11 shadow"
        data-toggle="modal"
        data-target="#modal_form_vertical"
        onClick={()=> setIsEditing(false)}
      >
        <i className="fa fa-plus pr-1" aria-hidden="true"></i>
        Create New
      </button>

      {/* <!-- Modal --> */}
      <Toaster />
      <div className="modal fade" id="modal_form_vertical" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog" role="document" >
          <div className="modal-content">
            <div className="modal-header  bg-info-700" >
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
                <button
                  type="button"
                  id="cancel"
                  className="btn btn-link"
                  data-dismiss="modal"
                  onClick={closeButton}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
