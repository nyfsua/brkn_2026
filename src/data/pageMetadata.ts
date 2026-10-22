import shopItems from "./shop.json";

export const siteOrigin = "https://brknbrds.com";

export const landingImage = {
  path: "/social/442AD580-AB62-4058-BA32-0D8A26691379_1_201_a.jpeg",
  width: 2401,
  height: 1335,
  alt: "A skateboarder on a concrete ramp, photographed in black and white.",
};

const pages: Record<string, [string, string]> = {
  "/": ["Brknbrds — Lagos", "Skateboards, dependable hardware. Sessions, products and the Brknbrds archive."],
  "/shop": ["Shop — Brknbrds", `Skateboards, dependable hardware. Explore all ${shopItems.length} Brknbrds products.`],
  "/sessions": ["Sessions — Brknbrds", "Open sessions, film runs, test nights, bad ideas, good terrain. Field log / public runs."],
  "/archive": ["Archive — Brknbrds", "The Brknbrds archive. Lagos."],
  "/dry-stuff": ["Dry Stuff — Brknbrds", "Brknbrds legal division. Terms, liability and materials."],
};

export const metadataPaths = [
  ...Object.keys(pages),
  ...shopItems.map((item) => `/shop/${encodeURIComponent(item.slug)}`),
];

export function getPageMetadata(path: string) {
  const pathname = new URL(path, siteOrigin).pathname.replace(/\/+$/, "") || "/";
  const product = shopItems.find((item) => `/shop/${encodeURIComponent(item.slug)}` === pathname);
  const [title, description] = product
    ? [`${product.name} — Brknbrds`, product.description.trim()]
    : (pages[pathname] ?? ["Page not found — Brknbrds", "Brknbrds — Lagos."]);
  const url = `${siteOrigin}${pathname === "/" ? "/" : `${pathname}/`}`;
  return { title, description, url };
}

export function getMetadataTags(path: string) {
  const { title, description, url } = getPageMetadata(path);
  const imageUrl = `${siteOrigin}${landingImage.path}`;
  return [
    { attribute: "name", key: "description", content: description },
    { attribute: "property", key: "og:title", content: title },
    { attribute: "property", key: "og:description", content: description },
    { attribute: "property", key: "og:type", content: "website" },
    { attribute: "property", key: "og:locale", content: "en_NG" },
    { attribute: "property", key: "og:site_name", content: "Brknbrds" },
    { attribute: "property", key: "og:url", content: url },
    { attribute: "property", key: "og:image", content: imageUrl },
    { attribute: "property", key: "og:image:secure_url", content: imageUrl },
    { attribute: "property", key: "og:image:type", content: "image/jpeg" },
    { attribute: "property", key: "og:image:width", content: String(landingImage.width) },
    { attribute: "property", key: "og:image:height", content: String(landingImage.height) },
    { attribute: "property", key: "og:image:alt", content: landingImage.alt },
    { attribute: "name", key: "twitter:card", content: "summary_large_image" },
    { attribute: "name", key: "twitter:title", content: title },
    { attribute: "name", key: "twitter:description", content: description },
    { attribute: "name", key: "twitter:image", content: imageUrl },
    { attribute: "name", key: "twitter:image:alt", content: landingImage.alt },
  ];
}
