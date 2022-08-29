import { useEffect } from "react";
import { useState } from "react";
import { CharCard } from "../components/card/CharCard";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer"
import { useParams, useNavigate } from "react-router-dom";

export const CharsList = () => {
  let navigate = useNavigate();
  let { rank } = useParams();

  const [apiresult, setApiresult] = useState([]);
  const [rankApi, setRankApi] = useState([]);
  const [helper, setHelper] = useState("");

  const fetchApi = () => {
    fetch("http://localhost:8000/heroes").then((res) =>
      res.json().then((data) => {
        let newdata = data.map((item) => {
          fetch("http://localhost:8000/ranks/" + item.fk_rank).then((res) =>
            res.json().then((rankData) => {
              item["fk_rank"] = rankData;
              setHelper(rankData);
            })
          );
          return item;
        });
        setApiresult(newdata);
      })
    );
    fetch("http://localhost:8000/ranks/").then((res) =>
      res.json().then((data) => {
        setRankApi(data);
      })
    );
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {}, [helper]);

  return (
    <>
      <Navbar />
      <div className="bg-black text-white uppercase text-center py-2 text-2xl">
        characters list
      </div>
      <div className="flex justify-center bg-black text-white space-x-10 py-4">
        {rankApi.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              navigate("/charsList/" + item.rank + "-class/");
            }}
          >
            {item.rank == rank ? (
              <div className="bg-gray-500 shadow-black shadow-inner px-4 py-2 rounded uppercase font-bold">
                {item.rank}
              </div>
            ) : (
              <div className="bg-gray-700 px-4 py-2 rounded uppercase font-bold">
                {item.rank}
              </div>
            )}
          </button>
        ))}
      </div>
      <div>{apiresult.name}</div>
      <div className="p-5 w-screen flex flex-wrap justify-center gap-2">
        {apiresult.map(
          (item, index) =>
            item.fk_rank.rank == rank && (
              <div key={index} className="w-[80%]">
                <CharCard
                  name={item.name}
                  photo={item.photo}
                  heroe_name={item.heroe_name}
                  age={item.age}
                  rank={item.fk_rank.rank}
                  position={item.position}
                  gender={item.gender}
                  race={item.race}
                  status={item.status}
                />
              </div>
            )
        )}
      </div>
      <Footer />
    </>
  );
};
