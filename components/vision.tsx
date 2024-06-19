import { motion } from "framer-motion";

export default function Vision() {
  return (
    <>
      <div className="mt-96 w-4/5">
        <h1 className="text-6xl text-center font-bold mb-24">Our Vision</h1>

        <div className="relative z-10 grid gap-3 grid-cols-5 text-left">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <p className="font-bold text-2xl">What’s a hackathon?</p>
            <p className="font-light text-sm my-4">
              A coding marathon! Imagine a weekend where teenagers come together
              to code projects for fun—however goofy or janky—and share them
              with each other.
            </p>
            <p className="font-light text-sm">
              You’ll have a goal to work towards, side quests to tackle, and new
              friends to hang out with. You don’t need coding experience—just an
              open mind.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          ></motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          ></motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <p className="font-bold text-2xl">Build what you love</p>
            <p className="font-light text-sm my-4">
              At hackJersey, we believe that the best innovations come from
              passion. We encourage you to let your creativity run wild and
              focus on projects that ignite your enthusiasm.
            </p>
            <p className="font-light text-sm">
              Whether it’s a groundbreaking app, an inspiring social initiative,
              or an artistic expression of code, this is your chance to work on
              something that truly excites you
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <p className="font-bold text-2xl">What’s a hackathon?</p>
            <p className="font-light text-sm my-4">
              A coding marathon! Imagine a weekend where teenagers come together
              to code projects for fun—however goofy or janky—and share them
              with each other.
            </p>
            <p className="font-light text-sm">
              You’ll have a goal to work towards, side quests to tackle, and new
              friends to hang out with. You don’t need coding experience—just an
              open mind.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          ></motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          ></motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <p className="font-bold text-2xl">Make new friends</p>
            <p className="font-light text-sm my-4">
              You don’t have to just code at hackathons! At hackJersey, you will
              meet fun, like-minded teenagers, who love to code as much as you
              do!
            </p>
            <p className="font-light text-sm">
              From board games to karaoke nights, hackJersey is one long special
              and chance to befriend people you will come to adore!
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
