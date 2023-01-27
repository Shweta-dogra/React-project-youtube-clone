import React from "react";
import img from "../Images/youth.jpg"
import "./cover.css";

function Cover(){

    return(
        <div className="cover">

            <img src={img} className="cover-image" />
        </div>
    )
}

export default Cover;