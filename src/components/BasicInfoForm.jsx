import Input from "./Input";

function BasicInfoForm({ cvData, setCvData }) {
    const updateField = (field) => (value) => {
        setCvData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <form>
            <Input
                label="Name"
                value={cvData.name}
                setValue={updateField("name")}
            />
            <Input
                label="Last Name"
                value={cvData.lastName}
                setValue={updateField("lastName")}
            />
            <Input
                label="Email"
                value={cvData.email}
                setValue={updateField("email")}
                type="email"
            />
            <Input
                label="Phone Number"
                value={cvData.phoneNumber}
                setValue={updateField("phoneNumber")}
            />
            <Input
                label="City"
                value={cvData.city}
                setValue={updateField("city")}
            />
            <Input
                label="Country"
                value={cvData.country}
                setValue={updateField("country")}
            />
        </form>
    );
}

export default BasicInfoForm;
