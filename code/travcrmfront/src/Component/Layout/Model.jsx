import React, { useState } from "react";
import { axiosOther } from "../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";


const Model = ({
  children,
  heading,
  apiurl,
  initialValues,
  validationSchema,
  valueForEdit,
  inputField,
}) => {

  const closeModel = () => {
    document.getElementById("cancel").click();
  }

  const handleSubmit = async (value, { resetForm }) => {
    try {
      const response = await axiosOther.post(apiurl, value);
      if (response.data.Status) {
        toast.success(`Frist Block : ${response.data.Message}`);
        console.log(response.data.Message);
        //navigate("/master/country_master");
        closeModel();
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

                  {/* {children} */}
                  <div className="row">
                    {inputField?.text?.map((v) => {
                      return (
                        <div className="col">
                          <label>{v.Label}</label>
                          <Field
                            type={v.Type}
                            name={v.Name}
                            placeholder={v.Placeholder}
                            className="form-control"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name={v.Name} />
                          </span>
                        </div>
                      );
                    })}
                    {inputField?.select?.map((v) => {
                      return (
                        <div className="col">
                          <label>{v.Label}</label>
                          <Field
                            className="form-control"
                            component={"select"}
                            id="country"
                            name={v.Name}
                          >
                            {v.option.map((v) => {
                              return <option value={v.value}>{v.Name}</option>;
                            })}
                          </Field>
                        </div>
                      );
                    })}
                    {inputField?.checkbox?.map((v) => {
                      return (
                        <div className="col d-flex flex-column">
                          <label className="">{v.Label}</label>
                          <Field
                            type={v.Type}
                            name="SetDefault"
                            className="mt-3"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="SetDefault" />
                          </span>
                        </div>
                      );
                    })}
                  </div>

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
