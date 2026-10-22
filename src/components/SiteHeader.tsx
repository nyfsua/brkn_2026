import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import tiffinagh from "../assets/svg/logo-tiffinagh.svg";

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    firstLink.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    menuButton.current?.focus();
  }

  return (
    <header className={`site-header ${pathname === "/" ? "site-header--overlay" : ""}`}>
      <a className="skip-link mono" href="#main-content">SKIP TO CONTENT</a>
      <nav className="site-header__nav mono" aria-label="Main navigation">
        <NavLink to="/sessions">SESSIONS</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/archive">ARCHIVE</NavLink>
      </nav>
      <Link className="site-header__logo" to="/" aria-label="Brknbrds home" onClick={() => setMenuOpen(false)}>
        <img src={tiffinagh} alt="Brknbrds" width="112" height="17" />
      </Link>
      <div className="site-header__links mono">
        <a href="https://90642.org/" target="_blank" rel="noreferrer">LAB ↗</a>
        <a href="https://instagram.com/brknbrds_" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
      </div>
      <button ref={menuButton} className="menu-toggle mono" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "CLOSE −" : "MENU +"}
      </button>
      {menuOpen && (
        <div className="mobile-navigation" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation" onKeyDown={(event) => {
          if (event.key === "Escape") closeMenu();
          if (event.key === "Tab") {
            const links = event.currentTarget.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>("a, button");
            const first = links[0];
            const last = links[links.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
          }
        }}>
          <div className="mobile-navigation__top mono"><span>BRKNBRDS — LAGOS</span><button type="button" onClick={closeMenu}>CLOSE −</button></div>
          <nav aria-label="Mobile navigation">
            <Link ref={firstLink} to="/sessions" onClick={closeMenu}>Sessions</Link>
            <Link to="/shop" onClick={closeMenu}>Shop</Link>
            <Link to="/archive" onClick={closeMenu}>Archive</Link>
            <Link to="/dry-stuff" onClick={closeMenu}>Dry Stuff</Link>
          </nav>
          <div className="mobile-navigation__bottom mono">
            <a href="https://90642.org/" target="_blank" rel="noreferrer">LAB ↗</a>
            <a href="https://instagram.com/brknbrds_" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
          </div>
        </div>
      )}
    </header>
  );
}
