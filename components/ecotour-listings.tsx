import { Star, Leaf, Users, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EcoTourListings() {
  const listings = [
    {
      id: 1,
      name: "Amazon Rainforest Conservation Tour",
      location: "Brazil",
      image: "/placeholder.svg?height=200&width=300",
      price: 149,
      duration: "Full day",
      groupSize: "Max 8 people",
      rating: 4.9,
      reviews: 243,
      greenScore: 96,
      badges: ["Wildlife Protection", "Indigenous Communities", "Carbon Neutral"],
      description:
        "Join conservation experts to learn about rainforest protection efforts and support indigenous communities.",
    },
    {
      id: 2,
      name: "Coral Reef Restoration Experience",
      location: "Great Barrier Reef, Australia",
      image: "/placeholder.svg?height=200&width=300",
      price: 189,
      duration: "Half day",
      groupSize: "Max 6 people",
      rating: 4.8,
      reviews: 187,
      greenScore: 95,
      badges: ["Marine Conservation", "Educational", "Reef-Safe"],
      description:
        "Help marine biologists restore coral reefs using sustainable techniques. Includes reef-safe snorkeling.",
    },
    {
      id: 3,
      name: "Sustainable Vineyard Tour",
      location: "Napa Valley, USA",
      image: "/placeholder.svg?height=200&width=300",
      price: 89,
      duration: "4 hours",
      groupSize: "Max 10 people",
      rating: 4.7,
      reviews: 156,
      greenScore: 88,
      badges: ["Organic Farming", "Renewable Energy", "Water Conservation"],
      description:
        "Visit vineyards practicing organic farming, renewable energy use, and innovative water conservation techniques.",
    },
    {
      id: 4,
      name: "Wildlife Sanctuary Volunteer Day",
      location: "Kenya",
      image: "/placeholder.svg?height=200&width=300",
      price: 129,
      duration: "Full day",
      groupSize: "Max 8 people",
      rating: 4.9,
      reviews: 203,
      greenScore: 97,
      badges: ["Animal Welfare", "Conservation", "Education"],
      description:
        "Spend a day helping at a wildlife sanctuary that rehabilitates injured and orphaned animals for release.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Eco Tours & Experiences</h2>
        <Tabs defaultValue="recommended">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="new">New Tours</TabsTrigger>
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
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
                    >
                      <Leaf className="h-3 w-3" />
                      Green Score: {listing.greenScore}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {listing.duration}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {listing.groupSize}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
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
                    <div className="text-sm text-muted-foreground">per person</div>
                    <div className="text-2xl font-bold">${listing.price}</div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">Book Tour</Button>
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
