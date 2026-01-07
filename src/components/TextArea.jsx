function TextArea({label, name}) {
    return (
        <div>
            <label htmlFor={`textArea-${name}`}>{label}</label>
            <textarea id={`textArea-${name}`} name={name}></textarea>
        </div>
    )
}

export default TextArea;