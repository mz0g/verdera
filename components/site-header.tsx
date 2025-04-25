"use client"

import Link from "next/link"
import { Leaf, Search, User, Heart, Briefcase, Menu, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"

export function SiteHeader() {
  const { itemCount, items, totalPrice, discountedPrice, discount, totalGreenScore, removeItem } = useCart()

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

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="text-green-600 relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-green-600"
                  >
                    {itemCount}
                  </Badge>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4 border-b">
                <h3 className="font-medium">Your Cart ({itemCount} items)</h3>
              </div>
              {items.length > 0 ? (
                <>
                  <div className="max-h-[300px] overflow-auto">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.type}`} className="flex items-center gap-3 p-3 border-b">
                        <div className="h-12 w-12 bg-muted rounded overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium truncate">{item.name}</h4>
                          <div className="flex items-center justify-between mt-1">
                            <div className="text-sm text-muted-foreground">
                              Qty: {item.quantity} × ${item.price}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 text-muted-foreground"
                              onClick={() => removeItem(item.id)}
                            >
                              ×
                            </Button>
                          </div>
                          {item.greenScore && (
                            <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                              <Leaf className="h-3 w-3" />
                              Green Score: {item.greenScore}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Subtotal:</span>
                        <span className="font-medium">${totalPrice.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex items-center justify-between text-green-600">
                          <span className="text-sm flex items-center gap-1">
                            <Leaf className="h-3 w-3" />
                            Green Discount:
                          </span>
                          <span className="font-medium">-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between font-bold pt-2 border-t">
                        <span>Total:</span>
                        <span>${discountedPrice.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="text-xs text-green-600 italic">
                          You saved ${discount.toFixed(2)} with your green choices!
                        </div>
                      )}
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Checkout
                    </Button>
                  </div>
                </>
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  <p>Your cart is empty</p>
                  <Link href="/deals" className="text-green-600 text-sm hover:underline block mt-2">
                    Browse our eco-friendly deals
                  </Link>
                </div>
              )}
            </PopoverContent>
          </Popover>
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
                <Link href="/volunteering">Volunteering</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
