import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "styled-components";
import Nothing from "../../components/Nothing";

const Main = () => {
  const [car, setCar] = useState([]);
  const [value, setValue] = React.useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getCar = async () => {
    await axios
      .get("https://preonboarding.platdev.net/api/cars")
      .then((result) => {
        setCar(result.data.payload);
        setIsLoading(false);
        console.log(result.data.payload);
        console.log(car);
      });
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <MainContainer>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <Box
          sx={{
            width: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ margin: "0 auto", width: "390px", height: "40px" }}
              >
                <Tab
                  label="전체"
                  value="1"
                  sx={{ width: "62px", height: "27px" }}
                />
                <Tab
                  label="대형"
                  value="2"
                  sx={{ width: "62px", height: "27px" }}
                />
                <Tab
                  label="중형"
                  value="3"
                  sx={{ width: "62px", height: "27px" }}
                />
                <Tab
                  label="소형"
                  value="4"
                  sx={{ width: "62px", height: "27px" }}
                />
                <Tab
                  label="SUV"
                  value="5"
                  sx={{ width: "62px", height: "27px" }}
                />
              </TabList>
            </Box>
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
              {" "}
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
          </TabContext>
        </Box>
      )}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div``;
