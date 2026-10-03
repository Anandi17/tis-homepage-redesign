import Reveal from "../animation/Reveal";

const experiences = [
  {
    number: "01",
    title: "Academic learning",
    text: "A CBSE learning environment that encourages curiosity, steady effort, and strong foundations.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Boarding life",
    text: "A supportive school community where students build independence, friendships, and confidence.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "Beyond the classroom",
    text: "Explore sports, arts, and activities that help students discover new interests and strengths.",
    icon: "↗",
  },
];

function ProgramsSection() {
  return (
    <section className="section learning-section" id="learning">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Learning at Tulas</p>
              <h2 className="section-title">
                Room to learn.
                <br />
                <em>Space to grow.</em>
              </h2>
            </div>
            <p className="heading-note">
              A thoughtful school experience brings academic learning,
              personal development, and community together.
            </p>
          </div>
        </Reveal>

        <div className="experience-grid">
          {experiences.map((item) => (
            <Reveal key={item.number}>
              <article className="experience-card">
                <div className="card-topline">
                  <span>{item.number}</span>
                  <span className="card-icon" aria-hidden="true">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#admissions" aria-label={`Enquire about ${item.title}`}>
                  Learn more <span aria-hidden="true">↗</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;