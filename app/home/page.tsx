
import Navbar from "../../components/Navbar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Logout from "@/components/Logout";


export default async function UserPage() {
  const session = await auth();

  if (!session?.user) redirect("/");

  const now = new Date();

  const getTime = now.getHours() + ":" + now.getMinutes();

  return (
    <>
      <Navbar
        image={session?.user?.image || "https://via.placeholder.com/150"} // Fallback image in case user's image is not available
        logout={<Logout />}
      />

      <section className="flex flex-col h-screen justify-center text-center px-4 items-center">
        <p className="text-6xl font-bold">{getTime}</p>
        <p className="text-xl my-5 font-semibold">
          Good evening, {session?.user?.name}
        </p>
        <p className="text-xl font-semibold mt-10">Quote of the day:</p>
        <p className="text-base font-semibold py-5">quote here</p>
        <button className="border py-2 px-4">Share on Twitter</button>
      </section>
    </>
  );
}
