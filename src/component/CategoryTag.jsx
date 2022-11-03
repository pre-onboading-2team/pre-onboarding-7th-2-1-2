import React, {useState} from "react";
import {CarService} from "../services";
function CategoryTag({name, carList, setCarList, setLoading}){

    const onClickCategory = async (e) => {
        try {
            setLoading(true);
            let segment = '';
            let fuelType = '';
            if (e.target.value ==='2'){
                segment = 'SUV';
            }else if (e.target.value ==='3') {
                segment = 'D';
            }else if (e.target.value === '4') {
                segment = 'C';
            }else{
                const response = await CarService.getCarAllList();
                setCarList(response.data.payload);
                return;
            }
            const response = await CarService.getCarList(fuelType,segment);
            if (response.status === 200) {
                setCarList(response.data.payload);
            }
            console.info(response);
        }catch (error ){
            console.error(error.data.messages);
        }finally {
            setLoading(false);
        }
    };



    return(
        <>
            <button className={name.name} value={name.id} style={styled.categoryTag} onClick={onClickCategory} >
                {name.name}
            </button>
        </>
    )
}

const styled={
    categoryTag: {
        borderRadius: 62,
        backgroundColor: '#D9D9D9',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop:10,
        paddingBottom:10,
        width: 62,
        textAlign: 'center',
        display: 'inline-block',
        margin: 5,
    }
}

export default CategoryTag
