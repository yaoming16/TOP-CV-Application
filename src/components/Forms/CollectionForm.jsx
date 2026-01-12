import { useState } from "react";
import { useCv } from "../../context/CvContext.jsx";

import Input from "../Input";
import TextArea from "../TextArea";

function CollectionForm({ fields, setData, submitLabel = "Add", infoArray }) {
  let [showForm, setShowForm] = useState(false);
  const { cv, setCv } = useCv();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const values = {};
    for (const field of fields) {
      values[field.name] = formData.get(field.name);
    }
    setData(values);
    event.target.reset();
    setShowForm(!showForm);
  }

  function deleteData(id) {
    infoArray.find();
  }

  return (
    <>
      {showForm ? (
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
          <div>
            <button onClick={() => setShowForm(!showForm)}>Cancel</button>
            <button type="submit">{submitLabel}</button>
          </div>
        </form>
      ) : null}
      {!showForm ? (
        <>
          {infoArray.map((info) => (
            <div key={info.id}>
              <p>{Object.values(info)[0]}</p>
              <button onClick={() => deleteData(info.id)}>X</button>
            </div>
          ))}
          <button onClick={() => setShowForm(!showForm)}>{submitLabel}</button>
        </>
      ) : null}
    </>
  );
}

export default CollectionForm;
