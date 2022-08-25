export const CharCard = (props) => {
    return(
        <div className="bg-black text-white w-full h-full rounded-xl p-5">
            <div>
                <img src={props.photo} />
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