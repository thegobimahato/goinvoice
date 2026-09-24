import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export async function ProtectedPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <></>;
}

export async function UnprotectedPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return <></>;
}
