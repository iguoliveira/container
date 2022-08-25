import { useEffect } from "react";
import { useState } from "react"
import { CharCard } from "../components/card/CharCard";
import { Navbar } from '../components/navbar/Navbar'

export const CharsList = () => {
    const [apiresult, setApiresult] = useState([]);

    const fetchApi = () => {
        fetch("http://localhost:8000/heroes")
            .then((res) => res.json().then((data) => {
                setApiresult(data)
            }))
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <Navbar />
            <div className="bg-black text-white uppercase text-center py-2 text-2xl">characters list</div>
            <div>{apiresult.name}</div>
            <div className="p-5 w-screen flex flex-wrap justify-center gap-2">
                {apiresult.map((item, index) => (
                    <div key={index} className="w-[45%]">
                        <CharCard  photo={item.photo} name={item.name} rank={item.rank} position={item.position} gender={item.gender} race={item.race} />
                    </div>
                ))}
            </div>
        </>
    )
}