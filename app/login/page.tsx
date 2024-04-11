"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { randomUsername, setTokenCookie } from "@/app/utils/globalUtils";

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = async () => {
    // Set the token in the cookie
    setTokenCookie(
      JSON.stringify({
        username: randomUsername(),
      })
    );
    // Redirect to the users page
    router.push("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body ">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="btn font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
            <Link
              href="/register"
              className="inline-block align-baseline font-bold text-sm  hover:text-blue-800"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
