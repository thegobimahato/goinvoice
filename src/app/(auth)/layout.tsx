import { UnprotectedPage } from "@/components/CheckAuth";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-auto p-4">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#6e6b6b] bg-[radial-gradient(#f1f1f166_1px,#f1f1f1_1px)] bg-size-[20px_20px]"></div>
      <div className="relative z-10">{children}</div>

      <UnprotectedPage />
    </main>
  );
}
