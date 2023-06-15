import React, {useState} from "react";
import hogs from "../porkers_data";

const Front = ({image, name}) => {
    return(
        <div>
            <img src={image}/>
            <h1>{name}</h1>
        </div>
    ) 
}

const Back = ({hog}) => {
    return(
        <div>
            <h1>{hog.name}</h1>
            <h3>{hog.specialty}</h3>
            <h2>{hog.weight}lbs</h2>
            <h4>{hog['highest medal achieved']} medal achieved</h4>
            {hog.greased ? <h1>Ready For Fun</h1> : <div>No Grease</div>}
        </div>
    )
}

const Hog = ({hog}) => {
    const [showFront, setShowFront] = useState(true)
    const toggleFront = () => {
        setShowFront(!showFront)
    }
    return (
        <div onClick={toggleFront} className="ui three wide column image pigTile">
            {showFront ? <Front image={hog.image} name={hog.name}/> : <Back hog={hog} />}
        </div>
    )
}

export default Hog