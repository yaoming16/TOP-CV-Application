function Input({ label, name = null,  value = null, setValue = null, type = "text"}) {
    return (
        <div>
            <label htmlFor={`input-${label ? label : name}`}>{label}</label>
            <input
                type={type}
                id={`input-${label ? label : name}`}
                name={name? name : label}
                value={value ? value : undefined}
                onChange={(event) => setValue?.(event.target.value)}
            ></input>
        </div>
    );
}

export default Input;
