import React from "react";
import { axiosOther } from "../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, useFormik } from "formik";

const Model = ({
  children,
  heading,
  buttonname,
  apiurl,
  initialValues,
  validationSchema,
  forEdit,
  isEditing,
  setIsEditing
}) => {

  const closeModel = () => {
    document.getElementById("cancel").click();
  }
  const handleSubmit = async (value, { resetForm } ) => {

    console.log("Modal Values......", value);

    try {
      const response = await axiosOther.post(apiurl, value);
      if (response.data.Status) {
        toast.success(`Frist Block : ${response.data.Message}`);
        console.log(response);
        console.log(response.config.data);
        resetForm();
        closeModel();
      } else {
        toast.error(`Second Block: ${response.data.Name}`);
      }
    } catch (err) {
      console.log(err);
    }

  };



  return (
    <>
      <button
        type="button"
        className="btn bg-teal-400 add-button fs-11 shadow ml-2"
        data-toggle="modal"
        data-target="#modal_form_vertical"
        onClick={()=> setIsEditing(false)}
      >
        <i className="fa fa-plus pr-1" aria-hidden="true"></i>
        Create New
      </button>

      {/* <!-- Modal --> */}
      <Toaster />
      <div
        className="modal fade"
        id="modal_form_vertical"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
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
            <Formik
              method="POST"
              action=""
              onSubmit={handleSubmit}
              initialValues={ isEditing? forEdit : initialValues }
              validationSchema={validationSchema}
              enableReinitialize
          >
              <Form>
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
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
