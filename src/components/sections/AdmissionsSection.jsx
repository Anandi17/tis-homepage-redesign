import Reveal from "../animation/Reveal";

function AdmissionsSection() {
  return (
    <section className="admissions-section" id="admissions">
      <div className="container admissions-content">
        <Reveal>
          <p className="eyebrow">Your next chapter</p>
          <h2>
            Let’s explore
            <br />
            <em>what’s possible.</em>
          </h2>
          <p>
            Get in touch with Tulas International School to learn more about
            admissions and the school experience.
          </p>
          <a
            className="button button-light"
            href="https://tis.edu.in/"
            target="_blank"
            rel="noreferrer"
          >
            Enquire with Tulas <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
      <div className="admissions-orbit" aria-hidden="true" />
    </section>
  );
}

export default AdmissionsSection;