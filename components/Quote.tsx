import Image from "next/image";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Quote() {
  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-medium text-center">Daily motivational quotes to lighten up your day</h1>
        <p className="text-2xl text-center py-10">
          <FaQuoteLeft className="text-xs mb-5 inline mr-2" />
          You don't have to live your life the way other people expect you to
          <FaQuoteRight className="text-xs inline mt-5 ml-2" />
        </p>
      </section>
    </>
  );
}
