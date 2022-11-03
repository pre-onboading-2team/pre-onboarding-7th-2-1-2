import CarItem from "./CarItem";
import * as S from "./styles";

const CarList = ({ cars, isLoading }) => {
  if (isLoading) return <S.Message className="msg">불러오는 중</S.Message>;
  if (cars.length === 0)
    return <S.Message className="msg">차량이 없습니다.</S.Message>;
  return (
    <ul>
      {cars.map((carData) => {
        const { name, brand, segment, fuelType, imageUrl } = carData.attribute;
        const { id, amount } = carData;
        return (
          <CarItem
            key={id}
            id={id}
            name={name}
            brand={brand}
            segment={segment}
            fuelType={fuelType}
            amount={amount}
            imageUrl={imageUrl}
          />
        );
      })}
    </ul>
  );
};

export default CarList;
