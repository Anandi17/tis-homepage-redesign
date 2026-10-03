function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">T</span>
          <span className="brand-copy">
            <strong>TULAS</strong>
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        <p>
          Tulas International School
          <br />
          Dehradun, Uttarakhand, India
        </p>

        <div className="footer-links">
          <a href="https://tis.edu.in/" target="_blank" rel="noreferrer">
            Official website <span aria-hidden="true">↗</span>
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Tulas International School</span>
        <span>Learning. Character. Possibility.</span>
      </div>
    </footer>
  );
}

export default Footer;