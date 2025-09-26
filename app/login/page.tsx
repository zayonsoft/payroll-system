import Link from "next/link";
import { HiKey, HiShieldCheck, HiUser } from "react-icons/hi";
import { MdLogin } from "react-icons/md";

export default function Login() {
  return (
    <section className="absolute grid min-h-[50vh] items-center -translate-1/2 top-1/2 left-1/2 w-11/12 max-w-[350px] rounded-md bg-[#ffffffea] px-6 pt-7 pb-4">
      <div className="grid gap-4 py-3">
        <div className="grid gap-0 pb-4">
          <h1 className="grid justify-items-center justify-self-center  gap-1 items-center text-center">
            <span className="flex items-center">
              <span className="text-4xl text-[#0003cb]">
                <HiShieldCheck />
              </span>
              <span className="text-[#0003cb]">Ezz</span>
              <span className="text-[#0003cb] font-semibold">Pay</span>
            </span>
            <p className="text-sm text-gray-500">
              Welcome to Ezzpay! Login With Your Details
            </p>
          </h1>
        </div>
        <form className="grid gap-5" action="">
          <label
            className="grid gap-0.5 items-center text-gray-500"
            htmlFor="username"
          >
            <input
              className="outline-none w-full text-sm bg-gray-300 p-2.5 py-4 rounded-md  text-gray-400 placeholder:text-[13px] placeholder:text-gray-500"
              id="username"
              type="text"
              placeholder="ID or Username"
            />
          </label>

          <div className="grid gap-0">
            <label className="" htmlFor="password">
              <input
                className="outline-none w-full text-sm bg-gray-300 p-2.5 py-4 rounded-md  text-gray-400 placeholder:text-[13px] placeholder:text-gray-500"
                id="username"
                type="text"
                placeholder="Password"
              />
            </label>
            <p className="justify-self-end">
              <Link
                className="custom-transition text-[13px] text-gray-500 hover:text-[#0003cb]"
                href={"#"}
              >
                Forgot Password?
              </Link>
            </p>
          </div>

          <div className="grid justify-end">
            <button
              className="flex items-center gap-1 outline-none border border-inherit rounded-md font-medium p-3 py-3 text-gray-200 bg-[#0003cb] w-fit"
              type="submit"
            >
              <span className="text-xs">SIGN IN</span>
              <span className="text-lg">
                <MdLogin />
              </span>
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-500">
          &copy; Ezzpay 2025 | All Rights Reserved{" "}
        </p>
      </div>
    </section>
  );
}
