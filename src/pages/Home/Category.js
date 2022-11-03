import { useState } from "react";

import { getCars } from "../../apis/cars";
import { getCarsBySegment } from "../../apis/cars";
// import RadioButton from "./RadioButton";
import * as S from "./styles";

const Category = ({ setQueryObj }) => {
  const handleClickAllType = (e) => {
    setQueryObj({ key: ["cars"], fn: getCars });
    setSelectedBtn(e.target.dataset.value);
  };
  const handleClickCType = (e) => {
    setQueryObj({ key: ["cars", "C"], fn: () => getCarsBySegment("C") });
    setSelectedBtn(e.target.dataset.value);
  };

  const handleClickDType = (e) => {
    setQueryObj({ key: ["cars", "D"], fn: () => getCarsBySegment("D") });
    setSelectedBtn(e.target.dataset.value);
  };
  const handleClickEType = (e) => {
    setQueryObj({ key: ["cars", "E"], fn: () => getCarsBySegment("E") });
    setSelectedBtn(e.target.dataset.value);
  };
  const handleClickSUVType = (e) => {
    setQueryObj({ key: ["cars", "SUV"], fn: () => getCarsBySegment("SUV") });
    setSelectedBtn(e.target.dataset.value);
  };

  const [selectedBtn, setSelectedBtn] = useState("ALL");
  const isSelected = (val) => selectedBtn === val;
  return (
    <S.CategoryContatiner>
      <S.Tag
        selected={isSelected("ALL")}
        onClick={handleClickAllType}
        data-value="ALL"
      >
        전체
      </S.Tag>
      <S.Tag
        selected={isSelected("C")}
        onClick={handleClickCType}
        data-value="C"
      >
        소형
      </S.Tag>
      <S.Tag
        selected={isSelected("D")}
        onClick={handleClickDType}
        data-value="D"
      >
        중형
      </S.Tag>
      <S.Tag
        selected={isSelected("E")}
        onClick={handleClickEType}
        data-value="E"
      >
        대형
      </S.Tag>
      <S.Tag
        selected={isSelected("SUV")}
        onClick={handleClickSUVType}
        data-value="SUV"
      >
        SUV
      </S.Tag>
    </S.CategoryContatiner>
  );
};

export default Category;
