import { useId } from "react";

function Input({ label, name = null,  value = null, setValue = null, type = "text", required = true }) {
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
                required={required}
                aria-invalid={value === "" && required ? "true" : "false"}
                aria-describedby={type === "date" ? `Please use YYYY-MM-DD format` : undefined}
            ></input>
        </div>
    );
}

export default Input;
