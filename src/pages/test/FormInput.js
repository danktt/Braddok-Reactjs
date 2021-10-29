export function FormInput(props) {
    return (
        <div className={props.div_class}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                className={props.input_class}
                name={props.name}
                type={props.input_type}
                onChange={props.on_change}
            />
        </div>
    );
}
