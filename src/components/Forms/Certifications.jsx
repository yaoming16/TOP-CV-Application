import CollectionForm from "./CollectionForm";

function Certifications({ setCvData }) {
  return (
    <CollectionForm
      submitLabel="Add Certificate"
      fields={[
        { label: "Certification name", name: "certification" },
        { label: "Institution", name: "institution" },
        { label: "Starting Date", name: "startingDate", type: "date" },
        { label: "Ending Date", name: "endingDate", type: "date" },
      ]}
      setData={(values) =>
        setCvData((prev) => ({
          ...prev,
          certifications: [
            ...prev.certifications,
            { ...values, id: crypto.randomUUID() },
          ],
        }))
      }
    />
  );
}

export default Certifications;
