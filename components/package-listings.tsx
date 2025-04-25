import { Star, Leaf, Calendar, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PackageListings() {
  const listings = [
    {
      id: 1,
      name: "Costa Rica Eco Adventure",
      location: "Costa Rica",
      image: "/placeholder.svg?height=200&width=300",
      price: 1899,
      duration: "8 days",
      rating: 4.8,
      reviews: 243,
      greenScore: 92,
      badges: ["Carbon Neutral", "Wildlife Conservation", "Local Communities"],
      description:
        "Explore Costa Rica's incredible biodiversity with carbon-neutral transportation, eco-lodges, and conservation activities.",
      includes: [
        "Eco-friendly accommodations",
        "Sustainable transportation",
        "Conservation activities",
        "Local guides",
      ],
    },
    {
      id: 2,
      name: "Iceland Renewable Energy Tour",
      location: "Iceland",
      image: "/placeholder.svg?height=200&width=300",
      price: 2249,
      duration: "7 days",
      rating: 4.7,
      reviews: 187,
      greenScore: 95,
      badges: ["Geothermal Energy", "Zero Waste", "Carbon Offset"],
      description:
        "Discover Iceland's renewable energy innovations while staying in eco-certified hotels and exploring natural wonders.",
      includes: [
        "Green-certified hotels",
        "Electric vehicle tours",
        "Geothermal spa visits",
        "Sustainable farm visits",
      ],
    },
    {
      id: 3,
      name: "Thailand Sustainable Islands",
      location: "Thailand",
      image: "/placeholder.svg?height=200&width=300",
      price: 1599,
      duration: "10 days",
      rating: 4.6,
      reviews: 156,
      greenScore: 88,
      badges: ["Marine Conservation", "Plastic-Free", "Local Economy"],
      description:
        "Experience Thailand's islands while participating in marine conservation and supporting local sustainable businesses.",
      includes: ["Eco-resorts", "Coral restoration", "Plastic-free initiatives", "Community tourism"],
    },
    {
      id: 4,
      name: "New Zealand Nature Immersion",
      location: "New Zealand",
      image: "/placeholder.svg?height=200&width=300",
      price: 2799,
      duration: "12 days",
      rating: 4.9,
      reviews: 203,
      greenScore: 94,
      badges: ["Carbon Neutral", "Wildlife Protection", "Indigenous Culture"],
      description:
        "Explore New Zealand's stunning landscapes with carbon-neutral transportation and accommodations that protect native wildlife.",
      includes: ["Eco-lodges", "Electric vehicle transport", "Conservation projects", "Maori cultural experiences"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sustainable Travel Packages</h2>
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
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {listing.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="font-medium">{listing.rating}</span>
                      <span className="text-muted-foreground">({listing.reviews})</span>
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
                      Green Score: {listing.greenScore}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {listing.duration}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {listing.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm mb-3">{listing.description}</p>
                  <div className="text-sm">
                    <span className="font-medium">Includes: </span>
                    {listing.includes.join(" • ")}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div>
                    <div className="text-sm text-muted-foreground">per person</div>
                    <div className="text-2xl font-bold">${listing.price}</div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">View Package</Button>
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
