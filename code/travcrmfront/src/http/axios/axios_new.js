import axios from "axios";

const axiosNew = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosOther = axios.create({
  baseURL: "https://nxtrav-other.azurewebsites.net/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

console.log('This is axios testing ', axiosOther);
export {
  axiosNew,
  axiosOther
};


