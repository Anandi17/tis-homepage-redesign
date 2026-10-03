import Reveal from "../animation/Reveal";

function CampusSection() {
  return (
    <section className="section campus-section" id="campus">
      <div className="container campus-grid">
        <Reveal className="campus-photo-wrap">
          <img
            className="campus-photo"
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
            alt="Students learning together in a bright classroom"
            loading="lazy"
          />
          <span className="photo-caption">A community full of possibility</span>
        </Reveal>

        <Reveal>
          <div className="campus-copy">
            <p className="eyebrow">Life beyond lessons</p>
            <h2 className="section-title">
              Discover what
              <br />
              <em>you can do.</em>
            </h2>
            <p>
              From sport and creativity to friendships and everyday discovery,
              school life offers students many ways to find their interests and
              build confidence.
            </p>
            <div className="campus-tags" aria-label="Student activities">
              <span>Sports</span>
              <span>Arts</span>
              <span>Boarding</span>
              <span>Community</span>
            </div>
            <a className="button button-dark" href="#admissions">
              Explore Tulas <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CampusSection;