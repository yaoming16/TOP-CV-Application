import BasicInfoForm from "./Forms/BasicInfoForm";
import JobsForm from "./Forms/JobsForm";
import EducationForm from "./Forms/EducationForm";
import Accordion from "./Accordion";

import "../styles/FormsSection.css";

function FormsSection({ cvData, setCvData }) {
  return (
    <section>
      <div>
        <Accordion
          content={<BasicInfoForm cvData={cvData} setCvData={setCvData} />}
          title="Basic Information"
        />
      </div>
      <div>
        <Accordion content={<EducationForm setCvData={setCvData}/> } 
        title="Education"/>
      </div>
      <div>
        <Accordion
          content={<JobsForm setCvData={setCvData} />}
          title="Jobs Section"
        />
      </div>
    </section>
  );
}

export default FormsSection;
