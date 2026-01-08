function View({ cvData }) {
  return (
    <div>
      <header>
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
      <section>
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
      <section>
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
    </div>
  );
}

export default View;
