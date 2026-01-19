import CollectionForm from "./CollectionForm";
import { useCv } from "../../context/CvContext.jsx";

function JobsForm() {
  const { cv, setCv } = useCv();
  return (
    <CollectionForm
      submitLabel="Add Job"
      infoArray={cv.jobs}
      arrayName="jobs"
      fields={[
        { label: "Position Title", name: "positionTitle" },
        { label: "Company Name", name: "companyName" },
        {
          label: "Main responsibilities",
          name: "mainResponsibilities",
          component: "textarea",
        },
        { label: "Starting Date", name: "startingDate", type: "date" },
        { label: "Ending Date", name: "endingDate", type: "date", required: false },
      ]}
      setData={(values) =>
        setCv((prev) => ({
          ...prev,
          jobs: [...prev.jobs, { ...values, id: crypto.randomUUID(), show: true }],
        }))
      }
    />
  );
}

export default JobsForm;
