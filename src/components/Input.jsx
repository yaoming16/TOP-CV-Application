import { useId } from "react";

function Input({ label, name = null,  value = null, setValue = null, type = "text"}) {
    const inputId = useId();
    return (
        <div className="form-div">
            <label htmlFor={inputId}>{label}</label>
            <input
                type={type}
                id={inputId}
                name={name? name : label}
                value={value ? value : undefined}
                onChange={(event) => setValue?.(event.target.value)}
            ></input>
        </div>
    );
}

export default Input;
