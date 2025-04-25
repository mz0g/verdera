import { Star, Leaf, Tag, Percent, ShoppingCart, Package } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"

export function DealsListings() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const deals = [
    {
      id: 1,
      name: "Costa Rica Eco Adventure Bundle",
      location: "Costa Rica",
      image: "/placeholder.svg?height=200&width=300",
      originalPrice: 2499,
      price: 1899,
      discount: "24%",
      duration: "8 days",
      rating: 4.8,
      reviews: 243,
      greenScore: 92,
      badges: ["Carbon Neutral", "Wildlife Conservation", "Local Communities"],
      description:
        "Our most popular eco-adventure package! Explore Costa Rica's incredible biodiversity with carbon-neutral transportation, eco-lodges, and conservation activities. This special deal includes all accommodations, guided tours, and most meals.",
      includes: [
        "Eco-friendly accommodations",
        "Sustainable transportation",
        "Conservation activities",
        "Local guides",
        "Most meals included",
        "Airport transfers"
      ],
    },
    {
      id: 2,
      name: "Iceland Renewable Energy Tour",
      location: "Iceland",
      image: "/placeholder.svg?height=200&width=300",
      originalPrice: 2899,
      price: 2249,
      discount: "22%",
      duration: "7 days",
      rating: 4.7,
      reviews: 187,
      greenScore: 95,
      badges: ["Geothermal Energy", "Zero Waste", "Carbon Offset"],
      description:
        "Limited-time offer! Discover Iceland's renewable energy innovations while staying in eco-certified hotels and exploring natural wonders. This package includes exclusive access to geothermal facilities not open to the general public and a private glacier hike.",
      includes: [
        "Green-certified hotels",
        "Electric vehicle tours",
        "Geothermal spa visits",
        "Sustainable farm visits",
        "Northern Lights excursion (seasonal)",
        "All breakfasts and 3 dinners"
      ],
    },
    {
      id: 3,
      name: "Thailand Sustainable Island Hopping",
      location: "Thailand",
      image: "/placeholder.svg?height=200&width=300",
      originalPrice: 1799,
      price: 1299,
      discount: "28%",
      duration: "10 days",
      rating: 4.6,
      reviews: 156,
      greenScore: 88,
      badges: ["Marine Conservation", "Plastic-Free", "Community Tourism"],
      description:
        "Special seasonal discount! Experience Thailand's islands with a focus on sustainability. Stay in eco-resorts, participate in beach cleanups, and learn about marine conservation efforts. This package includes island transfers by low-emission boats and a traditional cooking class.",
      includes: [
        "Eco-resort accommodations",
        "Low-emission boat transfers",
        "Marine conservation activities",
        "Traditional cooking class",
        "Snorkeling equipment",
        "Daily breakfast"
      ],
    },
    {
      id: 4,
      name: "Electric Vehicle Road Trip - California Coast",
      location: "California, USA",
      image: "/placeholder.svg?height=200&width=300",
      originalPrice: 1499,
      price: 1199,
      discount: "20%",
      duration: "5 days",
      rating: 4.9,
      reviews: 112,
      greenScore: 96,
      badges: ["Zero Emissions", "Renewable Energy", "Sustainable Accommodations"],
      description:
        "Early bird special! Explore the California coast in a premium electric vehicle with a pre-planned route featuring charging stations and eco-friendly accommodations. Package includes the EV rental, accommodations, and a digital guide to sustainable attractions.",
      includes: [
        "Premium electric vehicle rental",
        "Charging station access",
        "Eco-friendly accommodations",
        "Digital sustainable travel guide",
        "24/7 roadside assistance",
        "Carbon offset contribution"
      ],
    },
    {
      id: 5,
      name: "Amazon Rainforest Conservation Retreat",
      location: "Brazil",
      image: "/placeholder.svg?height=200&width=300",
      originalPrice: 2199,
      price: 1699,
      discount: "23%",
      duration: "6 days",
      rating: 4.7,
      reviews: 98,
      greenScore: 94,
      badges: ["Rainforest Protection", "Indigenous Communities", "Wildlife Conservation"],
      description:
        "Flash sale this week only! Stay in an eco-lodge deep in the Amazon rainforest while contributing to conservation efforts. This immersive experience includes guided jungle treks, canopy walks, and cultural exchanges with indigenous communities.",
      includes: [
        "Sustainable jungle lodge",
        "Expert naturalist guides",
        "Indigenous community visits",
        "Canopy walkway access",
        "River excursions",
        "All meals included"
      ],
    },
  ]

  const handleAddToCart = (deal: any) => {
    addItem({
      id: deal.id,
      name: deal.name,
      price: deal.price,
      type: "package",
      image: deal.image
    })
  }

  const handleAddAllToCart = () => {
    // Add all deals to the cart
    deals.forEach(deal => {
      addItem({
        id: deal.id,
        name: deal.name,
        price: deal.price,
        type: "package",
        image: deal.image
      })
    })

    // Show a success toast
    toast({
      title: "All deals added to cart!",
      description: `You've signed up for all ${deals.length} eco-friendly travel deals.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold">Eco-Friendly Travel Deals</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleAddAllToCart}
            className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
          >
            <Package className="h-4 w-4" />
            <span>Sign Up for All Deals</span>
          </Button>
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Deals</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="flash">Flash Sales</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Package className="h-6 w-6 text-green-700" />
            </div>
            <div className="flex-1">
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
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.name}
                  className="h-full w-full object-cover"
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

      <div className="flex justify-center">
        <Button variant="outline" className="gap-2">
          Load More Deals
        </Button>
      </div>
    </div>
  )
}
