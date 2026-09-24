import { auth, signIn } from "@/lib/auth";

import SubmitButton from "@/components/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function LoginPage() {
  const session = await auth();

  console.log(session);

  return (
    <Card className="max-w-sm min-w-xs border lg:min-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email below to ling in your accout.</CardDescription>
      </CardHeader>

      <CardContent>
        <form
          className="grid gap-6"
          action={async (formData) => {
            "use server";
            await signIn("resend", formData);
          }}
        >
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              placeholder="hello@example.com"
              required
              type="email"
              name="email"
              className="border-2"
            />
          </div>

          <SubmitButton title="Login" />
        </form>
      </CardContent>
    </Card>
  );
}
