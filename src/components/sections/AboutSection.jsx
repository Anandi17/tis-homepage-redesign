import Reveal from "../animation/Reveal";

function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <Reveal>
          <p className="eyebrow">Welcome to Tulas</p>
          <h2 className="section-title">
            Education for the
            <br />
            <em>whole person.</em>
          </h2>
        </Reveal>

        <Reveal>
          <div className="about-copy">
            <p className="large-copy">
              Tulas International School is a boarding and day school in
              Dehradun, India.
            </p>
            <p>
              Our CBSE curriculum brings academic learning together with
              opportunities to explore, create, lead, and grow. We aim to give
              every student the support and confidence to discover what they
              can become.
            </p>
            <a className="text-link dark-link" href="#learning">
              Discover the Tulas experience <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="container stats-row">
        <Reveal>
          <div className="stat">
            <strong>2012</strong>
            <span>Established</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="stat">
            <strong>CBSE</strong>
            <span>Curriculum</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="stat">
            <strong>Dehradun</strong>
            <span>Uttarakhand, India</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;