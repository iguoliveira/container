export const CharCard = (props) => {
  return (
    <div>
      <div className="bg-black text-white w-full h-full rounded-t-xl p-5">
        <div className="text-center uppercase font-bold">{props.name}</div>
        <div className="flex justify-center">
          <img
            className="float-left w-40 h-40 object-cover rounded border-8 border-[#FFD700]"
            src={props.photo}
          />
        </div>
        <div className="mt-4 text-center -mb-4">
          <div>
            AKA {props.heroe_name}, {props.age} y'o
          </div>
          <div>
            {props.rank}-Class, Rank {props.position}
          </div>
          {props.gender == "M" ? <div>Male</div> : <div>Female</div>}
          <div>{props.race}</div>
        </div>
      </div>
      <div>
        {props.status ? (
          <div className="bg-green-800 text-center uppercase text-lg rounded-b-xl">
            ALIVE
          </div>
        ) : (
          <div className="bg-red-500 text-center uppercase text-lg rounded-b-xl">DEAD</div>
        )}
      </div>
    </div>
  );
};
