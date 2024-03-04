import * as yup from "yup";

export const countryInitialValue = {
  id: "",
  Name: "",
  ShortName: "",
  SetDefault: "0",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "1",
};
export const countrySavedValue = {
  id: "",
  Name: "India",
  ShortName: "IND",
  SetDefault: "1",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "1",
};
export const stateInitialValue = {
  id: "",
  Name: "",
  CountryId: "1",
  Status: "1",
  StateId: "1",
  AddedBy: "1",
  UpdatedBy: "1",
};
export const cityInitialValue = {
  Id: "",
  CountryId: "1",
  StateId: "1",
  Name: "",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "1",
  Created_at: "2024-02-26 08:54:31",
  Updated_at: null,
};
export const leadSourceInitialValue = {
  Id: "",
  Name: "",
  SetDefault: "0",
  Status: "1",
  AddedBy: 2,
  UpdatedBy: 0,
  Created_at: "2023-12-13T07:21:06.000000Z",
  Updated_at: "2023-12-13T07:21:06.000000Z",
};
export const businessTypeInitialValue = {
  Id: "",
  Name: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-02-09 07:11:58",
  Updated_at: null,
};
export const divisionInitialValue = {
  Id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2023-12-13T07:22:10.000000Z",
  Updated_at: "2023-12-13T07:22:10.000000Z",
};
export const marketTypeInitialValue = {
  Id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-01-09 07:59:45",
  Updated_at: null,
};
export const languageInitialValue = {
  Id: "",
  Name: "",
  Status: "1",
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-02-09 10:39:24",
  Updated_at: null,
};
export const destinationInitialValue = {
  Id: "",
  Name: "",
  StateName: "",
  CountryName: "",
  CountryId: "1",
  StateId: "1",
  Description: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-02-09 13:30:42",
  Updated_at: null,
};
export const tourtypeInitialValue = {
  Id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
  Created_at: "2024-02-10 08:51:54",
  Updated_at: "2024-02-10 08:52:11",
};
export const seasonTypeInitialValue = {
  Id: "",
  Name: 1,
  FromDate: "",
  ToDate: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
  Created_at: "2024-02-10 08:59:50",
  Updated_at: "2024-02-10 09:00:03",
};

// ------------------------VALIDATION SCHEMAS-------------------------- //

export const countryValidationSchema = yup.object().shape({
  Name: yup.string().min(3).max(20).required("Required"),
  ShortName: yup.string().required("Required"),
});
export const stateValidationSchema = yup.object().shape({
  Name: yup.string().min(3).max(20).required("Required"),
  CountryId: yup.string().required("Required"),
});
export const cityValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  StateId: yup.string().required("Required"),
  CountryId: yup.string().required("Required"),
});
export const leadSourceValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const businessTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const divisionValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const marketTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const languageValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const destinationValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Description: yup.string().required("Required"),
});
export const tourtypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const seasonTypeValidationSchema = yup.object().shape({
  FromDate: yup.string().required("Required"),
  ToDate: yup.string().required("Required"),
});
