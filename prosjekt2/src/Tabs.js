import {Component} from "react";
import React from "react";
import Tab from './Tab';

class Tabs extends Component {
    /* props:
            activeTab: int, the number of the active tab
            tabNumber: int, the number of this tab */

    renderTab(tabNumber) {

        if (tabNumber === this.props.activeTab) {
            return <Tab activity='Active'
                        changeTab={this.props.changeTab}
                        tabNumber={tabNumber} />

        } else {
            return <Tab activity='Inactive'
                        changeTab={this.props.changeTab}
                        tabNumber={tabNumber} />
        }
    }

    render() {
        return(
            <div>
                {this.renderTab(1)}
                {this.renderTab(2)}
                {this.renderTab(3)}
                {this.renderTab(4)}
            </div>
        );
    }
}

export default Tabs;