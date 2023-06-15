import React from "react";
import Hog from "./Hog";

const PigPen = ({hogsArray}) => {
     const hogComponents = hogsArray.map(hogObject => {
        return <Hog key={hogObject.name} hog={hogObject}/>
     })
    return (
        <div className="ui grid container">
            {hogComponents}
        </div>
    )
}

export default PigPen