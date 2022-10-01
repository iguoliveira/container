import { useNavigate } from "react-router-dom";

export const CharCard = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="bg-gray-800 text-white w-full h-full rounded-2xl shadow-md shadow-gray-500">
        <div className="flex justify-center">
          {props.rank == "S" ? (
            <div>
              <img
                className="float-left w-96 h-72 object-cover rounded-t-xl"
                src={props.photo}
              />
              <div className="text-center uppercase font-bold bg-[#FFD700] text-black rounded-t-2xl">
                {props.heroe_name}
              </div>
            </div>
          ) : props.rank == "A" ? (
            <div>
              <img
                className="float-left w-96 h-72 object-cover rounded-t-xl"
                src={props.photo}
              />
              <div className="text-center uppercase font-bold bg-[#C0C0C0] text-black rounded-t-2xl">
                {props.heroe_name}
              </div>
            </div>
          ) : props.rank == "B" ? (
            <div>
              <img
                className="float-left w-96 h-72 object-cover rounded-t-xl"
                src={props.photo}
              />
              <div className="text-center uppercase font-bold bg-[#B87333] text-black rounded-t-2xl">
                {props.heroe_name}
              </div>
            </div>
          ) : (
            <div>
              <img
                className="float-left w-96 h-72 object-cover rounded-t-xl"
                src={props.photo}
              />
              <div className="text-center uppercase font-bold bg-[#4b4a4a] rounded-t-2xl">
                {props.heroe_name}
              </div>
            </div>
          )}
        </div>
        <div className="text-center py-3">
          <div>
            {props.name}, {props.age} y'o
          </div>
          <div>
            {props.rank}-Class, Rank {props.position}
          </div>
          {props.gender == "M" ? (
            <div>{props.race}, Male</div>
          ) : (
            <div>{props.race}, Female</div>
          )}
        </div>
        <div className="flex">
          <button
            onClick={() =>
              navigate("/charsList/S-class/" + props.indexKey + "/edit")
            }
            className="bg-gray-800 hover:bg-blue-600 w-full font-bold uppercase text-lg text-white"
          >
            edit
          </button>

          <button
            onClick={() => props.action(props.indexKey)}
            className="bg-gray-800 hover:bg-red-600 w-full font-bold uppercase text-lg text-white"
          >
            delete
          </button>
        </div>
      </div>

      <div>
        {props.status ? (
          <div className="bg-green-500 text-center uppercase text-lg rounded-b-xl">
            ALIVE
          </div>
        ) : (
          <div className="bg-red-500 text-center uppercase text-lg rounded-b-xl">
            DEAD
          </div>
        )}
      </div>
    </div>
  );
};
