"use client"

import { Star, Leaf, ShoppingCart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { loadTravel } from "@/lib/data-static"
import { useCart } from "@/context/cart-context"

export function TravelListings() {
  const listings = loadTravel();
  const { addItem } = useCart();

  const handleAddToCart = (listing: any) => {
    addItem({
      id: listing.id,
      name: listing.name,
      price: listing.price,
      type: "stay",
      image: listing.image,
      greenScore: listing.greenScore
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sustainable Stays</h2>
        <Tabs defaultValue="recommended">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="deals">Eco Deals</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6">
        {listings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col md:w-2/3">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{listing.name}</h3>
                      <p className="text-sm text-muted-foreground">{listing.location}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="font-medium">{listing.rating}</span>
                      <span className="text-muted-foreground">({listing.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
                    >
                      <Leaf className="h-3 w-3" />
                      Green Score: {listing.greenScore}
                    </Badge>
                    {listing.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm">{listing.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div>
                    <div className="text-sm text-muted-foreground">per night</div>
                    <div className="text-2xl font-bold">${listing.price}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                    >
                      View Details
                    </Button>
                    <Button
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleAddToCart(listing)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="gap-2">
          Load More Results
        </Button>
      </div>
    </div>
  )
}
