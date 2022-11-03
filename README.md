## 배포링크

https://extraordinary-buttercream-adf878.netlify.app/

## 전체차량조회

```jsx
// pages/Home/Home.js

const Home = () => {
  const [queryObj, setQueryObj] = useState({ key: ["cars"], fn: getCars });

  const { data: cars, isLoading } = useQuery(queryObj.key, queryObj.fn);
  return (
    <S.PageContainer>
      {/*<Category setQueryObj={setQueryObj} />*/}
      <CarList cars={cars} isLoading={isLoading} />
    </S.PageContainer>
  );
};

export default Home;
```

```jsx
// pages/Home/CarList.js

const CarList = ({ cars, isLoading }) => {
  // if (isLoading) return <S.Message className="msg">불러오는 중</S.Message>;
  // if (cars.length === 0)
  //   return <S.Message className="msg">차량이 없습니다.</S.Message>;
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
```

- `Home`에서 리액트 쿼리이용 차량데이터를 받아옵니다.
- `CarList`에서 출력합니다.

<br>

## 차종별 조회

```jsx
// pages/Home/Catrgory.js

const Category = ({ setQueryObj }) => {
  const handleClickAllType = (e) => {
    setQueryObj({ key: ["cars"], fn: getCars });
    // setSelectedBtn(e.target.dataset.value);
  };
  const handleClickCType = (e) => {
    setQueryObj({ key: ["cars", "C"], fn: () => getCarsBySegment("C") });
    // setSelectedBtn(e.target.dataset.value);
  };

  const handleClickDType = (e) => {
    setQueryObj({ key: ["cars", "D"], fn: () => getCarsBySegment("D") });
    // setSelectedBtn(e.target.dataset.value);
  };
  const handleClickEType = (e) => {
    setQueryObj({ key: ["cars", "E"], fn: () => getCarsBySegment("E") });
    // setSelectedBtn(e.target.dataset.value);
  };
  const handleClickSUVType = (e) => {
    setQueryObj({ key: ["cars", "SUV"], fn: () => getCarsBySegment("SUV") });
    // setSelectedBtn(e.target.dataset.value);
  };

  // const [selectedBtn, setSelectedBtn] = useState("ALL");
  // const isSelected = (val) => selectedBtn === val;
  return (
    <S.CategoryContatiner>
      <S.Tag
        // selected={isSelected("ALL")}
        onClick={handleClickAllType}
        // data-value="ALL"
      >
        전체
      </S.Tag>
      <S.Tag
        // selected={isSelected("C")}
        onClick={handleClickCType}
        // data-value="C"
      >
        소형
      </S.Tag>
      <S.Tag
        // selected={isSelected("D")}
        onClick={handleClickDType}
        // data-value="D"
      >
        중형
      </S.Tag>
      <S.Tag
        // selected={isSelected("E")}
        onClick={handleClickEType}
        // data-value="E"
      >
        대형
      </S.Tag>
      <S.Tag
        // selected={isSelected("SUV")}
        onClick={handleClickSUVType}
        // data-value="SUV"
      >
        SUV
      </S.Tag>
    </S.CategoryContatiner>
  );
};
```

- 각 카테고리 버튼을 클릭하면 Home 컴포넌트로 `lifting state up`을 실행하고 `queryState`을 바꿉니다.

<br>

## 차종별 조회시 indicator

```jsx
// pages/Home/Category.js

const Category = ({ setQueryObj }) => {
  const [selectedBtn, setSelectedBtn] = useState("ALL");
  const isSelected = (val) => selectedBtn === val;

  const handleClickAllType = (e) => {
    // setQueryObj({ key: ["cars"], fn: getCars });
    setSelectedBtn(e.target.dataset.value);
  };
  const handleClickCType = (e) => {
    // setQueryObj({ key: ["cars", "C"], fn: () => getCarsBySegment("C") });
    setSelectedBtn(e.target.dataset.value);
  };

  const handleClickDType = (e) => {
    // setQueryObj({ key: ["cars", "D"], fn: () => getCarsBySegment("D") });
    setSelectedBtn(e.target.dataset.value);
  };
  const handleClickEType = (e) => {
    // setQueryObj({ key: ["cars", "E"], fn: () => getCarsBySegment("E") });
    setSelectedBtn(e.target.dataset.value);
  };
  const handleClickSUVType = (e) => {
    // setQueryObj({ key: ["cars", "SUV"], fn: () => getCarsBySegment("SUV") });
    setSelectedBtn(e.target.dataset.value);
  };

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
```

```jsx
// pages/Home/styles.js

export const Tag = styled(T)`
  color: ${({ selected }) => (selected ? "#ffffff" : "#000000")};
  background-color: ${({ selected }) => (selected ? "#000000" : "#d9d9d9")};
`;
```

- 각 태그버튼을 클릭 할 때 `selectedBtn` state를 data-set에 기입된 차량 segment로 바꿉니다.

- `isSeleted` 함수를 이용해 `selected` props 를 변화시키고 그에따라 배경 및 폰트색상이 변화합니다.

## 차량상세 조회

```jsx
// pages/Detail/Detail.js

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
```

- 리액트 쿼리이용 전체 차량조회 후 params로 받아온 id로 상세 차량을 조회합니다.
- Home 진입 후 Deteil 페이지로 진입한다면 캐시된 데이터를 이용해 기존 받아놓았던 데이터를 이용합니다.
