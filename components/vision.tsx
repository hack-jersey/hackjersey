import { motion } from "framer-motion";
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';

export default function Vision() {
  return (
    <>
      <div className="mt-24 mx-4 w-2/3 lg:mx-auto lg:w-[85rem]">
        <h1 className="text-4xl lg:text-6xl text-center font-bold mb-12 lg:mb-24">Our Vision</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:h-[120rem]">
          {/* Row 1 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15">
            <h2 className="text-4xl font-bold mb-2">What's a hackathon?</h2>
            <p className="text-lg pt-3 text-white/90">A coding marathon! Imagine a weekend where teenagers come together to code projects for fun—however goofy or janky—and share them with each other.<br /><br />You’ll have a goal to work towards, side quests to tackle, and new friends to hang out with. You don’t need coding experience—just an open mind.</p>
          </div>
          <div className="lg:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15">
            <h2 className="text-xl font-bold mb-2">Box 2</h2>
            <p>Content goes here</p>
          </div>

          {/* Row 2 */}
          <div className="lg:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15">
            <h2 className="text-xl font-bold mb-2">Box 3</h2>
            <p>Content goes here</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15">
            <h2 className="text-4xl font-bold mb-2">Build what you love</h2>
            <p className="text-lg pt-3 text-white/90">At hackJersey, we believe that the best innovations come from passion. We encourage you to let your creativity run wild and focus on projects that ignite your enthusiasm.<br /><br />Whether it’s a groundbreaking app, an inspiring social initiative, or an artistic expression of code, this is your chance to work on something that truly excites you  </p>
          </div>

          {/* Row 3 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15">
            <h2 className="text-4xl font-bold mb-2">Share your knowledge</h2>
            <p className="text-lg pt-3 text-white/90">Silly or serious, technical or not, hackJersey is a space to share what you know and learn from others.<br /><br />What's a skill you have? Run a workshop on it—and we'll pay for your supplies! And is there something you'd love to yap on? Do a lightning talk, like "why I hate caffeine (controversial)".</p>
          </div>
          <div className="lg:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15">
            <h2 className="text-xl font-bold mb-2">Box 2</h2>
            <p>Content goes here</p>
          </div>

          {/* Row 4 */}
          <div className="lg:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15">
            <h2 className="text-xl font-bold mb-2">Box 3</h2>
            <p>Content goes here</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15">
            <h2 className="text-4xl font-bold mb-2">Build what you love</h2>
            <p className="text-lg pt-3 text-white/90">At hackJersey, we believe that the best innovations come from passion. We encourage you to let your creativity run wild and focus on projects that ignite your enthusiasm.<br /><br />Whether it’s a groundbreaking app, an inspiring social initiative, or an artistic expression of code, this is your chance to work on something that truly excites you  </p>
          </div>
        </div>
      </div>
    </>
  );
}
