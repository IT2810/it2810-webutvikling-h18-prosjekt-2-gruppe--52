import {Component} from "react";
import React from "react";

class Text extends Component {
	

    render() {
		
        return(
            <p className="Item">
			{this.props.textData[this.props.textCategoryNum][this.props.activeTab-1]}
			</p>
		
        );
		
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.textData[this.props.textCategoryNum][this.props.activeTab - 1] !== "";
    }
}

export default Text;