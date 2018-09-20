import {Component} from "react";
import React from "react";

// Represents the category choice of one file type
class Choice extends Component {
    /* props:
            fileType: string
            categories: array of strings
            changeFunction: function(event) */

    constructor(props) {
        super(props);

        let safeFileType = props.fileType.replace(' ', '-'); // This is to allow spaces in category name
        let safeRadioIDs = props.categories.map( // The IDs used by the radiobuttons
            (category) => safeFileType + '-' + category.replace(' ', '-')
        );

        this.state = {
            safeFileType: safeFileType,
            safeInputIDs: safeRadioIDs,
            checkedRadio: safeRadioIDs[0]
        };
    }

    handleChange = (event, radioNum) => {
        this.setState({checkedRadio: event.target.id});
        this.props.changeFunction(radioNum); // This (should) change the category state of the filetype in the App
    };

    renderRadioButtons() {
        let radioButtons = [];

        // Add radiobuttons and labels in a list and return this list
        for (let n=0; n<this.state.safeInputIDs.length; n++) {
            let safeInputID = this.state.safeInputIDs[n];
            let category = this.props.categories[n];

            radioButtons.push(
                [
                    <input type='radio' id={safeInputID} key={safeInputID} name={this.state.safeFileType}
                           onChange={(event) => this.handleChange(event, n)} checked={safeInputID === this.state.checkedRadio} />,

                    <label className='RadioLabel' htmlFor={safeInputID} key={safeInputID+'-label'}>
                        {category}
                    </label>
                ]
            );
        }

        return radioButtons;
    }

    render() {

        return (
            <form className="Choice">
                {this.renderRadioButtons()}
            </form>
        )
    }
}

export default Choice