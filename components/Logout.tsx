import { doLogout } from "@/app/api/actions";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <form action={doLogout}>
      <Button
        className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 w-full rounded"
        type="submit"
      >
        Logout
      </Button>
    </form>
  );
};
export default Logout;
