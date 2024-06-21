import Image from "next/image";
import { BsMouse } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "./logo";
import LogoSmall from "./logosmall";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-center text-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[23rem] md:w-[40rem] lg:w-[60rem] mb-5 md:mb-0"
          />
        </motion.div>
      </div>
      <p className="text-lg max-w-[24rem] md:max-w-[35rem] text-[#FFFFFF90] text-center">
        The <b className="font-bold text-[#34ACF0]">high school hackathon</b>{" "}
        for anyone in New Jersey to build whatever they please,
        <b className="font-bold text-[#34ACF0]">
          {" "}
          no prior coding experience required.
        </b>
      </p>
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <BsMouse className="text-6xl mt-20 mb-2 font-bold" />
        <IoIosArrowDown className="text-6xl" />
      </motion.div>
    </>
  );
}
