import { Link } from "react-router-dom";

import tiffinagh from "../assets/svg/logo-tiffinagh.svg";

import shopItems from "../data/shop.json";

const images = import.meta.glob(
  "../assets/shop/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

const getImage = (filename: string) => {
  return images[`../assets/shop/${filename}`] as string;
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#151515] px-[34px] py-[28px]">
      {/* top */}
      <header className="mb-[54px] flex items-start justify-between">
        <img
          src={tiffinagh}
          alt=""
          className="w-[96px]"
        />

        <Link
          to="/"
          className="
            text-[12px]
            uppercase
            tracking-[-0.08em]
            text-[#C6C6C8]
            transition-colors
            duration-200
            hover:text-[#C81103]
          "
        >
          EXIT
        </Link>
      </header>

      {/* grid */}
      <section
        className="
          mx-auto
          grid
          max-w-[1680px]
          grid-cols-8
          grid-row-4
          justify-items-center
          gap-y-[40px]
          pb-[20px]
        "
      >
        {shopItems.map((item) => (
          <Link
            key={item.slug}
            to={`/shop/${item.slug}`}
            className="
              group
              relative
              flex
              items-center
              justify-center
            "
          >
            <img
              src={getImage(item.images[0])}
              alt={item.name}
              loading="lazy"
              draggable={false}
              className="
                max-h-[140px]
                w-auto
                object-contain
                transition-opacity
                duration-300
                group-hover:opacity-75
              "
            />

            {/* hover label */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-20px]
                left-1/2
                -translate-x-1/2
                opacity-0
                transition-opacity
                duration-200
                group-hover:opacity-100
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-[10px]
                  uppercase
                  tracking-[-0.08em]
                  text-[#C81103]
                "
              >
                VIEW OBJECT
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}