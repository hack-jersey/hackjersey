import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-[url('/a.png')] bg-no-repeat bg-[#000F16]">
      <a className="fixed mx-12" href="https://hackclub.com/"><Image src="/hack.png" width={100} height={100} alt="banner"/></a>

      <main className="flex items-center justify-center p-40 text-center">
        <div>
        <p className="italic text-xl text-[#58C3FFcc]">Hack Club presents:</p>
          <Image src="/hackjersey.png" width={400} height={100} alt="banner"/>
        </div>
      </main>
      <p className="mt-96">content</p>
      </div>
    </>
  );
}
