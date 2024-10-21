import { doSocialLogin } from "@/app/api/actions";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center space-y-5">
    <h1 className="text-xl lg:text-2xl font-semibold">Motiv8</h1>

    <form action={doSocialLogin}>
      <Button>Sign with Google</Button>
    </form>
    </main>
  );
}
