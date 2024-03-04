import * as yup from 'yup';

export const countryInitialValue = {
    id: "",
    Name: "",
    ShortName: "",
    SetDefault: "0",
    Status: "1",
    AddedBy: "1",
    UpdatedBy: "0"
}

export const stateInitialValue = {
    id:"",
    Name: "",
    CountryId:"",
    Status: "1",
    AddedBy:"1"
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
    Name:yup.string().min(3).max(20).required('Required'),
    ShortName:yup.string().required('Required')
})

export const stateValidationSchema = yup.object().shape({
    Name:yup.string().min(3).max(20).required('Required'),
    CountryId:yup.string().required('Required')
})

export const cityValidationSchema = yup.object().shape({
    Name:yup.string().required('Required'),
    StateId:yup.string().required('Required'),
    CountryId:yup.string().required('Required')
})