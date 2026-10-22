import { Link } from "react-router-dom";
import { SessionImage, ProductImage, ProductCard, SectionLabel } from "../components/Editorial";
import { productHref } from "../data/products";
import shopItems from "../data/shop.json";
import { sessions, sessionId, locationTitle } from "../data/sessions";
import landingLandscape from "../assets/landing/442AD580-AB62-4058-BA32-0D8A26691379_1_201_a.jpeg";
import landingPortrait from "../assets/landing/4DC23CC6-B8E1-4A65-AD1E-19C9CD1FB9E2_1_201_a.jpeg";
import footerImage from "../assets/footer/53AB5413-F580-430B-ADA8-BEC08E08DB15_1_105_c.jpeg";

const starring = [
  { name: "Potato", href: "https://www.instagram.com/ceonpotato/" },
  { name: "Greg", href: "https://www.instagram.com/otahix_/" },
  { name: "Banji", href: "https://www.instagram.com/brknbrds_/" },
  { name: "Ziri", href: "https://www.instagram.com/alienboyziri/" },
  { name: "Oseni", href: "https://www.instagram.com/tunde_oseniii/" },
  { name: "Gbemi", href: "https://www.instagram.com/mi.cocobaby/" },
  { name: "Lanre", href: "https://www.instagram.com/unussual_lanre/" },
];

export default function HomePage() {
  const giran = shopItems.find((item) => item.slug === "giran-deck")!;
  const featured = ["fs-shirt", "maelstrom-deck", "kerosene-windbreaker", "titanium-truck"]
    .map((slug) => shopItems.find((item) => item.slug === slug)!);

  return (
    <main id="main-content" className="home-page">
      <picture className="home-hero">
        <source media="(max-width: 767px)" srcSet={landingPortrait} width={2401} height={3361} />
        <img src={landingLandscape} alt="A skateboarder on a concrete ramp, photographed in black and white." width={2401} height={1335} fetchPriority="high" decoding="async" />
      </picture>
      <section className="home-masthead light-section" aria-labelledby="home-title">
        <div className="home-masthead__title"><h1 id="home-title">Brknbrds</h1></div>
        <dl className="home-masthead__metadata">
          <div><dt className="mono">NOTES</dt><dd><ul><li>8_6</li><li>Unholy alloys</li><li>Dependable hardware</li></ul></dd></div>
          <div><dt className="mono">STARRING</dt><dd><ul>{starring.map((person) => <li key={person.name}><a href={person.href} target="_blank" rel="noreferrer">{person.name}</a></li>)}</ul></dd></div>
        </dl>
        <div className="home-intro"><span className="mono">BRKNBRDS — LAGOS</span><p>If you’re looking for safe, focus-grouped skate products, you’re in the wrong place. This site contains abnormally high levels of grevail, mustion, and coursistence.</p></div>
      </section>

      <section className="home-sessions dark-section section-pad" aria-label="Sessions">
        <SectionLabel title="SESSIONS / FIELD LOG" to="/sessions" linkText="VIEW ALL" />
        <div className="editorial-row">
          {sessions.slice(0, 4).map((session) => (
            <Link className="editorial-card" to={`/sessions#${sessionId(session)}`} key={sessionId(session)}>
              <SessionImage session={session} />
              <div className="editorial-card__caption"><h3>{locationTitle(session.location)}</h3><span className="mono">{session.date}</span></div>
              <div className="editorial-card__metadata mono"><span>{session.city} / {session.time}</span><span>{session.status}</span></div>
            </Link>
          ))}
        </div>
        <p className="record-note mono">PUBLIC RUNS — DATES AS RECORDED</p>
      </section>

      <section className="home-product light-section section-pad" aria-labelledby="giran-title">
        <div className="feature-heading">
          <Link className="feature-heading__label mono" to="/shop">SHOP →</Link>
          <div className="feature-heading__title"><p className="mono">SKATEBOARDS, DEPENDABLE HARDWARE</p><h2 id="giran-title">{giran.name}</h2></div>
        </div>
        <div className="product-feature">
          <Link to={productHref(giran)} className="product-feature__image" aria-label={`Explore ${giran.name}`}><ProductImage name={giran.name} assetName={giran.images[0]} /></Link>
          <div className="product-feature__copy"><p>{giran.description}</p><Link className="button-link" to={productHref(giran)}>VIEW PRODUCT <span className="mono">{giran.price}</span><span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="home-shop dark-section section-pad" aria-label="Shop selection">
        <SectionLabel title="SHOP / BRKNBRDS" to="/shop" linkText={`VIEW ALL ${shopItems.length}`} />
        <div className="editorial-row">{featured.map((item) => <ProductCard item={item} key={item.slug} />)}</div>
      </section>

      <section className="home-promo dark-section" aria-labelledby="promo-title">
        <div className="home-promo__copy"><p className="mono">BRKNBRDS — SESSIONS</p><h2 id="promo-title">Open sessions.<br />Good terrain.</h2><p className="home-promo__description">Open sessions, film runs, test nights, bad ideas, good terrain.</p><Link className="button-link button-link--solid" to="/sessions">SESSIONS <span aria-hidden="true">→</span></Link></div>
        <div className="media-space home-promo__image"><img src={footerImage} alt="A group posing together at night." width={1086} height={724} loading="lazy" decoding="async" /></div>
      </section>
    </main>
  );
}
