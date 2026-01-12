import CollectionForm from "./CollectionForm";
import { useCv } from "../../context/CvContext.jsx";

function Languages() {
  const { cv, setCv } = useCv();
  return (
    <CollectionForm
      submitLabel="Add Language"
      infoArray={cv.languages}
      fields={[
        { label: "Language", name: "language" },
        { label: "Level", name: "level" },
      ]}
      setData={(values) =>
        setCv((prev) => ({
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
