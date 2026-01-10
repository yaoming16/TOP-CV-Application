import CollectionForm from "./CollectionForm";

function SkillsForm({ setCvData }) {
  return (
    <CollectionForm
      submitLabel="Add Skill"
      fields={[{ label: "Skill", name: "skill" }]}
      setData={(values) =>
        setCvData((prev) => ({
          ...prev,
          skills: [...prev.skills, { ...values, id: crypto.randomUUID() }],
        }))
      }
    />
  );
}

export default SkillsForm;
