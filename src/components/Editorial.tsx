import { Link } from "react-router-dom";
import { useState } from "react";
import { productHref, type Product } from "../data/products";
import { getImage } from "../data/productImages";
import type { Session } from "../data/sessions";

// Keep unsupplied editorial imagery blank until its assets are provided.
export function MediaSpace({ name, assetName, className = "" }: { name: string; assetName?: string; className?: string }) {
  return <div className={`media-space ${className}`} role="img" aria-label={`Image area for ${name}`} data-asset-name={assetName} />;
}

export function SessionImage({ session }: { session: Session }) {
  if (!session.image) return <MediaSpace name={session.location} />;

  return (
    <div className="media-space session-image">
      <img src={session.image.src} alt={session.image.alt} loading="lazy" decoding="async" />
    </div>
  );
}

export function ProductImage({ name, assetName }: { name: string; assetName: string }) {
  const image = getImage(assetName);
  if (!image) return <MediaSpace name={name} assetName={assetName} />;

  return (
    <div className="media-space product-image" data-asset-name={assetName}>
      <img src={image} alt={name} loading="lazy" decoding="async" />
    </div>
  );
}

export function ProductGallery({ item }: { item: Product }) {
  const galleryImages = [...new Set(item.images)].filter((filename) => getImage(filename));
  const [selectedImage, setSelectedImage] = useState(galleryImages[0] ?? item.images[0]);

  return (
    <div className="product-gallery">
      <ProductImage name={item.name} assetName={selectedImage} />
      {galleryImages.length > 1 && (
        <div className="product-thumbnails" aria-label={`${item.name} views`}>
          {galleryImages.map((filename, index) => (
            <button
              className="product-thumbnail"
              type="button"
              aria-label={`Show view ${index + 1} of ${item.name}`}
              aria-pressed={selectedImage === filename}
              key={filename}
              onClick={() => setSelectedImage(filename)}
            >
              <ProductImage name={`${item.name}, view ${index + 1}`} assetName={filename} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function SectionLabel({ title, to, linkText }: { title: string; to?: string; linkText?: string }) {
  return <div className="section-label mono"><h2>{title}</h2>{to && <Link to={to}>{linkText} <span aria-hidden="true">→</span></Link>}</div>;
}

export function ProductCard({ item }: { item: Product }) {
  return (
    <Link className="editorial-card" to={productHref(item)}>
      <ProductImage name={item.name} assetName={item.images[0]} />
      <div className="editorial-card__caption"><h3>{item.name}</h3><span className="mono">{item.price}</span></div>
    </Link>
  );
}
