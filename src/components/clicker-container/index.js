import { useState } from "react";

export function ClickerContainer({ clicks, setClicks, clicksAdd}){
    const [isImage, setIsImage] = useState("./img/img-clicker/ela.jpg")

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function clickReact(){
        setClicks(clicks + 1)
        setIsImage("./img/img-clicker/ela-pistola.jpg")
        sleep(225).then(() => {
            setIsImage("./img/img-clicker/ela.jpg")
        })
    }
    
    return(
        <div className="max-w-md flex flex-col items-center">
            <img src={ isImage } className="h-96 rounded-lg" 
            onClick={() =>
                clickReact()
                } />
            <div className="text-3xl mt-2">{ (clicks + clicksAdd).toLocaleString(undefined, { maximumFractionDigits: 2 }) } Click Points</div>
        </div>
    )
}