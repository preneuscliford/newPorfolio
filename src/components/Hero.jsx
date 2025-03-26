/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b" />

      <div
        className={`absolute inset-0 top-[120px] md:top-[140px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#915EFF] glow-purple" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF]" />
        </div>

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Salut, je suis{" "}
            <span className="text-[#915EFF] animate-pulse">Cliford</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
            <span className="inline-block bg-[#915EFF]/20 px-2 rounded-lg mb-2">
              👨💻 Développeur Full-Stack Junior
            </span>
            <br className="sm:block hidden" />
            Passionné par l'écosystème JavaScript{" "}
            <br className="sm:block hidden" />
            et les technologies
            <span className="text-[#915EFF] font-bold ml-1">
              Web 3.0
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block ml-1 mb-1"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2L2 7l10 5l10-5l-10-5m0 7L2 12l10 5l10-5l-10-5m0 7L2 17l10 5l10-5l-10-5"
                />
              </svg>
            </span>
          </p>

          {/* Social Links */}
          <div className="mt-8 flex space-x-4">
            <a href="https://github.com/preneuscliford" className="social-link">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="fill-current text-[#915EFF] hover:text-white transition-colors"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a href="https://x.com/ClifordPn" className="social-link">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="fill-current text-[#915EFF] hover:text-white transition-colors"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 3D Model */}
      <br />
      <br />
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#915EFF]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
