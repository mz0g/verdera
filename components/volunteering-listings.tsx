import { Star, Leaf, Calendar, MapPin, Heart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VolunteeringListings() {
  const listings = [
    {
      id: 1,
      name: "Sea Turtle Conservation Project",
      organization: "Ocean Guardians",
      location: "Costa Rica",
      image: "/placeholder.svg?height=200&width=300",
      price: "Free (accommodation extra)",
      duration: "1-4 weeks",
      rating: 4.9,
      reviews: 243,
      greenScore: 98,
      badges: ["Wildlife Protection", "Marine Conservation", "Hands-on"],
      description:
        "Help protect endangered sea turtles by patrolling beaches, relocating nests, and releasing hatchlings.",
      skills: ["No experience needed", "Training provided", "Physically active"],
    },
    {
      id: 2,
      name: "Reforestation Initiative",
      organization: "Forest Futures",
      location: "Indonesia",
      image: "/placeholder.svg?height=200&width=300",
      price: "$350/week (includes accommodation)",
      duration: "2-12 weeks",
      rating: 4.8,
      reviews: 187,
      greenScore: 95,
      badges: ["Tree Planting", "Habitat Restoration", "Community Engagement"],
      description:
        "Plant trees, monitor forest health, and work with local communities to promote sustainable forestry practices.",
      skills: ["Basic fitness required", "Training provided", "Community work"],
    },
    {
      id: 3,
      name: "Organic Farm Volunteer Program",
      organization: "Sustainable Harvests",
      location: "New Zealand",
      image: "/placeholder.svg?height=200&width=300",
      price: "Work exchange (free accommodation & meals)",
      duration: "2-8 weeks",
      rating: 4.7,
      reviews: 156,
      greenScore: 94,
      badges: ["Organic Farming", "Permaculture", "Food Security"],
      description:
        "Learn organic farming techniques while helping with planting, harvesting, and sustainable farm management.",
      skills: ["No experience needed", "Physical work", "Outdoor environment"],
    },
    {
      id: 4,
      name: "Wildlife Rehabilitation Center",
      organization: "Animal Allies",
      location: "South Africa",
      image: "/placeholder.svg?height=200&width=300",
      price: "$450/week (includes accommodation)",
      duration: "2-12 weeks",
      rating: 4.9,
      reviews: 203,
      greenScore: 97,
      badges: ["Animal Care", "Conservation", "Rehabilitation"],
      description:
        "Care for injured and orphaned wildlife, assist with rehabilitation, and help prepare animals for release.",
      skills: ["Animal handling experience helpful", "Training provided", "Emotionally demanding"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Eco-Volunteering Opportunities</h2>
        <Tabs defaultValue="recommended">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="new">New Projects</TabsTrigger>
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
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{listing.organization}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {listing.location}
                        </div>
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
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      Volunteer
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {listing.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm mb-2">{listing.description}</p>
                  <div className="text-sm mb-2">
                    <span className="font-medium">Skills & Requirements: </span>
                    {listing.skills.join(" • ")}
                  </div>
                  <div className="text-sm font-medium">Cost: {listing.price}</div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="text-green-600 font-medium flex items-center gap-1">
                    <Heart className="h-4 w-4 fill-current" />
                    Earn 100+ Green Score points
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">Apply Now</Button>
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
