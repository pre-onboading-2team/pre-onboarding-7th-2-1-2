import React from "react";
const ListHeader = ({name}) => {
    return(
        <div style={styled.listHeader}>
            <p style={styled.headerText}>{name}</p>
        </div>
    )
}

const styled = {
    listHeader: {
        width: 391,
        height: 48,
        backgroundColor: '#0094FF',
        display: 'flex',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 700,
        fontSize: 17,
        color: 'white',
        paddingLeft: 20,
    }
}

export default ListHeader;
