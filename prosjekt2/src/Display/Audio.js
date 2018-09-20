import {Component} from "react";
import React from "react";

class Audio extends Component {

    render() {
        return(
            <audio className="Item" controls ref={this.props.refCallback}>
                <source src={this.props.path} type='audio/mpeg' />
            </audio>
        )
    }

}

export default Audio;