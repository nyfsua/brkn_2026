import { useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SessionsPage from "./pages/SessionsPage";
import ArchivePage from "./pages/ArchivePage";
import DryStuffPage from "./pages/DryStuffPage";
import ProductPage from "./pages/ProductPage";
import shopItems from "./data/shop.json";

function PageMetadata() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const product = shopItems.find((item) => `/shop/${encodeURIComponent(item.slug)}` === pathname);
    const pages: Record<string, [string, string]> = {
      "/": ["Brknbrds — Lagos", "Skateboards, dependable hardware. Sessions, products and the Brknbrds archive."],
      "/shop": ["Shop — Brknbrds", `Skateboards, dependable hardware. Explore all ${shopItems.length} Brknbrds products.`],
      "/sessions": ["Sessions — Brknbrds", "Open sessions, film runs, test nights, bad ideas, good terrain. Field log / public runs."],
      "/archive": ["Archive — Brknbrds", "The Brknbrds archive. Lagos."],
      "/dry-stuff": ["Dry Stuff — Brknbrds", "Brknbrds legal division. Terms, liability and materials."],
    };
    const [title, description] = product ? [`${product.name} — Brknbrds`, product.description] : (pages[pathname] ?? ["Page not found — Brknbrds", "Brknbrds — Lagos."]);
    document.title = title;
    for (const [selector, value] of [["meta[name='description']", description], ["meta[property='og:title']", title], ["meta[property='og:description']", description]]) document.querySelector(selector)?.setAttribute("content", value);
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return <><PageMetadata /><SiteHeader /><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/shop" element={<ShopPage />} />
    <Route path="/shop/:slug" element={<ProductPage />} />
    <Route path="/sessions" element={<SessionsPage />} />
    <Route path="/archive" element={<ArchivePage />} />
    <Route path="/dry-stuff" element={<DryStuffPage />} />
    <Route path="*" element={<main id="main-content" className="light-section section-pad not-found"><h1>Page not found.</h1><Link className="button-link" to="/">BRKNBRDS →</Link></main>} />
  </Routes><SiteFooter /></>;
}
