import { Link, useParams } from "react-router-dom";
import { ProductGallery, ProductCard } from "../components/Editorial";
import shopItems from "../data/shop.json";

export default function ProductPage() {
  const { slug } = useParams();
  const item = shopItems.find((product) => product.slug === slug);
  if (!item) return <main id="main-content" className="light-section section-pad not-found"><h1>Product not found.</h1><Link className="button-link" to="/shop">BACK TO SHOP →</Link></main>;

  const related = shopItems.filter((product) => product.slug !== slug).slice(0, 4);
  return (
    <main id="main-content" className="product-page light-section section-pad">
      <div className="product-breadcrumb mono"><Link to="/shop">SHOP</Link><span aria-hidden="true">/</span><span>{item.name}</span></div>
      <div className="feature-heading"><Link className="feature-heading__label mono" to="/shop">ALL PRODUCTS →</Link><div className="feature-heading__title"><p className="mono">BRKNBRDS — LAGOS</p><h1>{item.name}</h1></div></div>
      <div className="product-feature product-feature--detail">
        <ProductGallery item={item} key={item.slug} />
        <div className="product-feature__copy"><p>{item.description}</p><p className="product-price mono">{item.price}</p><div className="product-sections">{item.sections.map((section) => <details key={section.title}><summary className="mono">{section.title}<span aria-hidden="true">+</span></summary><p>{section.content}</p></details>)}</div>{item.delivery && <details className="delivery-record"><summary className="mono">DELIVERY DATES AS RECORDED <span aria-hidden="true">+</span></summary><p className="mono">{item.delivery.from} — {item.delivery.to}</p></details>}</div>
      </div>
      <div className="section-label mono"><h2>MORE FROM BRKNBRDS</h2><Link to="/shop">VIEW ALL →</Link></div>
      <div className="editorial-row product-related">{related.map((product) => <ProductCard item={product} key={product.slug} />)}</div>
    </main>
  );
}
