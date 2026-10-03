import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Learning", href: "#learning" },
  { label: "Campus", href: "#campus" },
  { label: "Stories", href: "#stories" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">T</span>
          <span className="brand-copy">
            <strong>TULAS</strong>
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="button button-small" href="#admissions" onClick={closeMenu}>
            Enquire Now <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;