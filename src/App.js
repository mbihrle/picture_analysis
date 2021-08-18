import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";

import "./App.css";

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

const initialState = {
    input: "",
    imageUrl: "",
    imageAttributes: [],
    route: "signIn",
    isSignedIn: false,
    user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
    },
};

class App extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.imageInfos !== this.state.imageInfos) {
            console.log(
                "imageInfos (ComponentDidUpdate): ",
                this.state.imageInfos
            );
        }
    }

    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined,
            },
        });
    };

    onInputChange = (event) => {
        // console.log(event.target.value);
        this.setState({ input: event.target.value });
    };

    onDetectButtonSubmit = () => {
        this.setState({ imageUrl: this.state.input });
        fetch("https://shielded-bayou-97172.herokuapp.com/imageurl", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input: this.state.input }),
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    imageAttributes: response.outputs[0].data.concepts,
                });
                if (response) {
                    fetch("https://shielded-bayou-97172.herokuapp.com/image", {
                        method: "put",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            id: this.state.user.id,
                        }),
                    })
                        .then((resp) => resp.json())
                        .then((entries) => {
                            this.setState(
                                Object.assign(this.state.user, {
                                    entries,
                                })
                            );
                        })
                        .catch(console.log);
                }
            })
            .catch((err) => log(err));
    };

    onRouteChange = (route) => {
        if (route === "signOut") {
            this.setState(initialState);
        } else if (route === "home") {
            this.setState({ isSignedIn: true });
        }
        this.setState({ route: route });
    };

    render() {
        const { user, isSignedIn, route, imageUrl, imageAttributes } =
            this.state;
        return (
            <div className="App">
                <Particles className="particles" params={particleOptions} />
                <Navigation
                    isSignedIn={isSignedIn}
                    onRouteChange={this.onRouteChange}
                />
                {/* <h1> Route: {route}</h1> */}
                {route === "home" ? (
                    <>
                        <Logo />
                        <Rank name={user.name} entries={user.entries} />
                        <ImageLinkForm
                            onInputChange={this.onInputChange}
                            onDetectButtonSubmit={this.onDetectButtonSubmit}
                        />
                        <FaceRecognition
                            imageUrl={imageUrl}
                            imageAttributes={imageAttributes}
                        />
                    </>
                ) : route === "register" ? (
                    <Register
                        loadUser={this.loadUser}
                        onRouteChange={this.onRouteChange}
                    />
                ) : (
                    <SignIn
                        loadUser={this.loadUser}
                        onRouteChange={this.onRouteChange}
                    />
                )}
            </div>
        );
    }
}

export default App;
