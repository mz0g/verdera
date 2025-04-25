"use client"

import { Star, Leaf, ShoppingCart, Percent, Tag } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { loadDeals } from "@/lib/data-static"
import { useCart } from "@/context/cart-context"

export function DealsListings() {
  const deals = loadDeals();
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (deal: any) => {
    addItem({
      id: deal.id,
      name: deal.name,
      price: deal.price,
      type: "package",
      image: deal.image,
      greenScore: deal.greenScore
    });
  }

  const handleAddAllToCart = () => {
    // Add all deals to the cart
    deals.forEach(deal => {
      addItem({
        id: deal.id,
        name: deal.name,
        price: deal.price,
        type: "package",
        image: deal.image,
        greenScore: deal.greenScore
      });
    });

    // Show a success toast
    toast({
      title: "All deals added to cart!",
      description: `You've signed up for all ${deals.length} eco-friendly travel deals.`,
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold">Eco-Friendly Travel Deals</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleAddAllToCart}
            className="bg-green-600 hover:bg-green-700 whitespace-nowrap"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add All to Cart
          </Button>
        </div>
      </div>

      <Card className="bg-green-50 border-green-200 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-800 mb-1">Bundle All Eco-Friendly Deals</h3>
              <p className="text-green-700">
                Sign up for all our eco-friendly travel deals at once and save an additional 5% on the total package!
                Perfect for eco-conscious travelers who want to explore multiple sustainable destinations.
              </p>
            </div>
            <Button
              onClick={handleAddAllToCart}
              className="bg-green-600 hover:bg-green-700 whitespace-nowrap"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add All to Cart
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {deals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="h-64 md:h-full w-full object-cover"
                />
                <Badge
                  variant="outline"
                  className="absolute top-3 right-3 bg-red-50 text-red-700 border-red-200 flex items-center gap-1"
                >
                  <Percent className="h-3 w-3" />
                  Save {deal.discount}
                </Badge>
              </div>
              <div className="flex flex-col md:w-2/3">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{deal.name}</h3>
                      <p className="text-sm text-muted-foreground">{deal.location} • {deal.duration}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="font-medium">{deal.rating}</span>
                      <span className="text-muted-foreground">({deal.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
                    >
                      <Leaf className="h-3 w-3" />
                      Green Score: {deal.greenScore}
                    </Badge>
                    {deal.badges.map((badge) => (
                      <Badge key={badge} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm mb-4">{deal.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold flex items-center gap-1">
                      <Tag className="h-4 w-4 text-green-600" />
                      What's Included:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {deal.includes.map((item, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                          <span className="h-1 w-1 rounded-full bg-green-500"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Limited time offer</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm line-through text-muted-foreground">${deal.originalPrice}</span>
                      <span className="text-2xl font-bold">${deal.price}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100">
                      View Details
                    </Button>
                    <Button
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleAddToCart(deal)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
