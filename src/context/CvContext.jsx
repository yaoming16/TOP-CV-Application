import { createContext, useContext, useState } from "react";

export const CvContext = createContext(null);

export const originalCv = {
  basic: {
    name: "Leon",
    lastName: "Kennedy",
    email: "leon.kennedy@example.com",
    phoneNumber: "+1 202 555 0112",
    city: "Washington, D.C.",
    country: "United States",
  },
  jobs: [
    {
      positionTitle: "Special Agent",
      companyName: "Division of Security Operations (DSO), U.S. Government",
      mainResponsibilities:
      "Protective services, crisis response, field investigations, and interagency coordination related to biohazard incidents.",
      startingDate: "2011-01-01",
      endingDate: "Present",
      id: crypto.randomUUID(),
    },
    {
      positionTitle: "Federal Agent",
      companyName: "U.S. Government - Anti-Bioterror Task Force",
      mainResponsibilities:
      "Investigated biohazard threats, conducted intelligence gathering, supported tactical operations, and advised senior leadership on response strategies.",
      startingDate: "1999-01-01",
      endingDate: "2010-12-31",
      id: crypto.randomUUID(),
    },
    {
      positionTitle: "Police Officer",
      companyName: "Raccoon City Police Department (RPD)",
      mainResponsibilities:
      "Patrol duties, emergency response, incident documentation, and public safety operations.",
      startingDate: "1998-09-29",
      endingDate: "1998-10-01",
      id: crypto.randomUUID(),
    },
  ],
  education: [
    {
      educationTitle: "Law Enforcement Training Program",
      schoolName: "Midwestern Police Academy",
      startingDate: "1997-08-01",
      endingDate: "1998-06-01",
      id: crypto.randomUUID(),
    },
    {
      educationTitle: "Criminal Investigator Training Program (CITP)",
      schoolName: "Federal Law Enforcement Training Center (FLETC)",
      startingDate: "1999-03-01",
      endingDate: "1999-06-01",
      id: crypto.randomUUID(),
    },
  ],
  languages: [
    { language: "English", id: crypto.randomUUID(), level: "Native" },
    { language: "Spanish", id: crypto.randomUUID(), level: "B2" },
  ],
  skills: [
    {  skill: "Crisis management", id: crypto.randomUUID() },
    {  skill: "Field investigations", id: crypto.randomUUID()  },
    {  skill: "Protective security detail", id: crypto.randomUUID()  },
    {  skill: "Defensive driving", id: crypto.randomUUID()  },
    {  skill: "Negotiation & de-escalation", id: crypto.randomUUID() },
    {  skill: "First aid & trauma care", id: crypto.randomUUID() },
    {  skill: "Incident command", id: crypto.randomUUID() },
  ],
  certifications: [
    {
      certification: "Protective Security Detail (PSD)",
      institution: "U.S. Government Training",
      startingDate: "2009-05-01",
      endingDate: "2009-07-01",
      id: crypto.randomUUID(),
    },
  ],
};

export function CvProvider({ children }) {
  const [cv, setCv] = useState(originalCv);

  const resetCv = () => setCv(originalCv);

  return (
    <CvContext.Provider value={{ cv, setCv, resetCv }}>
      {children}
    </CvContext.Provider>
  );
}

export function useCv() {
  const ctx = useContext(CvContext);
  if (!ctx) throw new Error("useCv must be used within a CvProvider");
  return ctx;
}
