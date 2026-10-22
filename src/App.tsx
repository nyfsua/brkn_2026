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
import { getMetadataTags, getPageMetadata } from "./data/pageMetadata";

function PageMetadata() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const { title, url } = getPageMetadata(pathname);
    document.title = title;
    document.querySelector("link[rel='canonical']")?.setAttribute("href", url);
    for (const { attribute, key, content } of getMetadataTags(pathname)) {
      document.querySelector(`meta[${attribute}='${key}']`)?.setAttribute("content", content);
    }
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
