import { useNavigate } from "react-router-dom";

import carInfoObject from "../../constants/carInfoObject";
import * as S from "./styles";
const CarItem = (props) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/${props.id}`);
  return (
    <S.CarItemContainer onClick={handleNavigate}>
      <div>
        <div className="brand-and-name">
          <div>{props.brand}</div>
          <div>{props.name}</div>
        </div>
        <div className="info">
          <div>{carInfoObject[props.segment]}</div>
          <div>/</div>
          <div>{carInfoObject[props.fuelType]}</div>
        </div>
        <div>월 {props.amount.toLocaleString("ko-KR")}원 부터</div>
        <div>{props.createdAt}</div>
      </div>

      <S.Image src={`${props.imageUrl}`} alt="" />
    </S.CarItemContainer>
  );
};

export default CarItem;
