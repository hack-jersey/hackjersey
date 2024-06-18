import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-[url('/a.svg')] bg-no-repeat bg-[#000F16] p-40 flex items-center flex-col justify-center text-center">
        <div className=" pb-6">
          <Image src="/hackjersey.png" width={900} height={100} alt="banner" />
        </div>
        <p className="text-xl text-[#FFFFFF90] w-3/5">
          The <b className="text-[#34ACF0]">high school hackathon</b> for anyone
          in Jersey to build whatever they please,{" "}
          <b className="text-[#34ACF0]">no prior coding experience required.</b>
        </p>
        <div className="mt-96 w-4/5">
          <h1 className="text-6xl font-bold mb-24">Our Vision</h1>

          <div className="relative z-10 grid gap-3 grid-cols-5 text-left">
            <div className="col-span-full lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]">
              <p className="font-bold text-2xl">What’s a hackathon?</p>
              <p className="font-light text-sm my-4">
                A coding marathon! Imagine a weekend where teenagers come
                together to code projects for fun—however goofy or janky—and
                share them with each other.
              </p>
              <p className="font-light text-sm">
              You’ll have a goal to work towards, side quests to tackle, and new friends to hang out with. You don’t need coding experience—just an open mind.
              </p>
            </div>
            <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]">
            </div>

            <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]">
            </div>

            <div className="col-span-full lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]">
              <p className="font-bold text-2xl">Build what you love</p>
              <p className="font-light text-sm my-4">
              At hackJersey, we believe that the best innovations come from passion. We encourage you to let your creativity run wild and focus on projects that ignite your enthusiasm. 
              </p>
              <p className="font-light text-sm">
              Whether it’s a groundbreaking app, an inspiring social initiative, or an artistic expression of code, this is your chance to work on something that truly excites you                </p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
