import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PAYROLL SYSTEM | LOGIN",
  description: "A Web-based Payroll system for institutions",
  icons: { icon: "payroll_icon.png" },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="form-bg h-screen w-full">{children}</div>;
}
