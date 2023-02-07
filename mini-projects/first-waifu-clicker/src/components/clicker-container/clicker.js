import { useState } from "react";

export function ClickerContainer({ clicks, setClicks, clicksAdd, income}){
    // const [isImage, setIsImage] = useState("./img/img-clicker/ela.jpg")
    const [style, setStyle] = useState("h-96 rounded-lg")

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function clickReact(){
        setClicks(clicks + 1)
        setStyle("h-96 rounded-lg shadow-md shadow-gray-600")
        sleep(225).then(() => {
            setStyle("h-96 rounded-lg")
        })
        // setIsImage("./img/img-clicker/ela-pistola.jpg")
        // sleep(225).then(() => {
        //     setIsImage("./img/img-clicker/ela.jpg")
        // })
    }
    
    return(
        <div className="max-w-md flex flex-col items-center">
            <img src="./img/img-clicker/ela.jpg" className={ style } 
            onClick={() =>
                clickReact()
                } />
            <div className="text-2xl mt-2 font-bold">{ (clicks + clicksAdd).toLocaleString(undefined, { maximumFractionDigits: 0 }) } Click Points</div>
            <div className="text-xl mt-2">{ income.toLocaleString(undefined, {maximumFractionDigits: 1}) } Points/s</div>
        </div>
    )
}