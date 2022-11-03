import React, {useEffect, useState} from "react";
import CategoryTag from "./CategoryTag";
import Loading from "./Loading";
import CarItem from "./CarItem";
import Empty from "./Empty";

function Category({carList, setCarList, loading, setLoading}) {
    const category= [
        {
            id: 1,
            name: '전체',
        },
        {
            id: 2,
            name: '대형',
        },
        {
            id: 3,
            name: '중형',
        },
        {
            id: 4,
            name: '소형',
        },
    ];

    const renderCategory = () =>{
        return(
            category.map(i => (
                <CategoryTag name={i} key={'category' + i.id} carList={carList} setCarList={setCarList} setLoading={setLoading} />
            ))
        )
    }

    const renderCarList = () => {
        return (loading ? <Loading/> : (
                carList.length === 0 ? <Empty/> : (
                    carList.map((data, index) => (
                        <CarItem key={'car' + index} info={data} loading={loading} setLoading={setLoading}/>
                    ))
                )
            )
        );
    };

    return (
        <>
            <div style={styled.categoryZone}>
                {renderCategory()}
            </div>
            <div>
                {renderCarList()}
            </div>
        </>
    );
}

const styled = {
    categoryZone: {
        width: 390,
        borderBottom: 'solid',
    }
}

export default Category;
