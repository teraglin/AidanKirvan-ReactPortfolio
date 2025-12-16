import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminNav from "./AdminNav";

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen w-screen bg-dark-charcoal">
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <AdminNav username={session.user.name || "Admin"} />
          <main className="flex-1 p-4 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
