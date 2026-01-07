import BasicInfoForm from "./BasicInfoForm";
import JobsForm from "./JobsForm";

function FormsSection({cvData, setCvData}) {
    return (
        <section>
            <div>
                <BasicInfoForm cvData={cvData} setCvData={setCvData}/>
            </div>
            <div>
                <JobsForm setCvData={setCvData} />
            </div>
        </section>
    )
}

export default FormsSection;