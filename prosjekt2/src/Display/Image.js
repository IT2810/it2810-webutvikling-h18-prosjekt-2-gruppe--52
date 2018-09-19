import {Component} from "react";
import React from "react";

class Image extends Component {

    render() {
        return(
            <img src={"img/" + this.props.imageCategory + "/" + this.props.activeTab + ".svg"} />
        );
    }
}

export default Image;
