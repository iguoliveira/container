import "./input.scss";

export default function Input(props) {
  return (
    <label className="input">
      <input className="input__field" type="text" placeholder="" />
      <span className="input__label">{props.name}</span>
    </label>
  );
}
