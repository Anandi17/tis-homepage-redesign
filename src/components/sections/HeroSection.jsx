import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" aria-hidden="true" />

      <div className="hero-content container">
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A place to learn, grow and belong
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Find your place
          <br />
          <em>to become.</em>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to Tulas International School, Dehradun—a community where
          learning, character, and possibility grow together.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a className="button" href="#admissions">
            Explore Admissions <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#about">
            Discover Tulas <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        <div className="hero-note">
          <span className="hero-note-line" />
          <span>Boarding &amp; day school · Dehradun, India</span>
        </div>
      </div>

      <div className="hero-side-label" aria-hidden="true">GROW WITH PURPOSE</div>
    </section>
  );
}

export default HeroSection;