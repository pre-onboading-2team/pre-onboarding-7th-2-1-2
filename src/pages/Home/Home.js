import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getCars } from "../../apis/cars";
import CarList from "./CarList";
import Category from "./Category";
import * as S from "./styles";

const Home = () => {
  const [queryObj, setQueryObj] = useState({ key: ["cars"], fn: getCars });

  const { data: cars, isLoading } = useQuery(queryObj.key, queryObj.fn);
  return (
    <S.PageContainer>
      <Category setQueryObj={setQueryObj} />
      <CarList cars={cars} isLoading={isLoading} />
    </S.PageContainer>
  );
};

export default Home;
