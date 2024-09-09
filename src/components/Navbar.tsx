import Link from "next/link";
import LogoutFrom from "./LogoutFrom";
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();
  console.log(session);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link href="/">
            <h1>MyApp</h1>
          </Link>
        </div>
        <div className="space-x-4 flex flex-row">
          <Link href="/">
            <h1 className="text-white hover:text-gray-300">Home</h1>
          </Link>
          <Link href="/premium">
            <h1 className="text-white hover:text-gray-300">Premium</h1>
          </Link>
          <Link href="/profile">
            <h1 className="text-white hover:text-gray-300">Profile</h1>
          </Link>

          {!session.isLoggedIn ? (
            <Link href="/login">
              <h1 className="text-white hover:text-gray-300">Login</h1>
            </Link>
          ) : (
            <LogoutFrom />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
