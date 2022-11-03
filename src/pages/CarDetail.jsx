import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import HeaderBar from "../component/HeaderBar";
import ListHeader from "../component/ListHeader";
import ListItem from "../component/ListItem";
import moment from 'moment';

function CarDetail({navigation: navigate}) {
    const carDetailInfo = useLocation().state;
    const formatDate = (startDate) => {
        const week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
        const day = moment(startDate).format('MM DD E').split(" ");
        const dayOfWeek = week[day[2]];
        return day[0] + ' ' + day[1] + ' ' + dayOfWeek + ' 부터';
    }

    return(
        <div style={styled.wrap}>
            <HeaderBar backIconYn={true}/>
            <div style={styled.imageZone}><img src={carDetailInfo.attribute.imageUrl} width={390} /></div>
                <p>
                    <span style={{fontWeight: 'bold', fontSize: 20}}>{carDetailInfo?.attribute?.brand}</span> <br />
                    <span style={{fontWeight: 'bold', fontSize: 24}}>{carDetailInfo?.attribute?.name}</span>
                </p>
            {/*{renderDetailInfo()}*/}
            <ListHeader name={'차량 정보'} />
            <ListItem name={'차종'} value={carDetailInfo?.attribute?.segment} />
            <ListItem name={'연료'} value={carDetailInfo?.attribute?.fuelType} />
            <ListItem name={'이용 가능일'} value={formatDate(carDetailInfo?.startDate)} />
            <ListHeader name={'보험'} />
            <ListItem name={carDetailInfo?.insurance[0].name} value={carDetailInfo?.insurance[0].description} />
            <ListItem name={carDetailInfo?.insurance[1].name} value={carDetailInfo?.insurance[1].description} />
            <ListHeader name={'추가상품'} />
            <ListItem name={carDetailInfo?.additionalProducts[0]?.name} value={carDetailInfo?.additionalProducts[0]?.amount + ' 부터'} />
        </div>
    )
}

const styled={
    wrap: {
        width: 390,
    },
    imageZone: {
        width: 390,
    },
    carSimpleInfo: {

    },
    carDetailInfo: {

    }

}

export default CarDetail;
