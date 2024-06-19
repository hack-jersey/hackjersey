import Image from "next/image";
import { BsMouse } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <div className=" pb-6">
        <Image src="/hackjersey.png" width={900} height={100} alt="banner" />
      </div>
      <p className="text-xl text-[#FFFFFF90] w-3/5">
        The <b className="text-[#34ACF0]">high school hackathon</b> for anyone
        in Jersey to build whatever they please,
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
