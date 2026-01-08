import CollectionForm from "./CollectionForm";

function EducationForm({ setCvData }) {
  return (
    <CollectionForm
      fields={[
        { label: "School Name", name: "schoolName" },
        { label: "Title", name: "educationTitle" },
        { label: "Starting Date", name: "startingDate", type: "date" },
        { label: "Ending Date", name: "endingDate", type: "date" },
      ]}
      setData={(values) =>
        setCvData((prev) => ({
          ...prev,
          education: [
            ...prev.education,
            { ...values, id: crypto.randomUUID() },
          ],
        }))
      }
    />
  );
}

export default EducationForm;
