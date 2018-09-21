import React, {Component} from 'react';
import './App.css';
import Choices from './Choices';
import Tabs from './Tabs';
import Display from './Display/Display';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);

        let textCategories = ['commercial', 'philosophical', 'shouts'],
            imageCategories = ['circles', 'squares', 'triangles'],
            audioCategories = ['household item', 'spooky', 'vehicles'];

        this.state = {

            activeTab: 1,
            textCategoryNum: 0,
            imageCategoryNum: 0,
            audioCategoryNum: 0,

            textCategories: ['commercial', 'philosophical', 'shouts'],
            imageCategories: ['circles', 'squares', 'triangles'],
            audioCategories: ['household item', 'spooky', 'vehicles'],

            textFiles: [
                ['commercial1.json', 'commercial2.json', 'commercial3.json', 'commercial4.json'],
                ['philosophical1.json', 'philosophical2.json', 'philosophical3.json', 'philosophical4.json'],
                ['shouts1.json', 'shouts2.json', 'shouts3.json', 'shouts4.json']
            ],

            textData: [
				["","","",""],
				["","","",""],
				["","","",""]
			],

            imageFiles: [ // TODO: when changing category strings, make these names the same
                ['1.svg', '2.svg', '3.svg', '4.svg'],
                ['1.svg', '2.svg', '3.svg', '4.svg'],
                ['1.svg', '2.svg', '3.svg', '4.svg']
            ],
            imageData: [
				["","","",""],
				["","","",""],
				["","","",""]
			],

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
				<h1>Moderne Kunstutstilling</h1>

                <div className="ChoicesAndTabs">
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
                </div>

                <Display className="Display"
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


    changeTextCategory = (categoryNum) => {
        this.setState({textCategoryNum: categoryNum},
            this.saveText
        );
    };

    changeImageCategory = (categoryNum) => {
        this.setState({imageCategoryNum: categoryNum},
            this.saveImage
        );
    };

    changeAudioCategory = (categoryNum) => {
        this.setState({audioCategoryNum: categoryNum});
        this.audioRef.load()
    };

    changeTab = (tabNumber) => {

        this.setState({activeTab: tabNumber},

			() => {this.audioRef.load(); this.saveText(); this.saveImage()}
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
	    document.title = "Moderne kunstutstilling";
	    this.saveText();
	    this.saveImage();
	}

    saveImage() {
        let imageIsNotSaved = this.state.imageData[this.state.imageCategoryNum][this.state.activeTab-1] === "";

        if (imageIsNotSaved) {

            let imagePath = `/img/${this.state.imageCategories[this.state.imageCategoryNum]}/${this.state.imageFiles[this.state.imageCategoryNum][this.state.activeTab - 1]}`;
            fetch(imagePath)
                .then(resp => resp.text())
                .then(data => {
                    console.log(imagePath);
                    let newImageData = this.state.imageData.slice();
                    newImageData[this.state.imageCategoryNum][this.state.activeTab - 1] = data;
                    this.setState(
                        {
                            imageData: newImageData,
                        });
                });
        }
    }

}

export default App;
