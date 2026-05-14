import { Link } from "react-router-dom";

import tiffinagh from "../assets/svg/logo-tiffinagh.svg";

import archive1 from "../assets/archive/4c9b2233-b494-4ff3-8613-236a192e31df.jpg";
import archive2 from "../assets/archive/IMG_1171.png";
import archive3 from "../assets/archive/f0c84361-9ce2-446f-b5ed-96519fcfb428.jpg";
import archive4 from "../assets/archive/image32.jpeg";
import archive5 from "../assets/archive/c55a325d-bb87-423b-a029-7336200ecffd.jpg";
import archive6 from "../assets/archive/IMG_1168.png";
import archive7 from "../assets/archive/IMG_3484.jpeg";
import archive8 from "../assets/archive/6a0ab858-85a8-485f-8640-51d1b0689cc0.jpg";
import archive9 from "../assets/archive/P1090439.jpg";
import archive10 from "../assets/archive/IMG_1687.jpeg";
import archive11 from "../assets/archive/IMG_1172.png";
import archive12 from "../assets/archive/IMG_1169.png";
import archive13 from "../assets/archive/B12AA5F0-2ED5-491D-9C6F-46E7F1D25490.jpg";
import archive14 from "../assets/archive/IMG_4024.jpeg";
import archive15 from "../assets/archive/IMG_1627.jpeg";
import archive16 from "../assets/archive/P1100633.jpg";
import archive17 from "../assets/archive/image38.jpeg";
import archive18 from "../assets/archive/41BB191C-7BC3-4B59-B66B-058BBB622363.jpg";
import archive19 from "../assets/archive/IMG_4525.jpeg";
import archive20 from "../assets/archive/IMG_3429.jpeg";
import archive21 from "../assets/archive/image33.jpeg";
import archive22 from "../assets/archive/IMG_4489.jpeg";
import archive23 from "../assets/archive/IMG_1170.png";
import archive24 from "../assets/archive/IMG_1175.png";
import archive25 from "../assets/archive/76001efb-a8d9-4152-b95b-2920558b0943.jpg";

const baseArchiveItems = [
  archive1,
  archive2,
  archive3,
  archive4,
  archive5,
  archive6,
  archive7,
  archive8,
  archive9,
  archive10,
  archive11,
  archive12,
  archive13,
  archive14,
  archive15,
  archive16,
  archive17,
  archive18,
  archive19,
  archive20,
  archive21,
  archive22,
  archive23,
  archive24,
  archive25,
];

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
          columns-3
          gap-6
          space-y-6
          max-w-[1280px]
          pb-24
        "
      >
        {archiveItems.map((image, index) => (
          <button
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
          </button>
        ))}
      </section>
    </main>
  );
}