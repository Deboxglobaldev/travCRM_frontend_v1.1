import * as yup from "yup";

export const countryInitialValue = {
  id: "",
  Name: "",
  ShortName: "",
  SetDefault: "0",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "0",
};

export const stateInitialValue = {
  id: "",
  Name: "",
  CountryId: "",
  Status: "1",
  AddedBy: "1",
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
export const hotelCategoryInitialValue = {
  Id: "",
  Name: "",
  UploadKeyword: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
  Created_at: "2024-02-12 12:41:55",
  Updated_at: "2024-02-12 12:42:06",
};
export const hotelAdditonalInitialValue = {
  Id: "",
  Name: "",
  Details: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
  Created_at: "2024-02-12 12:35:31",
  Updated_at: "2024-02-12 12:35:54",
};
export const roomMasterInitialValue = {
  Id: "",
  Name: "",
  Status: 1,
  AddedBy: 0,
  UpdatedBy: 0,
  Created_at: "2024-03-04 05:49:07",
  Updated_at: null,
};
export const hotelChainInitialValue = {
  id: "",
  Name: "",
  Location: "",
  HotelWebsite: "",
  SelfSupplier: "",
  ContactType: "",
  ContactName: "",
  ContactDesignation: "",
  ContactCountryCode: "",
  ContactMobile: "",
  ContactEmail: "",
  Status: "1",
  AddedBy: "1",
};
export const resturantInitialValue = {
  id: "",
  Name: "",
  DestinationId: "",
  Address: "",
  CountryId: "",
  StateId: "",
  CityId: "",
  SelfSupplier: "1",
  PinCode: "",
  GSTN: "",
  ContactType: "",
  ContactName: "",
  ContactDesignation: "",
  CountryCode: "",
  Phone1: "",
  Phone2: "",
  Phone3: "",
  ContactEmail: "",
  Image: "",
  Status: 1,
  AddedBy: 1,
};
export const restaurantMealInitialValue = {
  Id: 2,
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-03-04 05:50:37",
  Updated_at: null,
};
export const amentiesInitialValue = {
  Id: "",
  Name: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-03-04 11:24:25",
  Updated_at: null,
};
export const hotelTypeInitialValue = {
  Id: 3,
  Name: "",
  UploadKeyword: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-03-04 11:17:06",
  Updated_at: null,
};
export const weekendInitialValue = {
  Id: "",
  Name: "",
  WeekendDays: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-03-04 05:56:16",
  Updated_at: null,
};
export const hotelMealInitialValue = {
  Id: 3,
  Name: "",
  ShortName: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-03-04 17:22:42",
  Updated_at: null,
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
export const hotelCategoryValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  UploadKeyword: yup.string().required("Required"),
});
export const hotelAdditionalValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Details: yup.string().required("Required"),
});
export const roomMasterValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const hotelChainValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Location: yup.string().required("Required"),
  HotelWebsite: yup.string().required("Required"),
  SelfSupplier: yup.string().required("Required"),
  ContactType: yup.string().required("Required"),
  ContactName: yup.string().required("Required"),
  ContactDesignation: yup.string().required("Required"),
  ContactCountryCode: yup
    .string()
    .matches(/^\+[1-9]\d{0,3}$/, "Invalid-Code")
    .required("Required"),
  ContactMobile: yup.string().required("Required"),
  ContactEmail: yup.string().email().required("Required"),
});
export const resturantValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Address: yup.string().required("Required"),
  PinCode: yup.string().required("Required"),
  GSTN: yup.string().required("Required"),
  ContactName: yup.string().required("Required"),
  ContactDesignation: yup.string().required("Required"),
  CountryCode: yup
    .string()
    .matches(/^\+[1-9]\d{0,3}$/, "Invalid-Code")
    .required("Required"),
  Phone1: yup.string().required("Required"),
  Phone2: yup.string().required("Required"),
  Phone3: yup.string().required("Required"),
  ContactEmail: yup.string().email("Invalid Email").required("Required"),
});
export const restaurantMealValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const amentiesValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const hotelTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  UploadKeyword: yup.string().required("Required"),
});
export const weekendValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  WeekendDays: yup.string().required("Required"),
});
export const hotelMealValidationSchema = yup.object().shape({
  Name : yup.string().required("Required")
});