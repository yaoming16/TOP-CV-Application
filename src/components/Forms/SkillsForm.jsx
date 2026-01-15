import CollectionForm from "./CollectionForm";
import { useCv } from "../../context/CvContext.jsx";

function SkillsForm() {
  const { cv, setCv } = useCv();
  return (
    <CollectionForm
      submitLabel="Add Skill"
      infoArray={cv.skills}
      arrayName="skills"
      fields={[{ label: "Skill", name: "skill" }]}
      setData={(values) =>
        setCv((prev) => ({
          ...prev,
          skills: [...prev.skills, { ...values, id: crypto.randomUUID(), show: true }],
        }))
      }
    />
  );
}

export default SkillsForm;
