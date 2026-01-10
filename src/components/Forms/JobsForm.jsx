import CollectionForm from "./CollectionForm";

function JobsForm({ setCvData }) {
  return (
    <CollectionForm
      submitLabel="Add Job"
      fields={[
        { label: "Company Name", name: "companyName" },
        { label: "Position Title", name: "positionTitle" },
        {
          label: "Main responsibilities",
          name: "mainResponsibilities",
          component: "textarea",
        },
        { label: "Starting Date", name: "startingDate", type: "date" },
        { label: "Ending Date", name: "endingDate", type: "date" },
      ]}
      setData={(values) =>
        setCvData((prev) => ({
          ...prev,
          jobs: [...prev.jobs, { ...values, id: crypto.randomUUID() }],
        }))
      }
    />
  );
}

export default JobsForm;
