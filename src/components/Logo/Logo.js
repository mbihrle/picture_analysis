import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="ma4  mt0">
            <Tilt
                className="Tilt br2 shadow-2"
                style={{ width: "150px", height: "150px" }}
                tiltEnable={true}
                glareEnable={true}
                glareMaxOpacity={0.8}
                glareColor="white"
                glarePosition="bottom"
            >
                <div className="Tilt-inner pa3">
                    <img alt="logo" src={brain} />
                    {/* <h1>Tilt Test 👀</h1> */}
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;
