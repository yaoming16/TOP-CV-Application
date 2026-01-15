import CollectionForm from "./CollectionForm";
import { useCv } from "../../context/CvContext.jsx";

function EducationForm() {
  const { cv, setCv } = useCv();
  return (
    <CollectionForm
      submitLabel="Add Education"
      infoArray={cv.education}
      arrayName="education"
      fields={[
        { label: "School Name", name: "schoolName" },
        { label: "Title", name: "educationTitle" },
        { label: "Starting Date", name: "startingDate", type: "date" },
        { label: "Ending Date", name: "endingDate", type: "date" },
      ]}
      setData={(values) =>
        setCv((prev) => ({
          ...prev,
          education: [
            ...prev.education,
            { ...values, id: crypto.randomUUID(), show: true },
          ],
        }))
      }
    />
  );
}

export default EducationForm;
