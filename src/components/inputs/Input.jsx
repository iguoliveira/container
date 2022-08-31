export const Input = (props) => {
    return <input className="border-b-2 border-black rounded-lg p-1" type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onchange}/>
}