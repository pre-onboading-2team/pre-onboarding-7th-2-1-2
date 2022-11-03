import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./styles";

const Header = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [isHome, setIsHome] = useState(false);
  const isHomeURL = (params) => Boolean(Object.keys(params).length === 0);
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  useEffect(() => {
    if (isHomeURL(params)) {
      setIsHome(true);
      setTitle("전체차량");
      return;
    }
    setIsHome(false);
    setTitle("차량상세");
  }, [params]);

  return (
    <S.Header>
      {!isHome && (
        <S.Button onClick={handleBack}>
          <IoArrowBack />
        </S.Button>
      )}
      <div className="title">{title}</div>
    </S.Header>
  );
};

export default Header;
