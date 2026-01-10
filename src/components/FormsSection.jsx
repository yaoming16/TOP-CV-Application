import Accordion from "./Accordion";
import BasicInfoForm from "./Forms/BasicInfoForm";
import JobsForm from "./Forms/JobsForm";
import EducationForm from "./Forms/EducationForm";
import Languages from "./Forms/Languages";

import "../styles/FormsSection.css";

function FormsSection({ cvData, setCvData }) {
  return (
    <section aria-labelledby="forms-heading">
      <h2 id="forms-heading" className="visually-hidden">CV forms</h2>
      
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
    </section>
  );
}

export default FormsSection;
