import React, {useState} from "react";
import Gray from '../assets/gray.png';
import {useNavigate, useNavigation} from "react-router-dom";
import {ROUTER} from "../router/routes";
import Loading from "./Loading";

function CarItem({info, loading, setLoading}){
    const navigate = useNavigate();
    const simpleInfo = info.attribute;

    const onClickItem = (e) => {
        navigate(ROUTER.CAR_DETAIL, {state: info})
    }

    return(
        loading ? <Loading /> : (
            <div style={styled.itemWrapper} onClick={onClickItem}>
                <div style={styled.infoZone}>
                    <div>
                        <p style={styled.itemInfoText1}>{simpleInfo.brand}</p>
                        <p style={styled.itemInfoText1}>{simpleInfo.name}</p>
                    </div>
                    <div style={{}}>
                        <p style={styled.itemInfoText2}>
                            <span>{simpleInfo.segment} / </span> <span> {simpleInfo.fuelType}</span>
                        </p>
                        <p style={styled.itemInfoText2}>월 {info.amount} 원 부터</p>
                    </div>
                </div>
                <div style={styled.img}>
                    <img src={simpleInfo.imageUrl} width={'100%'} />
                </div>
            </div>
        )

    )
}

const styled = {
    itemWrapper: {
        width: 390,
        height: 130,
        borderBottom: 'solid',
    },
    itemInfoText1: {
        fontWeight: 700,
        fontSize: 14,
    },
    itemInfoText2: {
        fontWeight: 500,
        fontSize: 12,
    },
    infoZone: {
        display: 'inline-block',
        width: 136,
        height: 72,
        paddingLeft: 20,
    },
    img: {
        display: 'inline-block',
        width: 152,
        paddingRight: 20,
        paddingLeft: 62,
    },
}

export default CarItem;
