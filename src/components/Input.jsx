function Input({ label, value, setValue }) {
    return (
        <div>
            <label htmlFor={`input-${label}`}>{label}</label>
            <input
                type="text"
                id={`input-${label}`}
                name={label}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>
        </div>
    );
}

export default Input;
