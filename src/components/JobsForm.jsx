import Input from "./Input";
import TextArea from "./TextArea";

function JobsForm({setCvData}) {

    function submit(event) {

        event.preventDefault();
        const formData = new FormData(event.target);

        const companyName = formData.get("companyName");
        const positionTitle = formData.get("positionTitle");
        const mainResponsibilities = formData.get("mainResponsibilities");
        const startingDate = formData.get("startingDate");
        const endingDate = formData.get("endingDate");
        const jobId = crypto.randomUUID();

        const jobInfo = {
            companyName: companyName,
            positionTitle: positionTitle,
            mainResponsibilities: mainResponsibilities,
            startingDate: startingDate,
            endingDate: endingDate,
            id: jobId
        }

        setCvData((prev) => ({ ...prev, jobs: [...prev.jobs, jobInfo] }));
        
    }

    return (
        <form onSubmit={ (event) => submit(event)}>
            <Input label="Company Name" name="companyName" />
            <Input label="Position Title" name="positionTitle" />
            <TextArea label="Main responsibilities" name="mainResponsibilities" />
            <Input label="Starting Date" name="startingDate" type="date" />
            <Input label="Ending Date" name="endingDate" type="date" />

            <button type="submit">Add</button>
        </form>
    )
}

export default JobsForm;