import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaFolder } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  image: string;
  logout: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ image, logout }) => {
  return (
    <>
      <header className="fixed w-full flex justify-between items-center p-4 border-b-[1px]">
        <div className="font-bold">Motiv8</div>
        <nav>
          <ul className="flex space-x-20">
            <Link href="/home">
              <li className="flex space-x-2 items-center">
                <FaHome />
                <span className="hidden md:block">Home</span>
              </li>
            </Link>
            <Link href="/quotes">
              <li className="flex space-x-2 items-center">
                <FaFolder />
                <span className="hidden md:block">Saved Quotes</span>
              </li>
            </Link>
          </ul>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={image}
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex justify-center">
              <div>{logout}</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
};

export default Navbar;
