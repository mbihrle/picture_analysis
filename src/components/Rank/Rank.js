import React from "react";

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className="white f3">{`${name}, your current rank is...`}</div>
            <div className="white f1">{"#5"}</div>
            <div className="white f3">{`(with ${entries} entries)`}</div>
        </div>
    );
};

export default Rank;
