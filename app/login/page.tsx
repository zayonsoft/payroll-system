import YearDeveloped from "@/components/YearDeveloped";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LuEyeOff, LuUser } from "react-icons/lu";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Login() {
  return (
    <section className={`${inter.className}`}>
      <div className="fixed right-0 left-1/2 top-0 bottom-0 side-design max-[851px]:left-full"></div>
      <div className="relative w-1/2 min-w-[350px] h-screen max-[851px]:w-full">
        <div className="grid gap-5 w-10/12 max-w-[500px] absolute -translate-1/2 top-1/2 left-1/2">
          <section className="bg-[#FFFFFF26] px-8 py-9 rounded-2xl grid gap-20 backdrop-blur-xl">
            <div className="grid gap-7">
              <h1 className="flex items-center gap-2 text-[#F4B315]">
                <span>
                  <Image
                    src={"/ezzpay_icon.svg"}
                    className="h-8.5 w-auto select-none"
                    alt="EzzPay Logo"
                    width={500}
                    height={500}
                    draggable={false}
                  />
                </span>
                <span className="font-medium text-3xl">
                  Ezz<span className="font-bold">Pay</span>
                </span>
              </h1>
              <p className="text-sm text-[#ACACAC]">
                Welcome to <span className="font-bold">EzzPay!</span> Please,
                login with your details
              </p>
            </div>
            {/* The Inputs */}
            <div className="grid gap-5">
              {/* USERNAME STARTS */}
              <div className="grid text-[#ACACAC]">
                <label className="w-fit" htmlFor="username">
                  <span>ID or Username</span>
                </label>
                <p className="grid grid-cols-[1fr_auto] bg-[#D3AF8526] rounded-[10px] border border-[#D3AF85] items-center">
                  <span>
                    <input
                      className="w-full outline-none placeholder:text-sm placeholder:text-[#D3AF85] p-2"
                      id="username"
                      type="text"
                      placeholder="Enter your ID or Username"
                    />
                  </span>
                  <label
                    className="py-2 px-3 text-[#D3AF85] text-lg"
                    htmlFor="username"
                  >
                    <LuUser strokeWidth={0.83} />
                  </label>
                </p>
              </div>
              {/* USERNAME ENDS */}

              {/* PASSWORD START */}
              <div className="grid text-[#ACACAC]">
                <label className="w-fit" htmlFor="password">
                  <span>Password</span>
                </label>
                <p className="grid grid-cols-[1fr_auto] bg-[#D3AF8526] rounded-[10px] border border-[#D3AF85] items-center gap-1">
                  <span>
                    <input
                      className="w-full outline-none placeholder:text-sm placeholder:text-[#D3AF85] p-2"
                      id="password"
                      type="password"
                      placeholder="*******************"
                    />
                  </span>
                  <label
                    className="py-2 px-3 text-[#D3AF85] text-lg"
                    htmlFor="password"
                  >
                    <LuEyeOff strokeWidth={0.83} />
                  </label>
                </p>
                <p className="justify-self-end">
                  <Link
                    className="custom-transition text-[#ACACAC] text-sm hover:text-[#D3AF85]"
                    href={"#"}
                  >
                    Forgot password?
                  </Link>
                </p>
              </div>
              {/* PASSWORD ENDS */}

              {/* SUBMIT */}
              <button className="bg-[#F4B315] font-medium text-[#172531] p-2 text-lg rounded-[10px]">
                Sign In
              </button>
              {/* SUBMIT ENDS*/}
            </div>
          </section>
          <section>
            <p className="grid justify-self-center text-[#717378] text-sm">
              <span>
                &copy; <YearDeveloped />
                <span className="font-semibold"> EzzPay</span> | All Rights
                Reserved.
              </span>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
