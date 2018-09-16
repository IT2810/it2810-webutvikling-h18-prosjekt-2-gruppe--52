import React from "react";

function Tab(props) {
    /* props:
            activity: string, either active or inactive
            tabNumber: int
            changeTab: function(int) */

    return (
        <button className={'Tab '+props.activity} onClick={() => props.changeTab(props.tabNumber)}>
            {'Tab ' + props.tabNumber}
        </button>
    );
}

export default Tab;