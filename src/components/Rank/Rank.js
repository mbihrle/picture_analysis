import React from "react";

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className="white f3">{`${name}, your current entry count is...`}</div>
            {/* <div className="white f1">{"#5"}</div> */}
            <div className="white f3">{`(${entries} entries)`}</div>
        </div>
    );
};

export default Rank;
