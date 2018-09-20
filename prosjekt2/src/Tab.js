import React from "react";

function Tab(props) {
    /* props:
            activity: string, either active or inactive
            tabNumber: int
            changeTab: function(int)
			*/

    return (
		<div className="Tab">
        <button className={'Tab '+props.activity} onClick={() => props.changeTab(props.tabNumber)}>
            {'Utstilling ' + props.tabNumber}
        </button>
		</div>
    );
}

export default Tab;