import React from "react";
function Loading() {
    return(
        <div style={styled.loading}>

            <p>불러오는 중</p>
        </div>
    )
}

const styled = {
    loading: {
        width: 390,
        height: 744,
        position: "absolute",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
}

export default Loading;
