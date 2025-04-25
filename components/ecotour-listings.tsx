import { Star, Leaf, Users, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { loadEcoTours } from "@/lib/data"

export function EcoTourListings() {
  const listings = loadEcoTours();

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
