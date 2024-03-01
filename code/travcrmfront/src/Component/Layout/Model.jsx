import React, { useState } from "react";
import { axiosOther } from "../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form } from "formik";

const Model = ({
  children,
  heading,
  apiurl,
  initialValues,
  validationSchema,
  valueForEdit,
}) => {
  const handleSubmit = async (value, { resetForm }) => {
    try {
      const response = await axiosOther.post(apiurl, value);
      if (response.data.Status) {
        toast.success(`Frist Block : ${response.data.Message}`);
        console.log(response.data.Message);
      } else {
        toast.error(`Second Block: ${response.data.Name}`);
      }
    } catch (err) {
      console.log(err);
    }
    resetForm();
  };

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
              initialValues={valueForEdit || initialValues}
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
