import {API} from "./api";

export const getCarAllList = () => {
    const url = 'cars';
    return API.get(url);
}

export const getCarList = (fuelType, segment) => {
    const url = `cars?fuelType=${fuelType}&segment=${segment}`;
    console.info(API.get(url));
    return API.get(url);
}
