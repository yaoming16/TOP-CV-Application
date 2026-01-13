import Input from "../Input";
import { useCv } from "../../context/CvContext.jsx";

function BasicInfoForm() {
  const { cv: cvData, setCv } = useCv();
  const updateField = (field) => (value) => {
    setCv((prev) => ({ ...prev, basic: { ...prev.basic, [field]: value } }));
  };

  return (
    <form className="form">
      <Input label="Name" value={cvData.basic.name} setValue={updateField("name")} />
      <Input
        label="Last Name"
        value={cvData.basic.lastName}
        setValue={updateField("lastName")}
      />
      <Input
        label="Email"
        value={cvData.basic.email}
        setValue={updateField("email")}
        type="email"
      />
      <Input
        label="Phone Number"
        value={cvData.basic.phoneNumber}
        setValue={updateField("phoneNumber")}
      />
      <Input label="City" value={cvData.basic.city} setValue={updateField("city")} />
      <Input
        label="Country"
        value={cvData.basic.country}
        setValue={updateField("country")}
      />
    </form>
  );
}

export default BasicInfoForm;
