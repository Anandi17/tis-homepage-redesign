import Reveal from "../animation/Reveal";

function TestimonialsSection() {
  return (
    <section className="section story-section" id="stories">
      <div className="container story-container">
        <Reveal>
          <p className="eyebrow">The Tulas community</p>
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>
            A school should help every student feel supported, discover their
            strengths, and find the confidence to keep growing.
          </blockquote>
          <p className="quote-attribution">
            <span className="quote-dot" />
            A thought from the Tulas community
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default TestimonialsSection;