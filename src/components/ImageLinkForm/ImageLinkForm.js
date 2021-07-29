import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onDetectButtonSubmit }) => {
    return (
        <div>
            <p className="f3 ma1">
                {"This Magic Brain will analyze your pictures"}
            </p>
            <p className="f5 mt0 mb4">
                {"(Testing Clarifai API)"}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input
                        id="urlInput"
                        className="f4 pa2 w-70 center"
                        type="text"
                        onChange={onInputChange}
                    />
                    <button
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={onDetectButtonSubmit}
                    >
                        Detect
                    </button>
                    <button
                        className="w-11 grow f4 link ph3 pv2 dib white bg-dark-red"
                        onClick={() =>
                            (document.getElementById("urlInput").value = "")
                        }
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;
