import React, {Component} from 'react';
import './App.css';
import Choices from './Choices';
import Tabs from './Tabs';
import Display from './Display/Display';


class App extends Component {
    constructor(props) {
        super(props);

        let textCategories = ['commercial', 'philosophical', 'shouts'], // TODO: change these to actual category strings
            imageCategories = ['Abstract', 'Icons', 'Mixed bag'], // TODO: change these to actual category strings
            audioCategories = ['household item', 'spooky', 'vehicles'];

        this.state = {

            activeTab: 1,
            textCategoryNum: 0,
            imageCategoryNum: 0,
            audioCategoryNum: 0,

            textCategories: ['commercial', 'philosophical', 'shouts'], // TODO: change these to actual category strings
            imageCategories: imageCategories, // TODO: change these to actual category strings
            audioCategories: ['household item', 'spooky', 'vehicles'],

            textFiles: [ // TODO: when changing category strings, make these names the same
                ['commercial1.json', 'commercial2.json', 'commercial3.json', 'commercial4.json'], // TODO: make these the actual file names
                ['philosophical1.json', 'philosophical2.json', 'philosophical3.json', 'philosophical4.json'],
                ['shouts1.json', 'shouts2.json', 'shouts3.json', 'shouts4.json']
            ],

            textData: [
				["","","",""],
				["","","",""],
				["","","",""]
			],

            imageFiles: [ // TODO: when changing category strings, make these names the same
                ['file1', 'file2', 'file3', 'file4'], // TODO: make these the actual file names
                ['file1', 'file2', 'file3', 'file4'],
                ['file1', 'file2', 'file3', 'file4']
            ],
            imageData: Array(3).fill(Array(4).fill(null)),

            audioFiles: [
                ['refrigerator.mp3', 'scissors.mp3', 'soda-can-opening.mp3', 'twisting-ziplock-bag.mp3'],
                ['freaky-ambience.mp3', 'space-boom.mp3', 'space-climax.mp3', 'super-specific-landing.mp3'],
                ['locomotive-diesel-approach-pass-on-bridge.mp3', 'locomotive-steam-train-whistle.mp3',
                    'motorcycle-suzuki-gsx1300-hayabusa-approach-pass-fast.mp3', 'train-freight-emergency-stop.mp3']
            ]
            // No audioData required because this will be controlled enitrely in the audio tag
        };
    }

    render() {

        return (

            <div className="App">

                <Choices
                    textChoiceData={
                        {
                            fileType: 'text',
                            categories: this.state.textCategories,
                            changeFunction: this.changeTextCategory
                        }
                    }
                    imageChoiceData={
                        {
                            fileType: 'image',
                            categories: this.state.imageCategories,
                            changeFunction: this.changeImageCategory
                        }
                    }
                    audioChoiceData={
                        {
                            fileType: 'audio',
                            categories: this.state.audioCategories,
                            changeFunction: this.changeAudioCategory
                        }
                    }
                />

                <Tabs
                    activeTab={this.state.activeTab}
                    changeTab={this.changeTab}/>

                <Display
                    textFiles={this.state.textFiles}
                    textData={this.state.textData}
                    textCategories={this.state.textCategories}
                    textCategoryNum={this.state.textCategoryNum}
                    saveTextFunction={this.saveText}
					test={this.state.test}

                    imageFiles={this.state.imageFiles}
                    imageData={this.state.imageData}
                    imageCategories={this.state.imageCategories}
                    imageCategoryNum={this.state.imageCategoryNum}
                    saveImageFunction={this.saveImage}

                    audioFiles={this.state.audioFiles}
                    audioCategories={this.state.audioCategories}
                    audioCategoryNum={this.state.audioCategoryNum}
                    refCallback={el => this.audioRef = el}
                    // No saveAudioFunction because this is chaced automatically by the browser

                    activeTab={this.state.activeTab}
                />
            </div>
        );
    }

    updateText = () => {

    };

    changeTextCategory = (categoryNum) => {
        this.setState({textCategoryNum: categoryNum},
            this.saveText
        );
    };

    changeImageCategory = (categoryNum) => {
        this.setState({imageCategoryNum: categoryNum});
    };

    changeAudioCategory = (categoryNum) => {
        this.setState({audioCategoryNum: categoryNum});
        this.audioRef.load()
    };

    changeTab = (tabNumber) => {

        this.setState({activeTab: tabNumber},

			() => {this.audioRef.load(); this.saveText()}
        );
    };


	saveText() {
        let textIsNotSaved = this.state.textData[this.state.textCategoryNum][this.state.activeTab-1] === "";

        if (textIsNotSaved) {

            let textPath = `/text/${this.state.textCategories[this.state.textCategoryNum]}/${this.state.textFiles[this.state.textCategoryNum][this.state.activeTab - 1]}`;
            fetch(textPath)
                .then(resp => resp.json())
                .then(data => {
                    let newTextData = this.state.textData.slice();
                    newTextData[this.state.textCategoryNum][this.state.activeTab - 1] = data.tekst;
                    this.setState(
                        {
                            textData: newTextData,
                        });
                });
        }
	}


	componentDidMount(){
	    this.saveText();
	}




    saveImage(categoryNum, tabNumber) {

    }

}

export default App;
