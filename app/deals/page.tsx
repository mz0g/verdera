"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SearchForm } from "@/components/search-form"
import { DealsListings } from "@/components/deals-listings"
import { GreenScoreCard } from "@/components/green-score-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tag, Clock, Package, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function DealsPage() {
  const { addItem } = useCart()
  const { toast } = useToast()

  // Sample deals data - this would typically come from a database or API
  const deals = [
    {
      id: 1,
      name: "Costa Rica Eco Adventure Bundle",
      price: 1899,
      type: "package",
      image: "/placeholder.svg?height=200&width=300",
      greenScore: 92
    },
    {
      id: 2,
      name: "Iceland Renewable Energy Tour",
      price: 2249,
      type: "package",
      image: "/placeholder.svg?height=200&width=300",
      greenScore: 95
    },
    {
      id: 3,
      name: "Thailand Sustainable Island Hopping",
      price: 1299,
      type: "package",
      image: "/placeholder.svg?height=200&width=300",
      greenScore: 88
    },
    {
      id: 4,
      name: "Electric Vehicle Road Trip - California Coast",
      price: 1199,
      type: "package",
      image: "/placeholder.svg?height=200&width=300",
      greenScore: 90
    },
    {
      id: 5,
      name: "Amazon Rainforest Conservation Retreat",
      price: 1699,
      type: "package",
      image: "/placeholder.svg?height=200&width=300",
      greenScore: 94
    }
  ]

  const handleSignUpForAllDeals = () => {
    // Add all deals to the cart
    deals.forEach(deal => {
      addItem(deal)
    })

    // Show a success toast
    toast({
      title: "All deals added to cart!",
      description: `You've signed up for all ${deals.length} eco-friendly travel deals.`,
    })
  }
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/80 z-10" />
          <div
            className="relative h-[300px] bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=300&width=1200')" }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Eco-Friendly Travel Deals
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl mb-6">
                    Limited-time offers on sustainable travel experiences that minimize environmental impact
                  </p>
                  <Button
                    onClick={handleSignUpForAllDeals}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg"
                  >
                    <Package className="h-5 w-5 mr-2" />
                    Sign Up for All Deals
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2">
            <div className="container px-4 md:px-6">
              <SearchForm defaultTab="packages" />
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 lg:py-36">
          <div className="container px-4 md:px-6 pt-10">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <DealsListings />
              </div>
              <div className="space-y-6">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Package className="h-5 w-5 text-green-600" />
                      Bundle All Eco Deals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-green-700 text-sm">
                      Sign up for all our eco-friendly travel deals at once and save an additional 5% on the total package!
                    </p>
                    <div className="flex items-center justify-between border-t border-green-200 pt-4">
                      <div className="text-green-800 font-semibold">
                        Total Value: $8,445
                      </div>
                      <div className="text-green-800 font-bold">
                        Bundle: $7,999
                      </div>
                    </div>
                    <Button
                      onClick={handleSignUpForAllDeals}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add All to Cart
                    </Button>
                  </CardContent>
                </Card>

                <GreenScoreCard />
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tag className="h-5 w-5 text-green-600" />
                      Deal Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Eco-Adventure Packages</span>
                      <span className="text-green-600">5 deals</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Sustainable Stays</span>
                      <span className="text-green-600">8 deals</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Green Transportation</span>
                      <span className="text-green-600">3 deals</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Conservation Tours</span>
                      <span className="text-green-600">4 deals</span>
                    </div>
                    <div className="flex items-center justify-between pb-2">
                      <span className="font-medium">Carbon Offset Bundles</span>
                      <span className="text-green-600">2 deals</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      Limited Time Offers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-red-50 p-4">
                      <h3 className="font-medium text-red-800 mb-2">Flash Sale: 48 Hours Only!</h3>
                      <p className="text-sm text-red-700">
                        Take an extra 15% off selected eco-adventures with code: ECOSAVE15
                      </p>
                    </div>
                    <div className="rounded-lg border bg-amber-50 p-4">
                      <h3 className="font-medium text-amber-800 mb-2">Early Bird Summer Specials</h3>
                      <p className="text-sm text-amber-700">
                        Book summer eco-retreats by May 31st and save up to 25%
                      </p>
                    </div>
                    <div className="rounded-lg border bg-blue-50 p-4">
                      <h3 className="font-medium text-blue-800 mb-2">Free Carbon Offsetting</h3>
                      <p className="text-sm text-blue-700">
                        We'll double your carbon offset contribution on all bookings this month
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
