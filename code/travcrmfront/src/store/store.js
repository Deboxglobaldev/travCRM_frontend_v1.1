import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../reducer/authReducers";
// import thunk from "redux-thunk";     /////this line commented by nitish
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "redux";


const reducers = combineReducers({
    auth: authReducers,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistReducers,
    // middleware: [thunk],   /////this line commented by nitish
});

export default store;
