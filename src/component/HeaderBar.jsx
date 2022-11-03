import React from "react";
import BackIcon from '../assets/back_icon.png';
import {useNavigate} from "react-router-dom";

function HeaderBar({backIconYn}){
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div style={styled.headerWrapper}>
                {backIconYn ? (
                    <div onClick={goBack}>
                        <img src={BackIcon} width={30} height={30} />
                    </div> )  : null }
                <p style={styled.headerText}>전체차량</p>
            </div>
        </>
    );
}


const styled={
    headerWrapper: {
        width: 390,
        height: 60,
        borderBottom: 'solid',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 700,
        fontSize: 17,
        paddingLeft: '35%'
    }
}

export default HeaderBar;
