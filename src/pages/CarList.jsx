import React, {useCallback, useEffect, useState} from "react";
import Category from "../component/Category";
import HeaderBar from "../component/HeaderBar";
import CarItem from "../component/CarItem";
import {CarService} from "../services";
import Empty from "../component/Empty";
import Loading from "../component/Loading";

function CarList() {
    const [loading, setLoading] = useState(false);
    const [carList, setCarList] = useState([]);
    useEffect(() => {
        getCarList();
    }, []);

    const getCarList = useCallback( async () => {
        try{
            setLoading(true);
            const response = await CarService.getCarAllList();
            if (response.status === 200) {
                setCarList(response.data.payload);
            }
        }catch (error ){
            console.error(error.message);
        }finally {
            setLoading(false);
        }
    }, [setCarList,]);

    return (
        <div style={{width: 390}}>
            <HeaderBar />
            <Category carList={carList} setCarList={setCarList} loading={loading} setLoading={setLoading} />
        </div>
    );
}

export default CarList;
