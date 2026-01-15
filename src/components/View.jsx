import { useCv } from "../context/CvContext.jsx";
import "../styles/View.css";

import { emailSVG, phoneSVG, locationSVG } from "../assets/svgs.jsx";

function View() {
  const { cv: cvData } = useCv();
  return (
    <section className="view-container">
      <header id="basicInfoSection">
        <h1>
          {cvData.basic.name} {cvData.basic.lastName}
        </h1>
        <address>
          <div>
            {emailSVG}
            <p>{cvData.basic.email}</p>
          </div>
          <div>
            {phoneSVG}
            <p>{cvData.basic.phoneNumber}</p>
          </div>
          <div>
            {locationSVG}
            <p>
              {cvData.basic.city} {cvData.basic.country}
            </p>
          </div>
        </address>
      </header>
      {cvData.jobs.length > 0 ? (
        <section id="workExperienceSection">
          <h2>Work Experience</h2>
          <ul>
            {cvData.jobs.map((job) =>
              job.show ? (
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
              ) : null
            )}
          </ul>
        </section>
      ) : null}
      {cvData.education.length > 0 ? (
        <section id="educationSection">
          <h2>Education</h2>
          <ul>
            {cvData.education.map((ed) =>
              ed.show ? (
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
              ) : null
            )}
          </ul>
        </section>
      ) : null}
      {cvData.languages.length > 0 ? (
        <section id="languageSection">
          <h2>Languages</h2>
          <ul>
            {cvData.languages.map((lang) =>
              lang.show ? (
                <li id={lang.id} key={lang.id}>
                  <article>
                    <header>
                      <h3>{lang.language}</h3>
                      <p>{lang.level}</p>
                    </header>
                  </article>
                </li>
              ) : null
            )}
          </ul>
        </section>
      ) : null}
      {cvData.certifications.length > 0 ? (
        <section id="certificationsSection">
          <h2>Certifications</h2>
          <ul>
            {cvData.certifications.map((cert) =>
              cert.show ? (
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
              ) : null
            )}
          </ul>
        </section>
      ) : null}
      {cvData.skills.length > 0 ? (
        <section id="skillsSection">
          <h2>Skills</h2>
          <ul className="skills-ul">
            {cvData.skills.map((skill) =>
              skill.show ? (
                <li id={skill.id} key={skill.id}>
                  <article>
                    <header>
                      <h3>{skill.skill}</h3>
                    </header>
                  </article>
                </li>
              ) : null
            )}
          </ul>
        </section>
      ) : null}
    </section>
  );
}

export default View;
