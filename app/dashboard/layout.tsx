import { getSession } from "@/lib/session"
import { redirect } from "next/navigation"
import { ROLES } from "@/lib/roles"
import { DashboardNav } from "@/components/dashboard/DashboardNav"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login")
  }

  if (session.user.role === ROLES.ADMIN) {
    redirect("/admin")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
