import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [hoveredItem, setHoveredItem] =
  useState<string | null>(null);

const [cursorPosition, setCursorPosition] =
  useState({
    x: 0,
    y: 0,
  });
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
  grid-cols-4
  justify-items-center
  gap-y-[72px]
  gap-x-[12px]
  pb-[80px]
  md:grid-cols-8
  md:gap-y-[40px]
"
      >
        {shopItems.map((item) => (
          <Link
          onMouseEnter={() =>
    setHoveredItem(item.slug)
  }
  onMouseLeave={() =>
    setHoveredItem(null)
  }
  onMouseMove={(e) =>
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }
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
                max-h-[90px] md:max-h-[140px]
                w-auto
                object-contain
                transition-opacity
                duration-300
                group-hover:opacity-75
              "
            />

            {/* hover card */}
{hoveredItem && (
  <div
    className="
      pointer-events-none
      fixed
      z-[999]
    "
    style={{
      left: cursorPosition.x + 18,
      top: cursorPosition.y + 18,
    }}
  >
    {(() => {
      const item = shopItems.find(
        (p) => p.slug === hoveredItem
      );

      if (!item) return null;

      return (
        <div
          className="
            rounded-[8px]
            bg-[#C6C6C8]
            px-2
            py-2
            text-black
            
          "
        >
          <div
            className="
              whitespace-nowrap
              text-[11px]
              font-semibold
              leading-none
              tracking-[-0.06em]
            "
          >
            {item.name}
          </div>

          <div
            className="
              mt-1
              text-[11px]
              font-semibold
              leading-none
              tracking-[-0.06em]
            "
          >
            {item.price}
          </div>
        </div>
      );
    })()}
  </div>
)}

          </Link>
        ))}
      </section>
    </main>
  );
}