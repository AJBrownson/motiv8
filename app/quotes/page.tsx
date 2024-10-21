import Navbar from "../../components/Navbar";

import { CopilotPopup, CopilotSidebar } from "@copilotkit/react-ui";

export default function Quotes() {
  return (
    <>
      <Navbar />
      <section className="px-4 pt-20">
        <div className="flex flex-col space-y-2 p-4 border border-slate-400 rounded-xl max-w-[400px]">
          <p className="text-base font-semibold">
            You don't have to live your life the way other people expect you to
          </p>
          <p className="text-sm font-medium text-end">Chris Gauillebeau</p>
          <button className="border py-2 px-4">Share on Twitter</button>
        </div>
      </section>

      <CopilotSidebar />
    </>
  );
}
