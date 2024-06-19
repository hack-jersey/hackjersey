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
        <div className="hidden md:block">
          <Logo width={1275} height={380} />
        </div>
        <div className="md:hidden block">
          <LogoSmall width={360} height={180} />
        </div>
      </div>
      <p className="text-lg max-w-[23rem] text-[#FFFFFF90] text-center">
        The <b className="text-[#34ACF0]">high school hackathon</b> for anyone
        in New Jersey to build whatever they please,
        <b className="text-[#34ACF0]">no prior coding experience required.</b>
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
        <BsMouse className="text-6xl mt-52 font-bold" />
        <IoIosArrowDown className="text-6xl mt-2" />
      </motion.div>
    </>
  );
}
