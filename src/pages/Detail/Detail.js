import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getCars } from "../../apis/cars";
import carInfoObject from "../../constants/carInfoObject";
import AdditionalProducts from "./AdditionalProducts";
import CarInfo from "./CarInfo";
import Insurance from "./Insurance";
import Main from "./Main";
import * as S from "./styles";

const Detail = () => {
  const { data: cars, isLoading } = useQuery(["cars"], getCars);
  const { id } = useParams();

  if (isLoading) return <S.Message>불러오는 중</S.Message>;
  const [carData] = cars.filter((carData) => String(carData.id) === id);
  const { brand, name, segment, fuelType, imageUrl } = carData.attribute;
  const { startDate, amount, insurance, additionalProducts } = carData;

  return (
    <div>
      <Main imageUrl={imageUrl} name={name} brand={brand} amount={amount} />
      <CarInfo
        segment={carInfoObject[segment]}
        fuelType={carInfoObject[fuelType]}
        startDate={startDate}
      />
      <Insurance insurances={insurance} />
      <AdditionalProducts products={additionalProducts} />
    </div>
  );
};

export default Detail;
