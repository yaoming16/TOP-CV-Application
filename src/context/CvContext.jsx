import { createContext, useContext, useState } from "react";

export const CvContext = createContext(null);

export const originalCv = {
  basic: {
    name: "Pablo",
    lastName: "Perez",
    email: "pabloperezzz16@gmail.com",
    phoneNumber: "+598 94 497 982",
    city: "Montevideo",
    country: "Uruguay",
  },
  jobs: [],
  education: [],
  languages: [],
  skills: [],
  certifications: [],
}

export function CvProvider({ children }) {
  const [cv, setCv] = useState(originalCv);

  const resetCv = () => setCv(originalCv);

  return (
    <CvContext.Provider value={{ cv, setCv, resetCv }}>{children}</CvContext.Provider>
  );
}

export function useCv() {
  const ctx = useContext(CvContext);
  if (!ctx) throw new Error("useCv must be used within a CvProvider");
  return ctx;
}
