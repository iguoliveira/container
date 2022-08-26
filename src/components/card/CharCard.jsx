export const CharCard = (props) => {
    return(
        <div className="bg-black text-white w-full h-full rounded-xl p-5">
            <div className="flex justify-center bg-[]">
                <img className="float-left w-40 h-40 object-cover rounded border-8 border-[#FFD700]" src={props.photo} />
            </div>
            <div>
                <div className="text-center uppercase">{props.name}</div>
                <hr />
                <div>{props.rank}-Class, Rank {props.position}</div>
                {props.gender == "M" ? (<div>Masculine</div>) : (<div>Feminine</div>)}
                <div>{props.race}</div>
            </div>
        </div>
    )
}