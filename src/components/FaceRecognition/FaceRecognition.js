import React from "react";
import AttributeList from "../AttributeList/AttributeList";

const FaceRecognition = ({ imageUrl, imageAttributes }) => {
    const AttributeDiv = () => {
        if (imageAttributes.length === 0) {
            return null;
        }
        return <AttributeList imageAttributes={imageAttributes} />;
    };

    return (
        <div className="center ma">
            <div className="mt4">
                <img alt="" src={imageUrl} width="500px" height="auto" />
            </div>
            <div className="mt4" width="500px" height="auto">
                <AttributeDiv />
            </div>
        </div>
    );
};

export default FaceRecognition;
// src={"https://samples.clarifai.com/metro-north.jpg"}
