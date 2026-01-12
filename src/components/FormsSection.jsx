import Accordion from "./Accordion";
import BasicInfoForm from "./Forms/BasicInfoForm";
import JobsForm from "./Forms/JobsForm";
import EducationForm from "./Forms/EducationForm";
import Languages from "./Forms/Languages";
import SkillsForm from "./Forms/SkillsForm";
import Certifications from "./Forms/Certifications";

import "../styles/FormsSection.css";

function FormsSection() {
  return (
    <section aria-labelledby="forms-heading">
      <h2 id="forms-heading" className="visually-hidden">
        CV forms
      </h2>

      <Accordion
        content={<BasicInfoForm />}
        title="Basic Information"
      />

      <Accordion
        content={<EducationForm />}
        title="Education"
      />

      <Accordion content={<JobsForm />} title="Jobs" />

      <Accordion
        content={<Languages />}
        title="Languages"
      />
      <Accordion
        content={<Certifications />}
        title="Certifications"
      />

      <Accordion
        content={<SkillsForm />}
        title="Skills"
      />
    </section>
  );
}

export default FormsSection;
