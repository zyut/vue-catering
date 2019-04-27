import axios from "./axios";


export const menuListApi = data => axios.get("/menu/list", data);
export const carList = data => axios.get("/car/list", data);
export const submitCar = data => axios.post("/car/submit", data);
