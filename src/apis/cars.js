import axios from "axios";

export const getCars = async () => {
  const { data } = await axios.get(
    "https://preonboarding.platdev.net/api/cars"
  );
  return data.payload;
};

export const getCarsBySegment = async (segment) => {
  const { data } = await axios.get(
    `https://preonboarding.platdev.net/api/cars?segment=${segment}`
  );
  return data.payload;
};
