function TextArea({label, name}) {
    return (
        <div className="form-div">
            <label htmlFor={`textArea-${name}`}>{label}</label>
            <textarea id={`textArea-${name}`} name={name}></textarea>
        </div>
    )
}

export default TextArea;