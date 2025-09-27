import Link from "next/link";
import { HiKey, HiShieldCheck, HiUser } from "react-icons/hi";
import { MdLogin } from "react-icons/md";

export default function Login() {
  return (
    <section className="absolute grid min-h-[50vh] items-center -translate-1/2 top-1/2 left-1/2 w-11/12 max-w-[385px] rounded-md drop-shadow-sm drop-shadow-gray-800 bg-[#ffffffea] px-6 pt-7 pb-4">
      <div className="grid gap-4 py-3">
        <div className="grid gap-0 pb-4">
          <h1 className="grid justify-items-center justify-self-center  gap-2 items-center text-center">
            <span className="flex items-center text-[#0051cb]">
              <span className="text-4xl">
                <HiShieldCheck />
              </span>
              <span>Ezz</span>
              <span className="font-bold">Pay</span>
            </span>
            <p className="text-sm text-gray-500">
              Welcome to <span className="font-bold">Ezzpay!</span> Login With
              Your Details
            </p>
          </h1>
        </div>
        <form className="grid gap-5" action="">
          <label
            className="grid gap-0.5 items-center text-gray-500"
            htmlFor="username"
          >
            <input
              className="outline-none w-full text-sm bg-gray-200 p-2.5 py-4 rounded-md  text-gray-600 placeholder:text-[13px] placeholder:text-gray-400"
              id="username"
              type="text"
              placeholder="ID or Username"
            />
          </label>

          <div className="grid gap-0">
            <label className="" htmlFor="password">
              <input
                className="outline-none w-full text-sm bg-gray-200 p-2.5 py-4 rounded-md  text-gray-600 placeholder:text-[13px] placeholder:text-gray-400"
                id="password"
                type="password"
                placeholder="Password"
              />
            </label>
            <small className="justify-self-end m-0 align-top">
              <Link
                className="custom-transition text-[13px] text-gray-400 hover:text-gray-500 hover:underline"
                href={"#"}
              >
                Forgot Password?
              </Link>
            </small>
          </div>

          <div className="grid justify-end">
            <button
              className="flex custom-transition items-center gap-1 outline-none border border-inherit rounded-md font-medium p-3 py-3 text-gray-200 bg-[#0051cb] hover:bg-[#0242a0] w-fit"
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
          <span className="text-[#0051cb] font-semibold">
            &copy; <span>Ezz</span>
            <span className="font-bold">Pay</span>
          </span>
          <span> 2025 - 2027.</span>
        </p>
      </div>
    </section>
  );
}
