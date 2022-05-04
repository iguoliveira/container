import { useEffect, useState } from "react";

export function UpgradeContainer({ clicks, clicksAdd, setClicksAdd, name }){
    const [ qtd, setQtd ] = useState(0)
    const [ price, setPrice ] = useState(10);


    function buyUpgrade(){
        if((clicks+clicksAdd) >= price){
            setClicksAdd(clicksAdd-price)
            setPrice(Math.floor((price/2)*3))
            setQtd(qtd+1)
        }else{
            console.log("SEM MONEY")
        }
    }

    useEffect(() => {
        if(qtd >= 1){
            setTimeout(() => {
                setClicksAdd(state => state + (0.2*qtd))
            }, 500)
        }
    }, [ clicksAdd ])

    return(
        <div className="mb-5">
            <div className="font-bold text-xl">{ name }</div>
            <div className="text-lg">Price: { price }</div>
            <div className="text-lg">Quantity: { qtd }</div>
            <button className="bg-black text-white rounded px-2.5 py-1 hover:bg-slate-800 transition-all ease-linear text-sm mt-0.5" onClick={() => {
                buyUpgrade()
            }}>Buy</button>
        </div>
    )
}