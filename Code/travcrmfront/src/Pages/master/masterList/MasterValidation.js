import * as yup from 'yup';

export const countryInitialValue = {
    id: "",
    Name: "",
    ShortName: "",
    SetDefault: "0",
    Status: "1",
    AddedBy: "1",
    UpdatedBy: "1",
}

export const countrySavedValue = {
    id:"1",
    Name:"India",
    ShortName:"IND",
    SetDefault:"1",
    Status:"1",
    AddedBy:"1",
    UpdatedBy:"1"
}

export const stateInitialValue = {
    id:"",
    Name: "",
    CountryId:"1",
    Status: "1",
    StateId: "1",
    AddedBy:"1",
    UpdatedBy:"1"
}

export const cityInitialValue = {
    Id:"",
    CountryId: "1",
    StateId: "1",
    Name: "",
    Status: "1",
    AddedBy: "1",
    UpdatedBy: "1",
    Created_at: "2024-02-26 08:54:31",
    Updated_at: null
}

export const countryValidationSchema = yup.object().shape({
    Name:yup.string().min(3).max(20).required('Name Required'),
    ShortName:yup.string().required('ShortName Required')
})

export const stateValidationSchema = yup.object().shape({
    Name:yup.string().min(3).max(20).required('State Name Required'),
    CountryId:yup.string().required('Select Country'),
    Status:yup.string().required('Select Status'),
})

export const cityValidationSchema = yup.object().shape({
    Name:yup.string().required('City Name Required'),
    StateId:yup.string().required('Select State Name'),
    CountryId:yup.string().required('Select Country Name'),
    Status:yup.string().required('Select Status')
})