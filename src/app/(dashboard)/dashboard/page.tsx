import { signOut } from "@/lib/auth";

import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div>
      Dashboard Page
      <Button
        onClick={async () => {
          "use server";
          await signOut();
        }}
      >
        Logout
      </Button>
    </div>
  );
}
