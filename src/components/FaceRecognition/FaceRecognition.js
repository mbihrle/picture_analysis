import React from "react";
import AttributeList from "../AttributeList/AttributeList";

const FaceRecognition = ({ imageUrl, imageAttributes }) => {
    return (
        <div className="center ma">
            <div className="mt4">
                <img alt="" src={imageUrl} width="500px" height="auto" />
            </div>
            {/* <div className="mt4" width="500px" height="auto">
                <AttributeDiv />
            </div> */}
            {imageAttributes.length > 0 && (
                <div className="mt4" width="500px" height="auto">
                    <AttributeList imageAttributes={imageAttributes} />
                </div>
            )}
        </div>
    );
};

export default FaceRecognition;
// src={"https://samples.clarifai.com/metro-north.jpg"}
