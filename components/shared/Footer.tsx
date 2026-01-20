import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                S
              </div>
              Starter SaaS
            </div>
            <p className="text-sm text-muted-foreground">
              Award-winning SaaS mockup template for rapid development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#privacy" className="hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-primary">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-primary">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground text-center">
          <p>&copy; 2026 Starter SaaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
