import { useCv } from "../context/CvContext.jsx";

function View() {
  const { cv: cvData } = useCv();
  return (
    <div>
      <header id="basicInfoSection">
        <h1>
          {cvData.name} {cvData.lastName}
        </h1>
        <address>
          <p>{cvData.email}</p>
          <p>{cvData.phoneNumber}</p>
          <p>
            {cvData.city} {cvData.country}
          </p>
        </address>
      </header>
      <section id="workExperienceSection">
        <h2>Work Experience</h2>
        <ul>
          {cvData.jobs.map((job) => (
            <li id={job.id} key={job.id}>
              <article>
                <header>
                  <h3>{job.positionTitle}</h3>
                  <p>{job.companyName}</p>
                  <p>
                    {job.startingDate} to {job.endingDate || "Present"}
                  </p>
                </header>
                <p>{job.mainResponsibilities}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section id="educationSection">
        <h2>Education</h2>
        <ul>
          {cvData.education.map((ed) => (
            <li id={ed.id} key={ed.id}>
              <article>
                <header>
                  <h3>{ed.educationTitle}</h3>
                  <p>{ed.schoolName}</p>
                  <p>
                    {ed.startingDate} to {ed.endingDate || "Present"}
                  </p>
                </header>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section id="languageSection">
        <h2>Languages</h2>
        <ul>
          {cvData.languages.map((lang) => (
            <li id={lang.id} key={lang.id}>
              <article>
                <header>
                  <h3>{lang.language}</h3>
                  <p>{lang.level}</p>
                </header>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section id="certificationsSection">
        <h2>Certifications</h2>
        <ul>
          {cvData.certifications.map((cert) => (
            <li id={cert.id} key={cert.id}>
              <article>
                <header>
                  <h3>{cert.certification}</h3>
                  <p>{cert.institution}</p>
                  <p>
                    {cert.startingDate} to {cert.endingDate || "Present"}
                  </p>
                </header>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section id="skillsSection">
        <h2>Skills</h2>
        <ul>
          {cvData.skills.map((skill) => (
            <li id={skill.id} key={skill.id}>
              <article>
                <header>
                  <h3>{skill.skill}</h3>
                </header>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default View;
