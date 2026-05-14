import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import flat from "../assets/svg/logo-flat.svg";
import tiffinagh from "../assets/svg/logo-tiffinagh.svg";
import asterisk from "../assets/svg/logo-asterisk.svg";

import spotifyLogo from "../assets/svg/spotify.svg";
import youtubeLogo from "../assets/svg/youtube.svg";
import twitterLogo from "../assets/svg/twitter.svg";

export default function HomePage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#151515] text-[#C6C6C8]">
      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 0.4px, transparent 0.4px)",
            backgroundSize: "5px 5px",
          }}
        />
      </div>

      {/* top left */}
      <div className="absolute left-7 top-6 z-20 flex flex-col text-[12px] uppercase leading-[1.05] tracking-[-0.08em] text-[#C6C6C8]">
        <span>BRKNBRDS — LAGOS</span>
        <span>SKATEBOARDS, DEPENDABLE HARDWARE</span>
        <span>2026</span>
      </div>

      {/* top nav */}
      <nav className="absolute right-7 top-6 z-20 flex items-center gap-12 text-[12px] uppercase tracking-[-0.08em]">
        <a
          href="https://90642.org/"
          target="_blank"
          rel="noreferrer"
          className="text-[#C6C6C8] transition-colors duration-200 hover:text-[#C81103]"
        >
          LAB
        </a>

        <a
          href="https://instagram.com/brknbrds_"
          target="_blank"
          rel="noreferrer"
          className="text-[#C6C6C8] transition-colors duration-200 hover:text-[#C81103]"
        >
          INSTAGRAM
        </a>

        {/* icon cluster */}
        <div className="flex items-center gap-8">
          <a
            href="https://open.spotify.com/user/31j2pzm5e5fjdcti5mdvuunsxgs4"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <img
              src={spotifyLogo}
              alt="Spotify"
              className="
                h-[18px]
                w-auto
                transition-all
                duration-200
                group-hover:[filter:brightness(0)_saturate(100%)_invert(16%)_sepia(92%)_saturate(6225%)_hue-rotate(4deg)_brightness(93%)_contrast(98%)]
              "
            />
          </a>

          <a
            href="https://www.youtube.com/@brknbrds"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <img
              src={youtubeLogo}
              alt="YouTube"
              className="
                h-[18px]
                w-auto
                transition-all
                duration-200
                group-hover:[filter:brightness(0)_saturate(100%)_invert(16%)_sepia(92%)_saturate(6225%)_hue-rotate(4deg)_brightness(93%)_contrast(98%)]
              "
            />
          </a>

          <a
            href="https://x.com/brknbrds"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <img
              src={twitterLogo}
              alt="X"
              className="
                h-[16px]
                w-auto
                transition-all
                duration-200
                group-hover:[filter:brightness(0)_saturate(100%)_invert(16%)_sepia(92%)_saturate(6225%)_hue-rotate(4deg)_brightness(93%)_contrast(98%)]
              "
            />
          </a>
        </div>

        <Link
          to="/sessions"
          className="text-[#C6C6C8] transition-colors duration-200 hover:text-[#C81103]"
        >
          SESSIONS
        </Link>

        <Link
          to="/shop"
          className="text-[#C6C6C8] transition-colors duration-200 hover:text-[#C81103]"
        >
          SHOP
        </Link>
      </nav>

      {/* center */}
      <section className="flex h-full flex-col items-center justify-center">
        <motion.img
          src={tiffinagh}
          alt=""
          className="mb-24 w-[118px]"
        />

        <motion.img
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          src={flat}
          alt="Brknbrds"
          className="w-[420px]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 1 }}
          className="
            mt-7
            max-w-[720px]
            text-center
            text-[12px]
            uppercase
            leading-[0.95]
            tracking-[-0.08em]
            text-[#C6C6C8]
          "
        >
          IF YOU’RE LOOKING FOR SAFE, FOCUS-GROUPED SKATE PRODUCTS,
          YOU’RE IN THE WRONG PLACE. THIS SITE CONTAINS ABNORMALLY
          HIGH LEVELS OF GREVAIL, MUSTION, AND COURSISTENCE.
        </motion.p>

        <motion.img
          src={asterisk}
          alt=""
          className="mt-28 w-[100px]"
        />
      </section>

      {/* bottom nav */}
      <footer className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 items-center gap-9 text-[12px] uppercase tracking-[-0.08em]">
        <a
          href="https://www.instagram.com/ceonpotato/"
          target="_blank"
          rel="noreferrer"
          className="text-[#C6C6C8] transition-colors duration-200 hover:text-[#C81103]"
        >
          POTATO
        </a>

        <a
          href="https://www.instagram.com/brknbrds_/"
          target="_blank"
          rel="noreferrer"
          className="text-[#C6C6C8] transition-colors duration-200 hover:text-[#C81103]"
        >
          BANJI
        </a>

        <a
          href="https://www.instagram.com/otahix_/"
          target="_blank"
          rel="noreferrer"
          className="text-[#C6C6C8] transition-colors duration-200 hover:text-[#C81103]"
        >
          GREG
        </a>

        <Link
          to="/archive"
          className="text-[#C6C6C8] transition-colors duration-200 hover:text-[#C81103]"
        >
          ARCHIVE
        </Link>

        <Link
          to="/dry-stuff"
          className="text-[#C81103] transition-colors duration-200 hover:text-[#C6C6C8]"
        >
          DRY STUFF
        </Link>
      </footer>
    </main>
  );
}