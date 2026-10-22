import { Link } from "react-router-dom";
import tiffinagh from "../assets/svg/logo-tiffinagh.svg";
import asterisk from "../assets/svg/logo-asterisk.svg";

export default function SiteFooter() {
  return (
    <footer className="site-footer dark-section">
      <div className="footer-links">
        <nav aria-label="Explore"><Link to="/sessions">Sessions</Link><Link to="/shop">Shop</Link><Link to="/archive">Archive</Link><Link to="/dry-stuff">Dry Stuff</Link></nav>
        <nav aria-label="Riders"><a href="https://www.instagram.com/ceonpotato/" target="_blank" rel="noreferrer">Potato</a><a href="https://www.instagram.com/brknbrds_/" target="_blank" rel="noreferrer">Banji</a><a href="https://www.instagram.com/otahix_/" target="_blank" rel="noreferrer">Greg</a></nav>
        <nav aria-label="Lab"><a href="https://90642.org/" target="_blank" rel="noreferrer">Lab ↗</a><img src={tiffinagh} alt="" width="112" height="17" className="footer-tiffinagh" /></nav>
        <nav aria-label="Social"><a href="https://instagram.com/brknbrds_" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://x.com/" target="_blank" rel="noreferrer">X ↗</a><a href="https://youtube.com/" target="_blank" rel="noreferrer">YouTube ↗</a><a href="https://open.spotify.com/" target="_blank" rel="noreferrer">Spotify ↗</a></nav>
      </div>
      <div className="footer-legal mono">
        <p>© 2026<br />NIGERIAN DYNAMICS 90642, INC.</p>
        <Link to="/dry-stuff">TERMS / LIABILITY / MATERIALS ↗</Link>
        <p>BRKNBRDS — LAGOS<br />SKATEBOARDS, DEPENDABLE HARDWARE</p>
        <img src={asterisk} alt="" width="113" height="77" />
      </div>
    </footer>
  );
}
