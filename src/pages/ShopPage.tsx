import { ProductCard, SectionLabel } from "../components/Editorial";
import shopItems from "../data/shop.json";

export default function ShopPage() {
  return (
    <main id="main-content" className="shop-page light-section section-pad">
      <div className="page-heading"><p className="mono">BRKNBRDS — LAGOS / {shopItems.length} PRODUCTS</p><h1>Shop</h1><p className="page-heading__description">Skateboards, dependable hardware.</p></div>
      <SectionLabel title="ALL PRODUCTS" />
      <div className="shop-grid">{shopItems.map((item) => <ProductCard item={item} key={item.slug} />)}</div>
    </main>
  );
}
