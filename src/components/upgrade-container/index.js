import React, { useEffect, useState } from "react";
import "./index.css"

export function UpgradeContainer({preco, setPreco, clicks,setClicks}){
    const [ isQtd, setIsQtd] = useState(0)

    useEffect(() => {
        if(isQtd >= 1){
            setTimeout(() => {
                setClicks(clicks+0.01)
            }, 1000)
        }
    }, [ clicks ])


    return(
        <div>
            <div>MORIKO</div>
            <div>PRECO: {preco}</div>
            <div>QTD: { isQtd }</div>
            <button onClick={() => {
                if(clicks >= preco){
                    setClicks(clicks - preco)
                    setPreco(Math.floor((preco/2)*3))
                    setIsQtd(isQtd+1)
                }else{
                    console.log("SEM MONEY")
                }
            }}>Comprar</button>
        </div>
    )
}