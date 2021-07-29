import React from "react";
import './AttributeList.css'

const AttributeList = ({ imageAttributes }) => {
    const attributesArray = imageAttributes.map((attribute, i) => {
        return (
            <li key={i}>
                {attribute.id.trim() + " "}
                {attribute.value.toFixed(2) * 100 + "% "}
                {attribute.name + " "}
                {/* app_id={attribute.app_id} */}
            </li>
        );
    });

    return (
        <div className="mt0">
            <ul className="mt0">{attributesArray}</ul>
        </div>
    );
};

export default AttributeList;
