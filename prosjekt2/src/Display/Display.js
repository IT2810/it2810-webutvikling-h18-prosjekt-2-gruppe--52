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
		//console.log(this.props.textData);
		//console.log(this.props.activeTab);
		//console.log(this.props.textCategoryNum);
		
        return(
            <div>
                <Text textData={this.props.textData} activeTab={this.props.activeTab}
                    textCategoryNum={this.props.textCategoryNum} textCategories={this.props.textCategories} textFiles={this.props.textFiles}/>

                <Image />

                <Audio path={this.getAudioPath()} refCallback={this.props.refCallback}/>
            </div>
        );
    }
}

export default Display;