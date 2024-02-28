import * as yup from 'yup';

export const stateInitialValue = {
    Name: "",
    CountryId:"1",
    Status: "1",
    StateId: "1",
    AddedBy:"1",
    UpdatedBy:"1"
}

export const countryInitialValue = {
    id: "",
    Name: "",
    ShortName: "",
    SetDefault: "0",
    Status: "1",
    AddedBy: "1",
    UpdatedBy: "1",
}

export const stateValidationSchema = yup.object().shape({
    Name:yup.string().min(3).max(20).required('State Name Required'),
    CountryId:yup.string().required('Select Country'),
    Status:yup.string().required('Select Status'),
})

export const countryValidationSchema = yup.object().shape({
    Name:yup.string().min(3).max(20).required('Name Required'),
    ShortName:yup.string().required('ShortName Required')
})