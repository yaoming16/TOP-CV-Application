import BasicInfoForm from "./BasicInfoForm";

function FormsSection({cvData, setCvData}) {
    return (
        <div>
            <BasicInfoForm cvData={cvData} setCvData={setCvData}/>
        </div>
    )
}

export default FormsSection;