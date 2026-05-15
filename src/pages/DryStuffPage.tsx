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
      <section
  className="
    relative
    mt-10
    flex
    flex-col
    gap-20
    md:mt-12
  "
>
        {/* left column */}
       <div
  className="
    max-w-full
    md:max-w-[1400px]
    md:pr-[420px]
  "
>
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
  max-w-[92vw]
  text-[13px]
  uppercase
  leading-[0.98]
  tracking-[-0.08em]
  md:max-w-[1100px]
  md:text-[12px]
  md:leading-[0.92]
  md:tracking-[-0.09em]
"
          >
            OFF THE SHELF LIABILITY
            FOR PEOPLE WHO THROW
            THEMSELVES DOWN CONCRETE.
          </h1>

          <div
            className="
  mt-12
  max-w-[92vw]
  space-y-8
  text-[13px]
  leading-[1.75]
  tracking-[-0.06em]
  text-[#C6C6C8]

  md:mt-14
  md:max-w-[720px]
  md:space-y-10
  md:text-[12px]
  md:leading-[1.8]
  md:tracking-[-0.08em]
"
          >
            <p>
              BRKNBRDS PRODUCTS ARE BUILT FOR SKATEBOARDING. SKATEBOARDING INVOLVES IMPACT, SPEED, ABRASION, BAD DECISIONS, MOMENTARY DELUSION, FAILED LANDINGS, MISSED TIMING, SUDDEN LOSS OF TRACTION, AND OCCASIONAL HIGH-SPEED CONTACT WITH STATIONARY ARCHITECTURE, MOVING VEHICLES, OR OTHER PEOPLE WHO WOULD PREFER NOT TO BE INCLUDED.
            </p>

            <p>
              USING THIS EQUIPMENT MAY RESULT IN DAMAGE TO PROPERTY, HARDWARE, BONES, LIGAMENTS, ELECTRONICS, DIGNITY, RELATIONSHIPS, EMPLOYMENT STATUS, DENTAL STRUCTURE, OR WHATEVER REMAINING COMMON SENSE YOU POSSESSED PRIOR TO PURCHASE. SCRAPES, FRACTURES, SPRAINS, DISLOCATIONS, AND PUBLIC EMBARRASSMENT ARE ALL WELL-DOCUMENTED SIDE EFFECTS OF RECREATIONAL SKATEBOARD USE.
            </p>

            <p>
              ALL PRODUCTS SHOULD BE INSPECTED BEFORE USE AND REGULARLY MONITORED FOR STRUCTURAL FAILURE, MATERIAL FATIGUE, DELAMINATION, CRACKING, LOOSE HARDWARE, OR ANY OTHER CONDITION THAT LOOKS EVEN REMOTELY QUESTIONABLE. REPLACE DAMAGED COMPONENTS IMMEDIATELY. DO NOT SKATE CRACKED DECKS, COMPROMISED TRUCKS, STRIPPED HARDWARE, FLATSPOTTED WHEELS, OR EQUIPMENT YOU “THINK IS PROBABLY FINE.” IT PROBABLY ISN’T.
            </p>

            <p>
              BRKNBRDS DOES NOT GUARANTEE PERFORMANCE, CONSISTENCY, INVINCIBILITY, ATHLETIC PROGRESSION, SOCIAL RELEVANCE, OR SUCCESSFUL TRE FLIPS. OWNERSHIP OF OUR PRODUCTS DOES NOT AUTOMATICALLY IMPROVE STYLE, BALANCE, COURAGE, TASTE, OR ABILITY TO LAND ANYTHING FIRST TRY. RESULTS MAY VARY SIGNIFICANTLY DEPENDING ON TERRAIN, WEATHER CONDITIONS, SLEEP DEPRIVATION, MUSIC SELECTION, PEER PRESSURE, OR SHEER OVERCONFIDENCE.
            </p>

            <p>
              OUR PRODUCTS ARE INTENDED FOR EXPERIENCED USERS WHO UNDERSTAND THE RISKS ASSOCIATED WITH SKATEBOARDING AND RELATED ACTIVITIES. USERS ASSUME FULL RESPONSIBILITY FOR ALL OUTCOMES RESULTING FROM MISUSE, NEGLECT, MODIFICATION, EXCESSIVE EGO, OR THE DELIBERATE IGNORING OF OBVIOUSLY BAD IDEAS. PARENTS ARE ADVISED THAT SKATEBOARDING IS LOUD, FAST, UNPREDICTABLE, AND GENERALLY INCOMPATIBLE WITH CLEAN CLOTHING.
            </p>

            <p>
              BY CONTINUING TO ACCESS THIS SITE OR USE ANY ASSOCIATED PRODUCTS, YOU ACKNOWLEDGE THAT SKATEBOARDING IS INHERENTLY VOLUNTARY, OCCASIONALLY IRRATIONAL, PHYSICALLY AGGRESSIVE, FINANCIALLY QUESTIONABLE, AND EXTREMELY STUPID. YOU ACCEPT THESE CONDITIONS WILLINGLY.
            </p>
            
          </div>
        </div>

        
        {/* right visual */}
<div
  className="
    fixed
    left-[34%]
    top-[72%]
    flex
    -translate-y-1/2
    items-center
    justify-center
    opacity-100
    md:right-[16vw]
    md:left-auto
    md:top-1/2
  "
>
  {/* outer ring */}
  <div
    className="
      absolute
      h-[260px]
      w-[260px]
      rounded-full
      border
      border-dashed
      border-[#C6C6C8]
      opacity-70
      md:h-[420px]
      md:w-[420px]
    "
  />

  {/* inner ring */}
  <div
    className="
      absolute
      h-[140px]
      w-[140px]
      rounded-full
      border
      border-dashed
      border-[#C6C6C8]
      md:h-[220px]
      md:w-[220px]
    "
  />

  {/* rotating board */}
  <motion.img
    src={rotatingBoard}
    alt=""
    className="
      relative
      z-10
      w-[120px]
      md:w-[200px]
    "
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
      bottom-[-34px]
      hidden
      rounded-[4px]
      bg-[#C6C6C8]
      px-4
      py-2
      text-[9px]
      uppercase
      tracking-[-0.08em]
      text-black
      md:block
      md:bottom-[-40px]
      md:px-5
      md:py-3
      md:text-[11px]
    "
  >
    YOUR BOARD IS A PROJECTILE
  </div>
</div>
      </section>
    </main>
  );
}