const images = import.meta.glob<string>(
  "../assets/shop/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true, import: "default" }
);

export function getImage(filename: string): string | undefined {
  return images[`../assets/shop/${filename}`];
}
