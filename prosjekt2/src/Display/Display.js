import {Component} from "react";
import React from "react";
import Text from './Text';
import Image from './Image';
import Audio from './Audio';

class Display extends Component {

    getAudioPath() {

        let audioCategoryName = this.props.audioCategories[this.props.audioCategoryNum],
            audioFileName = this.props.audioFiles[this.props.audioCategoryNum][this.props.activeTab-1];

        return ('audio/' + audioCategoryName + '/' + audioFileName).replace(' ', '-'); // Convert spaces to dashes
    }

    render() {
        return(
            <div>
                <Text />

                <Image />

                <Audio path={this.getAudioPath()} refCallback={this.props.refCallback}/>
            </div>
        );
    }
}

export default Display;