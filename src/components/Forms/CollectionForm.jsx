import Input from "../Input";
import TextArea from "../TextArea";

function CollectionForm({ fields, setData, submitLabel = "Add" }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const values = {};
    for (const field of fields) {
      values[field.name] = formData.get(field.name);
    }
    setData(values);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        const Component = field.component === "textarea" ? TextArea : Input;
        return (
          <Component
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
          />
        );
      })}
      <button type="submit">{submitLabel}</button>
    </form>
  );
}

export default CollectionForm;
