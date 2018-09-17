import {Component} from "react";
import React from "react";

class Text extends Component {


	
    render() {
        return(
            <p>
			{this.props.textData[this.props.textCategoryNum][this.props.activeTab-1]}
			</p>
		
        );
    }
}

export default Text;