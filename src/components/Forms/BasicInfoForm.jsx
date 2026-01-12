import Input from "../Input";
import { useCv } from "../../context/CvContext.jsx";

function BasicInfoForm() {
  const { cv: cvData, setCv } = useCv();
  const updateField = (field) => (value) => {
    setCv((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form>
      <Input label="Name" value={cvData.name} setValue={updateField("name")} />
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
      <Input label="City" value={cvData.city} setValue={updateField("city")} />
      <Input
        label="Country"
        value={cvData.country}
        setValue={updateField("country")}
      />
    </form>
  );
}

export default BasicInfoForm;
