import { useState } from "react";
import { useCv } from "../../context/CvContext.jsx";

import Input from "../Input";
import TextArea from "../TextArea";

import { deleteSVG, hideInfoSVG } from "../../assets/svgs.jsx";

function CollectionForm({
  fields,
  submitLabel = "Add",
  setData,
  infoArray,
  arrayName,
}) {
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
    setCv((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((item) => item.id !== id),
    }));
  }

  function changeShowInfoKey(id) {
    setCv((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      ),
    }));
  }

  return (
    <>
      {showForm ? (
        <form onSubmit={handleSubmit} className="form">
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
          <div className="button-div">
            <button onClick={() => setShowForm(!showForm)} title="Discard changes and hide form">Cancel</button>
            <button type="submit">{submitLabel}</button>
          </div>
        </form>
      ) : null}
      {!showForm ? (
        <>
          {infoArray.map((info) => (
            <div key={info.id} className="delete-div">
              <p>{Object.values(info)[0]}</p>
              <div className="delete-hide-div">
                <button
                  className="hide-button"
                  onClick={() => changeShowInfoKey(info.id)}
                  aria-label={info.show ? "Hide this entry" : "Show this entry"}
                >
                  {hideInfoSVG(info.show)}
                </button>
                <button
                  onClick={() => deleteData(info.id)}
                  className="delete-button"
                  aria-label="Delete this entry"
                >
                  {deleteSVG}
                </button>
              </div>
            </div>
          ))}
          <div className="button-div">
            <button onClick={() => setShowForm(!showForm)}>
              {submitLabel}
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default CollectionForm;
