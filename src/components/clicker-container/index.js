import React, { useState } from "react";
import "./index.css"

export function ClickerContainer({ clicks, setClicks}){
    const [isImage, setIsImage] = useState("./img/img-clicker/ela.jpg")

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function changeImage(){
        setClicks(clicks + 1)
        setIsImage("./img/img-clicker/ela-pistola.jpg")
        sleep(200).then(() => {
            setIsImage("./img/img-clicker/ela.jpg")
        })
    }

    return(
        <div className="clicker-container">
            <img src={ isImage } className="clicker-img" 
            onClick={() =>
                changeImage()
                } />
            <div className="show-clicks">CLICKS: { clicks }</div>
        </div>
    )
}