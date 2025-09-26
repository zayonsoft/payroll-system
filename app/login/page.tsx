import { HiKey, HiShieldCheck, HiUser } from "react-icons/hi";

export default function Login() {
  return (
    <section className="absolute grid gap-7 -translate-1/2 top-1/2 left-1/2 w-11/12 max-w-[350px] rounded bg-[#ffffffea] px-5 py-8">
      <div className="grid gap-0">
        <h1 className="justify-self-center text-[#0003cb] flex gap-1 items-center text-center font-semibold text-lg">
          <span className="text-2xl">
            <HiShieldCheck />
          </span>
          <span>Payroll</span>
        </h1>
        <p className="text-center text-xs text-gray-600">
          Welcome back! Kindly Login with your details
        </p>
      </div>
      <form className="grid gap-6" action="">
        <label
          className="flex gap-1 items-center border-1 border-gray-700 p-2 rounded-lg"
          htmlFor="username"
        >
          <span className="text-lg text-gray-700">
            <HiUser />
          </span>
          <span>
            {" "}
            <input
              className="outline-none border-none text-sm text-gray-600 placeholder:text-[13px] placeholder:text-gray-500"
              id="username"
              type="text"
              placeholder="ID or Username"
            />{" "}
          </span>
        </label>

        <label
          className="flex gap-1 items-center border-1 border-gray-700 p-2 rounded-lg"
          htmlFor="password"
        >
          <span className="text-lg text-gray-700">
            <HiKey />
          </span>
          <span>
            {" "}
            <input
              className="outline-none border-none text-sm text-gray-600 placeholder:text-[13px] placeholder:text-gray-500"
              id="password"
              type="text"
              placeholder="Password"
            />{" "}
          </span>
        </label>
        <div>
          <button
            className="rounded-md p-2.5 text-gray-100 bg-[#0003cb] w-full"
            type="submit"
          >
            LOGIN
          </button>
        </div>
      </form>
    </section>
  );
}
