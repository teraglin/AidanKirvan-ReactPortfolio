import { Suspense } from "react";
import type { Metadata } from "next";
import LoginPageClient from "./LoginPageClient";

export const metadata: Metadata = {
  title: "Login - Aidan Kirvan",
  description: "Login page"
};

export default function TabletopPage() {
  return (
    <Suspense>
      <LoginPageClient />
    </Suspense>
  );
}
