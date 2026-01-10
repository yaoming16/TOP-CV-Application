import CollectionForm from "./CollectionForm";

function Languages({ setCvData }) {
  return (
    <CollectionForm
      submitLabel="Add Language"
      fields={[
        { label: "Language", name: "language" },
        { label: "Level", name: "level" },
      ]}
      setData={(values) =>
        setCvData((prev) => ({
          ...prev,
          languages: [
            ...prev.languages,
            { ...values, id: crypto.randomUUID() },
          ],
        }))
      }
    />
  );
}

export default Languages;
