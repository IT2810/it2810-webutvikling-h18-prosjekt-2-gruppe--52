import {Component} from "react";
import React from "react";
import Choice from './Choice';

// Represents all the of the Choice components for all the file types
class Choices extends Component {
    /* props:
            textChoiceData, imageChoiceData, audioChoiceData:
                {
                    fileType: string,
                    categories: [string...],
                    changeFunction: function(event)
                } */

    render() {
        return(
            <div className='Choices'>
				
				<h2>Velg kategorier:</h2>

                <h3 className='ChoiceHeader'>Tekst</h3>
                <Choice
                    fileType={this.props.textChoiceData.fileType}
                    categories={this.props.textChoiceData.categories}
                    changeFunction={this.props.textChoiceData.changeFunction}/>

                <h3 className='ChoiceHeader'>Bilde</h3>
                <Choice
                    fileType={this.props.imageChoiceData.fileType}
                    categories={this.props.imageChoiceData.categories}
                    changeFunction={this.props.imageChoiceData.changeFunction}/>

                <h3 className='ChoiceHeader'>Lyd</h3>
                <Choice
                    fileType={this.props.audioChoiceData.fileType}
                    categories={this.props.audioChoiceData.categories}
                    changeFunction={this.props.audioChoiceData.changeFunction}/>
            </div>
        );

    }
}

export default Choices