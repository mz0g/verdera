import Link from "next/link"
import { Leaf, Search, User, Heart, Briefcase, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-green-600">
          <Leaf className="h-5 w-5" />
          <span>Verdera</span>
        </Link>
        <nav className="hidden md:flex ml-6 gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Stays
          </Link>
          <Link href="/cars" className="text-sm font-medium hover:underline underline-offset-4">
            Cars
          </Link>
          <Link href="/packages" className="text-sm font-medium hover:underline underline-offset-4">
            Packages
          </Link>
          <Link href="/ecotours" className="text-sm font-medium hover:underline underline-offset-4">
            Eco Tours
          </Link>
          <Link href="/volunteering" className="text-sm font-medium hover:underline underline-offset-4">
            Volunteering
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search destinations..."
              className="pl-8 bg-muted w-[200px] focus:w-[300px] transition-all duration-300"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-green-600">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favorites</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-green-600">
            <Briefcase className="h-5 w-5" />
            <span className="sr-only">Trips</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-green-600">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/">Stays</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/cars">Cars</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/packages">Packages</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ecotours">Eco Tours</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/volunteering">Volunteering</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
