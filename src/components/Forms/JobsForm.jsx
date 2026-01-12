import CollectionForm from "./CollectionForm";
import { useCv } from "../../context/CvContext.jsx";

function JobsForm() {
  const { cv, setCv } = useCv();
  return (
    <CollectionForm
      submitLabel="Add Job"
      infoArray={cv.jobs}
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
        setCv((prev) => ({
          ...prev,
          jobs: [...prev.jobs, { ...values, id: crypto.randomUUID() }],
        }))
      }
    />
  );
}

export default JobsForm;
