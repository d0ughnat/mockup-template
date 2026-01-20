"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
            S
          </div>
          Starter SaaS
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {session ? (
            <>
              <Link
                href={
                  session.user.role === "ADMIN" ? "/admin" : "/dashboard"
                }
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {session.user.role === "ADMIN" ? "Admin" : "Dashboard"}
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={session.user.email} />
                      <AvatarFallback>
                        {getInitials(session.user.name)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {session.user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground mt-1">
                        Role: {session.user.role}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/auth/login"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Log in
              </Link>
              <Button asChild>
                <Link href="/auth/register">Sign up</Link>
              </Button>
            </div>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4">
          {session ? (
            <>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>
                    {getInitials(session.user.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{session.user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {session.user.email}
                  </p>
                </div>
              </div>
              <Link
                href={
                  session.user.role === "ADMIN" ? "/admin" : "/dashboard"
                }
                className="block text-sm font-medium py-2 hover:text-primary"
              >
                {session.user.role === "ADMIN" ? "Admin" : "Dashboard"}
              </Link>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signOut()}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="block text-sm font-medium py-2 hover:text-primary"
              >
                Log in
              </Link>
              <Button asChild className="w-full">
                <Link href="/auth/register">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
