export function Logout( { name, clickHandler } ){
    return(
        <div className="flex gap-5">
            <div>Bom Jogo {name}</div>
            <button onClick={clickHandler}>Logout</button>
        </div>
    )
}