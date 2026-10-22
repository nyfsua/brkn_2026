import type shopItems from "./shop.json";

export type Product = typeof shopItems[number];

export function productHref(item: Product) {
  return `/shop/${encodeURIComponent(item.slug)}`;
}
