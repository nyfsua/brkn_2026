import { Link } from "react-router-dom";

import tiffinagh from "../assets/svg/logo-tiffinagh.svg";

/*
  auto-import every archive image
  no manual imports anymore
*/

const archiveImages = import.meta.glob(
  "../assets/archive/converted/*.{webp,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

/*
  flatten into usable array
*/

const baseArchiveItems = Object.values(
  archiveImages
) as string[];

/*
  extend archive length
*/

const archiveItems = Array(12)
  .fill(baseArchiveItems)
  .flat()
  .sort(() => Math.random() - 0.5);



export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#151515] px-7 py-6">
      {/* top */}
      <header className="sticky top-0 z-50 mb-14 flex items-start justify-between bg-[#151515]/90 pb-4 backdrop-blur-sm">
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

      {/* archive field */}
      <section
        className="
          mx-auto
          columns-1 md:columns-3
          gap-6
          space-y-6
          max-w-[1280px]
          pb-24
        "
      >
        {archiveItems.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="
              group
              relative
              mb-6
              block
              w-full
              break-inside-avoid
              overflow-hidden
              bg-black
            "
          >
            <img
              src={image}
              alt=""
              loading="lazy"
              className="
                h-auto
                w-full
                object-cover
                transition-all
                duration-500
                group-hover:scale-[1.015]
                group-hover:opacity-80
              "
            />

            {/* overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                border
                border-transparent
                transition-colors
                duration-300
                group-hover:border-[#C81103]
              "
            />

            {/* hover label */}
            <div
              className="
                absolute
                bottom-4
                left-4
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            >
              <a
  href="https://instagram.com/brknbrds_"
  target="_blank"
  rel="noreferrer"
  className="
    bg-[#C81103]
    px-2
    py-1
    text-[11px]
    uppercase
    tracking-[-0.08em]
    text-white
    transition-opacity
    duration-200
    hover:opacity-70
  "
>
  SEE MORE
</a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}