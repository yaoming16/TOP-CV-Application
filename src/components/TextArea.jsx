import { useId } from "react";

function TextArea({ label, name = null, value = null, setValue = null }) {
    const textareaId = useId();
    return (
        <div className="form-div">
            <label htmlFor={textareaId}>{label}</label>
            <textarea
                id={textareaId}
                name={name ? name : label}
                value={value ? value : undefined}
                onChange={(event) => setValue?.(event.target.value)}
                required
                aria-invalid={value === "" ? "true" : "false"}
            ></textarea>
        </div>
    );
}

export default TextArea;