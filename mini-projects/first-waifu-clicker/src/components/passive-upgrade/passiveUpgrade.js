import { useEffect, useState } from "react";

export function PassiveUpgrade({ clicks, clicksAdd, setClicksAdd, name, setIncoming }){
    const [ qtd, setQtd ] = useState(0)
    const [ price, setPrice ] = useState(10);
    const [ buyCondition, setBuyCondition] = useState("")


    function buyUpgrade(){
        if((clicks+clicksAdd) >= price){
            setClicksAdd(clicksAdd-price)
            setPrice(Math.floor(price/3)+price)
            setQtd(qtd+1)
            setBuyCondition("")
        }else{
            setBuyCondition("NO MONEY")
        }
    }

    useEffect(() => {
        if(qtd >= 1){
            setTimeout(() => {
                setClicksAdd(state => state + 0.2)
            }, 1000)
        }
        setIncoming(0.2*qtd)
    }, [ clicksAdd ])

    return(
        <div className="mb-5">
            <div className="font-bold text-xl">{ name }</div>
            <div className="text-lg">Price: { price }</div>
            <div className="text-lg">Quantity: { qtd }</div>
            <div className="flex items-center gap-2.5">
                <button className="bg-black text-white rounded px-2.5 py-1 hover:bg-slate-800 transition-all ease-linear text-sm mt-0.5" onClick={() => {
                    buyUpgrade()
                }}>Buy</button>
                <div className="text-sm flex-wrap text-red-700">{ buyCondition }</div>
            </div>
        </div>
    )
}