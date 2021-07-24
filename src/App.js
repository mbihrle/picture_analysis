import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
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
        };
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    };

    onButtonSubmit = () => {
        console.log("click");
        // Prediction on general model using video API
        clarifaiApp.models
            .predict(
                // Clarifai.GENERAL_MODEL,
                // "a403429f2ddf4b49b307e318f00e528b", // doesn't work anymore
                "53e1df302c079b3db8a0a36033ed2d15",
                "https://samples.clarifai.com/metro-north.jpg"
            )
            .then(
                function (response) {
                    console.log(response);
                },
                function (err) {
                    log(err);
                }
            );
        // .then(log)
        // .catch(log);
    };

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particleOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                />
                {/*<FaceRecognition /> */}
            </div>
        );
    }
}

export default App;
