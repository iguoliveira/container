export const CharCard = (props) => {
  return (
    <div>
      <div className="bg-gray-800 text-white w-full h-full rounded-t-xl p-5">
        <div className="text-center uppercase font-bold">{props.name}</div>
        <div className="flex justify-center">
          {props.rank == "S" ? (
            <img
              className="float-left w-56 h-52 object-cover rounded border-8 border-[#FFD700]"
              src={props.photo}
            />
          ) : props.rank == "A" ? (
            <img
              className="float-left w-56 h-52 object-cover rounded border-8 border-[#C0C0C0]"
              src={props.photo}
            />
          ) : props.rank == "B" ? (
            <img
              className="float-left w-56 h-52 object-cover rounded border-8 border-[#B87333]"
              src={props.photo}
            />
          ) : (
            <img
              className="float-left w-56 h-52 object-cover rounded border-8 border-[#4b4a4a]"
              src={props.photo}
            />
          )}
        </div>
        <div className="mt-4 text-center -mb-4">
          <div>
            AKA {props.heroe_name}, {props.age} y'o
          </div>
          <div>
            {props.rank}-Class, Rank {props.position}
          </div>
          {props.gender == "M" ? <div>{props.race}, Male</div> : <div>{props.race}, Female</div>}
        </div>
      </div>
      <div>
        {props.status ? (
          <div className="bg-green-800 text-center uppercase text-lg rounded-b-xl">
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
