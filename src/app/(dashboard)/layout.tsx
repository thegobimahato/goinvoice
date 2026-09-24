import { ProtectedPage } from "@/components/CheckAuth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <ProtectedPage />
    </div>
  );
}
