/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[140px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className=" z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Salut, je suis <span className="text-[#915EFF]">Cliford</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            développeur web junior,
            <br className="sm:block hidden" />
            passionné par l'univers de JavaScript.
          </p>
          <div className="relative top-10">
            <div className="flex justify-start items-center  ">
              <a className="mr-2" href="https://github.com/preneuscliford">
                <img
                  src="https://www.svgrepo.com/show/475654/github-color.svg"
                  width={30}
                  height={30}
                  className=" w-7 h-7"
                  alt=" logo de github"
                />
              </a>

              <a href="https://x.com/ClifordPn?t=JXoEZNyLcV7rVBsAuHenTA&s=09">
                <img
                  src="https://www.iconpacks.net/icons/free-icons-6/free-icon-twitter-x-logo-blue-outline-20847.png"
                  width={30}
                  height={30}
                  className=" w-7 h-7"
                  alt="logo de X (twitter)"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <ComputersCanvas />

      <div className="relative bottom-20 w-full flex justify-center items-center z-30">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
