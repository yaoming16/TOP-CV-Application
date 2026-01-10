import CollectionForm from "./CollectionForm";

function SkillsForm() {
  return (
    <CollectionForm
      fields={[
        { label: "Skill", name: "skill" },
        { label: "More details", name: "details" },
      ]}
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
