"use client";

import { useRouter } from "next/navigation";

import { AlertCircle, ArrowLeft, MailCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function VerifyEmail() {
  const router = useRouter();

  return (
    <Card className="w-full min-w-sm">
      <CardHeader className="flex flex-col items-center gap-4 text-center">
        {/* Email Icon */}
        <div className="flex size-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <MailCheck className="size-10" strokeWidth={1.8} />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl font-semibold">Check your email</CardTitle>

          <CardDescription className="text-[15px] leading-relaxed">
            We&apos;ve sent a verification link to your email address. Please check your inbox to
            verify your account.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="grid gap-6">
        {/* Spam Notice */}
        <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-800">
          <AlertCircle className="size-5 shrink-0" />

          <p className="text-sm">Check your spam or junk folder.</p>
        </div>

        {/* Back to Login */}
        <Button type="button" variant="outline" className="w-full" onClick={() => router.back()}>
          <ArrowLeft className="size-4" />
          Back to Login
        </Button>
      </CardContent>
    </Card>
  );
}
