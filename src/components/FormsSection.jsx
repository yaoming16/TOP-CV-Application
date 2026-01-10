import Accordion from "./Accordion";
import BasicInfoForm from "./Forms/BasicInfoForm";
import JobsForm from "./Forms/JobsForm";
import EducationForm from "./Forms/EducationForm";
import Languages from "./Forms/Languages";
import SkillsForm from "./Forms/SkillsForm";
import Certifications from "./Forms/Certifications";

import "../styles/FormsSection.css";

function FormsSection({ cvData, setCvData }) {
  return (
    <section aria-labelledby="forms-heading">
      <h2 id="forms-heading" className="visually-hidden">
        CV forms
      </h2>

      <Accordion
        content={<BasicInfoForm cvData={cvData} setCvData={setCvData} />}
        title="Basic Information"
      />

      <Accordion
        content={<EducationForm setCvData={setCvData} />}
        title="Education"
      />

      <Accordion content={<JobsForm setCvData={setCvData} />} title="Jobs" />

      <Accordion
        content={<Languages setCvData={setCvData} />}
        title="Languages"
      />
      <Accordion
        content={<Certifications setCvData={setCvData} />}
        title="Certifications"
      />

      <Accordion
        content={<SkillsForm setCvData={setCvData} />}
        title="Skills"
      />
    </section>
  );
}

export default FormsSection;
