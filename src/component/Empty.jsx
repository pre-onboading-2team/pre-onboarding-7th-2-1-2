import React from "react";

function Empty() {
    return (
        <div style={styled.empty}>
            <p>차량이 없습니다.</p>
        </div>
    )
}


const styled = {
    empty: {
        width: 390,
        height: 744,
        position: "absolute",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
};

export default Empty;
