export const CharCard = (props) => {
  const deleteHero = (index) => {
    fetch("http://localhost:8000/heroes/" + index, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <div className="bg-gray-800 text-white w-full h-full rounded-2xl shadow-lg shadow-black">
        <div className="flex justify-center">
          {props.rank == "S" ? (
            <div>
              <img
                className="float-left w-max h-52 object-cover rounded-t-xl"
                src={props.photo}
              />
              <div className="text-center uppercase font-bold bg-[#FFD700] text-black rounded-t-2xl">
                {props.name}
              </div>
            </div>
          ) : props.rank == "A" ? (
            <img
              className="float-left w-56 h-52 object-cover rounded border-8 border-[#C0C0C0] shadow-lg shadow-black"
              src={props.photo}
            />
          ) : props.rank == "B" ? (
            <img
              className="float-left w-56 h-52 object-cover rounded border-8 border-[#B87333] shadow-lg shadow-black"
              src={props.photo}
            />
          ) : (
            <img
              className="float-left w-56 h-52 object-cover rounded border-8 border-[#4b4a4a] shadow-lg shadow-black"
              src={props.photo}
            />
          )}
        </div>
        <div className="text-center py-3">
          <div>
            AKA {props.heroe_name}, {props.age} y'o
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
        <div>
          <button
            onClick={() => deleteHero(props.indexKey)}
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
