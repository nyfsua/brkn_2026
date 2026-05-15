import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

import flat from "../assets/svg/logo-flat.svg";
import tiffinagh from "../assets/svg/logo-tiffinagh.svg";
import asterisk from "../assets/svg/logo-asterisk.svg";

import spotifyLogo from "../assets/svg/spotify.svg";
import youtubeLogo from "../assets/svg/youtube.svg";
import twitterLogo from "../assets/svg/twitter.svg";

export default function HomePage() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <main
      className="
        relative
        h-screen
        w-screen
        overflow-hidden
        bg-[#151515]
        text-[#C6C6C8]
      "
    >
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
      <div
        className="
          absolute
          left-4
          top-4
          z-30
          flex
          flex-col
          text-[10px]
          uppercase
          leading-[1.05]
          tracking-[-0.08em]
          md:left-7
          md:top-6
          md:text-[12px]
        "
      >
        <span>BRKNBRDS - LAGOS</span>

        <span className="text-[#8E8E92]">
          SKATEBOARDS, DEPENDABLE HARDWARE
        </span>

        <span className="text-[#8E8E92]">
          2026
        </span>
      </div>

      {/* desktop nav */}
      <nav
        className="
          absolute
          right-7
          top-6
          z-30
          hidden
          items-center
          gap-12
          text-[12px]
          uppercase
          tracking-[-0.08em]
          md:flex
        "
      >
        <a
          href="https://90642.org/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          LAB
        </a>

        <a
          href="https://instagram.com/brknbrds_"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          INSTAGRAM
        </a>

        <div className="flex items-center gap-8">
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={spotifyLogo}
              alt=""
              className="h-[18px]"
            />
          </a>

          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={youtubeLogo}
              alt=""
              className="h-[18px]"
            />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitterLogo}
              alt=""
              className="h-[16px]"
            />
          </a>
        </div>

        <Link
          to="/sessions"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          SESSIONS
        </Link>

        <Link
          to="/shop"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          SHOP
        </Link>
      </nav>

      {/* mobile menu trigger */}
      <button
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        className="
          absolute
          right-4
          top-4
          z-40
          text-[10px]
          uppercase
          tracking-[-0.08em]
          md:hidden
        "
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </button>

      {/* mobile overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen
            ? "auto"
            : "none",
        }}
        transition={{ duration: 0.2 }}
        className="
          absolute
          inset-0
          z-20
          flex
          flex-col
          justify-center
          bg-[#151515]
          px-5
          md:hidden
        "
      >
        <div
          className="
            flex
    flex-col
    items-center
    text-center
    gap-5
    text-[12px]
    uppercase
    tracking-[-0.08em]
          "
        >
          <Link
            to="/shop"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            SHOP
          </Link>

          <Link
            to="/sessions"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            SESSIONS
          </Link>

          <a
            href="https://www.instagram.com/brknbrds_"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            INSTAGRAM
          </a>

          <a
            href="https://90642.org/"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              setMenuOpen(false)
            }
            className="text-[#C6C6C8]"
          >
            LAB
          </a>

          <div className="mt-2 flex items-center justify-center gap-12">
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={spotifyLogo}
              alt=""
              className="h-[18px]"
            />
          </a>

          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={youtubeLogo}
              alt=""
              className="h-[18px]"
            />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitterLogo}
              alt=""
              className="h-[16px]"
            />
          </a>
        </div>

          
        </div>
      </motion.div>

      {/* center */}
      <section
        className="
          flex
          h-full
          flex-col
          items-center
          justify-center
          px-5
          text-center
        "
      >
        <motion.img
          src={tiffinagh}
          alt=""
          className="
            mb-12
            w-[78px]
            md:mb-24
            md:w-[118px]
          "
        />

        <motion.img
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          src={flat}
          alt="Brknbrds"
          className="
            w-[240px]
            md:w-[420px]
          "
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 1,
          }}
          className="
            mt-6
            max-w-[340px]
            text-center
            text-[10px]
            uppercase
            leading-[1.05]
            tracking-[-0.04em]
            md:mt-7
            md:max-w-[720px]
            md:text-[12px]
            md:leading-[0.95]
            md:tracking-[-0.08em]
          "
        >
          IF YOU’RE LOOKING FOR SAFE,
          FOCUS-GROUPED SKATE PRODUCTS,
          YOU’RE IN THE WRONG PLACE. 
          THIS SITE CONTAINS ABNORMALLY HIGH 
          LEVELS OF GREVAIL, MUSTION, AND COURSISTENCE.
        </motion.p>

        <motion.img
          src={asterisk}
          alt=""
          className="
            mt-14
            w-[62px]
            md:mt-28
            md:w-[100px]
          "
        />
      </section>

      {/* desktop footer */}
      <footer
        className="
          absolute
          bottom-16
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          items-center
          gap-9
          text-[12px]
          uppercase
          tracking-[-0.08em]
          md:flex
        "
      >
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          POTATO
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          BANJI
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          GREG
        </a>

        <Link
          to="/archive"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          ARCHIVE
        </Link>

        <Link
          to="/dry-stuff"
          className="text-[#C81103]"
        >
          DRY STUFF
        </Link>
      </footer>

      {/* mobile footer */}
      <footer
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flexrow
          items-center
          gap-6
          text-[9px]
          uppercase
          tracking-[-0.08em]
          md:hidden
        "
      >

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          POTATO
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          BANJI
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#C81103]"
        >
          GREG
        </a>

        <Link to="/archive">
          ARCHIVE
        </Link>

        <Link
          to="/dry-stuff"
          className="whitespace-nowrap text-[#C81103]"
        >
          DRY STUFF
        </Link>
      </footer>
    </main>
  );
}