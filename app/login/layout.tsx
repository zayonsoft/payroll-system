import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "EZZPAY | LOGIN",
  description: "A Web-based Payroll system for institutions",
  icons: { icon: "ezzpay_icon.svg" },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="form-bg h-screen w-full">{children}</div>;
}
