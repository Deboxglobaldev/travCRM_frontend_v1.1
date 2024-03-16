import * as yup from "yup";

export const addUserInitialValue = {
  FirstName: "",
  LastName: "",
  Email: "",
  Pin: "",
  Password: "",
  UserCode: "",
  Phone: "",
  Mobile: "",
  Street: "",
  TimeFormat: "",
  LanguageKnown: "",
  Destination: "",
  Role: "",
  UserDepartment: "",
  Profile: "",
  ReportingManager: "",
  UserType: "",
  UserLoginType: "",
};
export const addCompanyInitialValue = {
  CompanyName: "",
  Email:"",
  LicenseKey: "",
  ActionDate:"",
  PAN: "",
  TAN: "",
  CIN: "",
  LUTN: "",
  Address1: "",
  Address2: "",
  Pin: "",
  Status: 1,
};
export const addUserValidationSchema = yup.object().shape({
  UserCode: yup.string().required("Required"),
  FirstName: yup.string().required("Required"),
  Email: yup.string().required("Required"),
  Password: yup.string().required("Required"),
  Role: yup.string().required("Required"),
  UserDepartment: yup.string().required("Required"),
  Profile: yup.string().required("Required"),
  ReportingManager: yup.string().required("Required"),
});
export const addCompanyValidationSchema = yup.object().shape({
    CompanyName:yup.string().required('Required'),
    Email:yup.string().required('Required'),
    LicenseKey:yup.string().required('Required'),
    ActionDate:yup.string().required('Required'),
    Address1:yup.string().required('Required')
});
