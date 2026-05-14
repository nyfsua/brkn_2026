import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import rotatingBoard from "../assets/img/giran.png";

export default function LegalPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#151515] px-7 py-5 text-[#C6C6C8]">
      {/* top announcement */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-[#2A2A2D]
          pb-2
          text-[11px]
          uppercase
          tracking-[-0.08em]
        "
      >
        <p className="text-[#C6C6C8]">
          INDEX – TERMS / LIABILITY / MATERIALS 
        </p>

        <Link
          to="/"
          className="
            transition-colors
            duration-200
            hover:text-[#C81103]
          "
        >
          EXIT
        </Link>
      </div>

      {/* top metadata */}
      <section className="mt-7 flex items-start justify-between">
        <div
          className="
            text-[12px]
            uppercase
            leading-[1.15]
            tracking-[-0.08em]
          "
        >
          <p>BRKNBRDS LEGAL DIVISION</p>
          <p>DRY STUFF</p>
          <p>2026</p>
        </div>

        
      </section>

      {/* main */}
      <section className="mt-12 grid grid-cols-2 gap-24">
        {/* left column */}
        <div className="max-w-[960px]">
          <div
            className="
              mb-14
              text-[12px]
              uppercase
              tracking-[-0.08em]
              text-[#C6C6C8]
            "
          >
            ~~ © NIGERIAN DYNAMICS 90642, INC. ~~
          </div>

          <h1
            className="
              text-[12px]
              uppercase
              leading-[0.92]
              tracking-[-0.09em]
            "
          >
            OFF THE SHELF LIABILITY
            FOR PEOPLE WHO THROW
            THEMSELVES DOWN CONCRETE.
          </h1>

          <div
            className="
              mt-14
              space-y-10
              text-[12px]
              leading-[2]
              tracking-[-0.1em]
              text-[#C6C6C8]
            "
          >
            <p>
              BRKNBRDS PRODUCTS ARE BUILT FOR SKATEBOARDING.
              SKATEBOARDING INVOLVES IMPACT, SPEED, ABRASION,
              BAD DECISIONS, AND OCCASIONAL CONTACT WITH
              STATIONARY ARCHITECTURE.
            </p>

            <p>
              USING THIS EQUIPMENT MAY RESULT IN DAMAGE TO
              PROPERTY, HARDWARE, BONES, RELATIONSHIPS,
              ELECTRONICS, TEETH, OR EMPLOYMENT STATUS.
            </p>

            <p>
              ALL PRODUCTS SHOULD BE INSPECTED BEFORE USE.
              REPLACE DAMAGED COMPONENTS IMMEDIATELY.
              DO NOT SKATE CRACKED DECKS, COMPROMISED
              TRUCKS, OR HARDWARE YOU “THINK IS PROBABLY FINE.”
            </p>

            <p>
              BRKNBRDS MAKES NO CLAIMS REGARDING INVINCIBILITY,
              IMMORTALITY, OR SUCCESSFUL TRE FLIPS.
            </p>

            <p>
              BY CONTINUING TO USE THIS SITE OR ANY ASSOCIATED
              PRODUCTS, YOU ACKNOWLEDGE THAT SKATEBOARDING
              IS INHERENTLY VOLUNTARY AND EXTREMELY STUPID.
            </p>
          </div>
        </div>

        {/* right visual */}
        <div
  className="
    fixed
    right-[16vw]
    top-1/2
    flex
    -translate-y-1/2
    items-center
    justify-center
  "
>
          {/* outer ring */}
          <div
            className="
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              border
              border-dashed
              border-[#C6C6C8]
              opacity-70
            "
          />

          {/* inner ring */}
          <div
            className="
              absolute
              h-[220px]
              w-[220px]
              rounded-full
              border
              border-dashed
              border-[#C6C6C8]
            "
          />

          {/* rotating board */}
          <motion.img
            src={rotatingBoard}
            alt=""
            className="relative z-10 w-[200px]"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* bottom tag */}
          <div
            className="
              absolute
              bottom-[-40px]
              rounded-[4px]
              bg-[#C6C6C8]
              px-5
              py-3
              text-[11px]
              uppercase
              tracking-[-0.08em]
              text-black
            "
          >
            YOUR BOARD IS A PROJECTILE
          </div>
        </div>
      </section>
    </main>
  );
}