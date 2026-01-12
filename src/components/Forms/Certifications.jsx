import CollectionForm from "./CollectionForm";
import { useCv } from "../../context/CvContext.jsx";

function Certifications() {
  const { cv, setCv } = useCv();
  return (
    <CollectionForm
      submitLabel="Add Certificate"
      infoArray={cv.certifications}
      fields={[
        { label: "Certification name", name: "certification" },
        { label: "Institution", name: "institution" },
        { label: "Starting Date", name: "startingDate", type: "date" },
        { label: "Ending Date", name: "endingDate", type: "date" },
      ]}
      setData={(values) =>
        setCv((prev) => ({
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
