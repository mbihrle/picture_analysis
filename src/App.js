import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
// old way
import Clarifai from "clarifai";
import "./App.css";

const clarifaiApp = new Clarifai.App({
    apiKey: "4060302e88684205ac4cf81edf5bad47",
});

const log = (d) => {
    try {
        console.log(JSON.stringify(d, null, 2));
    } catch (e) {
        console.log(d);
    }
};

const particleOptions = {
    particles: {
        number: {
            value: 100,
        },
        size: {
            value: 3,
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
        },
    },
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            imageUrl: "",
            imageAttributes: [],
        };
    }

    onInputChange = (event) => {
        // console.log(event.target.value);
        this.setState({ input: event.target.value });
    };

    getImageDescription = (response) => {
        console.log(response);
    };

    onDetectButtonSubmit = () => {
        console.log("click Detect");
        this.setState({ imageUrl: this.state.input });
        // Prediction on general model using video API
        clarifaiApp.models
            .predict(
                Clarifai.GENERAL_MODEL,
                // Clarifai.COLOR_MODEL,
                // "a403429f2ddf4b49b307e318f00e528b",
                // "53e1df302c079b3db8a0a36033ed2d15", // new Face Detection Model Key
                // "https://samples.clarifai.com/metro-north.jpg"
                this.state.input
            )
            // .then((response) => console.log(response.outputs[0].data.concepts))
            // .then((response) =>
            //     this.getImageDescription(response.outputs[0].data.concepts)
            // )
            .then((response) =>
                this.setState({
                    imageAttributes: response.outputs[0].data.concepts,
                })
            )
            .catch((err) => log(err));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.imageInfos !== this.state.imageInfos) {
            console.log(
                "imageInfos (ComponentDidUpdate): ",
                this.state.imageInfos
            );
        }
    }

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particleOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onDetectButtonSubmit={this.onDetectButtonSubmit}
                />
                <FaceRecognition
                    imageUrl={this.state.imageUrl}
                    imageAttributes={this.state.imageAttributes}
                />
            </div>
        );
    }
}

export default App;
