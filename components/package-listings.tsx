"use client"

import { Star, Leaf, Clock, MapPin, ShoppingCart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { loadPackages } from "@/lib/data-static"
import { useCart } from "@/context/cart-context"

export function PackageListings() {
  const packages = loadPackages();
  const { addItem } = useCart();

  const handleAddToCart = (pkg: any) => {
    addItem({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      type: "package",
      image: pkg.image,
      greenScore: pkg.greenScore
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sustainable Travel Packages</h2>
        <Tabs defaultValue="recommended">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="new">New Packages</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col md:w-2/3">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{pkg.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {pkg.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="font-medium">{pkg.rating}</span>
                      <span className="text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
                    >
                      <Leaf className="h-3 w-3" />
                      Green Score: {pkg.greenScore}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {pkg.duration}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {pkg.badges.map((badge: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm mb-3">{pkg.description}</p>
                  <div className="text-sm">
                    <span className="font-medium">Includes: </span>
                    {pkg.includes.join(" • ")}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div>
                    <div className="text-sm text-muted-foreground">per person</div>
                    <div className="text-2xl font-bold">${pkg.price}</div>
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
                      onClick={() => handleAddToCart(pkg)}
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
