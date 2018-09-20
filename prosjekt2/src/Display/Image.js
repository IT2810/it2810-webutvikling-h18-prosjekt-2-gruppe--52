import {Component} from "react";
import React from "react";

class Image extends Component {

    render() {

        let parser = new DOMParser();
        let svgString = this.props.imageData[this.props.imageCategoryNum][this.props.activeTab-1];
        let doc = parser.parseFromString(svgString, "image/svg+xml");



        console.log(doc);

        return(
            <div dangerouslySetInnerHTML={{__html: svgString}} />
        );
    }
}

export default Image;
