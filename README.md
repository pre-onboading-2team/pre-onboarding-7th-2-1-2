## 2주차 1번째 과제(Car_List) 구현사항

</br>

# 메인페이지

</br>

- ### API에서 오는 데이터를 원하는 이름으로 불러오기

```javascript
//ItemList.js
let segmentChange = segment.replace(/(C|D|E)/g, function (v) {
    switch (v) {
      case "C":
        return "소형";
      case "D":
        return "중형";
      case "E":
        return "대형";
    }
  });

  let fuelTypeChange = fuelType.replace(/(gasoline|ev|hybrid)/g, function (v) {
    switch (v) {
      case "gasoline":
        return "가솔린";
      case "ev":
        return "전기";
      case "hybrid":
        return "하이브리드";
    }
  });
```


API에서 오는 segment와fuelType의 데이터를 원하는 값으로 변화시키는 코드입니다. 


</br>

- ### 이슈목록에 필요한 요소만 이슈 아이템으로 보내기

```javascript
//Main.js
 {isLoading ? (
        <p>loading...</p>
      ) : (
            <TabPanel
              value="1"
              sx={{ margin: "0 auto", width: "390px", height: "120px" }}
            >
              {car &&
                car.map((item, i) => (
                  <ItemList
                    key={i}
                    item={item}
                    name={item.attribute.name}
                    brand={item.attribute.brand}
                    segment={item.attribute.segment}
                    fuelType={item.attribute.fuelType}
                    amount={item.amount}
                    img={item.attribute.imageUrl}
                    id={item.id}
                  />
                ))}
            </TabPanel>
            <TabPanel
              value="2"
              sx={{ margin: "0 auto", width: "390px", height: "120px" }}
            >
              {car && !car.length && <Nothing />}
              {car &&
                car
                  .filter((item) => item.attribute.segment === "E")
                  .map((item, i) => {
                    <ItemList
                      key={i}
                      item={item}
                      name={item.attribute.name}
                      brand={item.attribute.brand}
                      segment={item.attribute.segment}
                      fuelType={item.attribute.fuelType}
                      amount={item.amount}
                      img={item.attribute.imageUrl}
                      id={item.id}
                    />;
                  })}
            </TabPanel>
            <TabPanel
              value="3"
              sx={{ margin: "0 auto", width: "390px", height: "120px" }}
            >
              {" "}
              {car &&
                car
                  .filter((item) => item.attribute.segment === "D")
                  .map((item, i) => (
                    <ItemList
                      key={i}
                      item={item}
                      name={item.attribute.name}
                      brand={item.attribute.brand}
                      segment={item.attribute.segment}
                      fuelType={item.attribute.fuelType}
                      amount={item.amount}
                      img={item.attribute.imageUrl}
                      id={item.id}
                    />
                  ))}
            </TabPanel>
            <TabPanel
              value="4"
              sx={{ margin: "0 auto", width: "390px", height: "120px" }}
            >
              {car &&
                car
                  .filter((item) => item.attribute.segment === "C")
                  .map((item, i) => (
                    <ItemList
                      key={i}
                      item={item}
                      name={item.attribute.name}
                      brand={item.attribute.brand}
                      segment={item.attribute.segment}
                      fuelType={item.attribute.fuelType}
                      amount={item.amount}
                      img={item.attribute.imageUrl}
                      id={item.id}
                    />
                  ))}
            </TabPanel>
            <TabPanel
              value="5"
              sx={{ margin: "0 auto", width: "390px", height: "120px" }}
            >
              {car &&
                car
                  .filter((item) => item.attribute.segment === "SUV")
                  .map((item, i) => (
                    <ItemList
                      key={i}
                      item={item}
                      name={item.attribute.name}
                      brand={item.attribute.brand}
                      segment={item.attribute.segment}
                      fuelType={item.attribute.fuelType}
                      amount={item.amount}
                      img={item.attribute.imageUrl}
                      id={item.id}
                    />
                  ))}
            </TabPanel>
          </MainContainer>
      )}
```

로딩 상태인 경우 로딩을 출력하고 아닌 경우 데이터를 출력하도록 했습니다.
&&을 사용하여 데이터가 불러와졌을 때만 출력되도록 해서 예상치 못한 undefined출력을 막았습니다.
filter함수를 통해서 원하는 데이터를 분리하여 출력했습니다.

</br>


#TODO

-상세페이지 이동

-버튼으로 원하는 종류만 출력하기

-신규 버튼 띄우기

-"차량이 없습니다" 띄우기

