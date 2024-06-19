"use client";

import Vision from "../components/vision";
import Header from "../components/header";
import Faq from "../components/faq";

export default function Home() {
  return (
    <>
      <main className="bg-[url('/bg.svg')] text-[#EEE] bg-y-repeat bg-[#000F16] p-40 flex items-center flex-col justify-center text-center">
        <Header />
        <Vision />
        <Faq />
      </main>
    </>
  );
}
