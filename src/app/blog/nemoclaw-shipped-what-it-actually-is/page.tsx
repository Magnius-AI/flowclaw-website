import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Archived — flowClaw Blog",
  robots: { index: false, follow: false },
};

export default function ArchivedPost() {
  redirect("/blog");
}
