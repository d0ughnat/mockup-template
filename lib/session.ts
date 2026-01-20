import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { type User } from "./roles"

export async function getSession() {
  const session = await getServerSession(authOptions)
  return session as { user: User } | null
}

export { authOptions }
