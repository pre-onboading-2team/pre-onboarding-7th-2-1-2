import React, {useState} from "react";

function ListItem({name, value}) {
    return(
        <div style={styled.listItemWrapper}>
            {/*<p style={{justifyContent: 'space-around'}}>*/}
                <span style={styled.itemText1}>{name}</span>
                <span style={styled.itemText2}>{value}</span>
            {/*</p>*/}
        </div>
    )
}

const styled = {
    listItemWrapper: {
        width: 391,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText1: {
        width: 114,
        fontWeight: 'bold',
        fontSize: 17,
        paddingLeft: 15,
    },
    itemText2: {
        fontWeight: 400,
        fontSize: 17,
        paddingRight: 15
    }

}
export default ListItem;
