import { Star, Leaf, Plane } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FlightListings() {
  const listings = [
    {
      id: 1,
      airline: "Green Airways",
      departure: "San Francisco (SFO)",
      arrival: "Amsterdam (AMS)",
      departureTime: "10:30 AM",
      arrivalTime: "6:45 AM",
      duration: "10h 15m",
      stops: "Nonstop",
      price: 649,
      rating: 4.8,
      reviews: 243,
      greenScore: 92,
      badges: ["Fuel Efficient", "Carbon Offset", "Sustainable Catering"],
      description: "Modern fuel-efficient aircraft with automatic carbon offset included in your fare.",
    },
    {
      id: 2,
      airline: "EcoJet",
      departure: "San Francisco (SFO)",
      arrival: "Amsterdam (AMS)",
      departureTime: "1:15 PM",
      arrivalTime: "9:30 AM",
      duration: "10h 15m",
      stops: "1 stop (LHR)",
      price: 589,
      rating: 4.6,
      reviews: 187,
      greenScore: 85,
      badges: ["Biofuel Blend", "Plastic-Free", "Carbon Offset"],
      description: "Flying with a blend of sustainable aviation fuel and comprehensive plastic reduction program.",
    },
    {
      id: 3,
      airline: "SkyNeutral",
      departure: "San Francisco (SFO)",
      arrival: "Amsterdam (AMS)",
      departureTime: "7:45 PM",
      arrivalTime: "4:00 PM",
      duration: "11h 15m",
      stops: "1 stop (KEF)",
      price: 529,
      rating: 4.5,
      reviews: 156,
      greenScore: 88,
      badges: ["Carbon Neutral", "Eco-Friendly Meals", "Waste Reduction"],
      description: "Carbon-neutral airline with industry-leading waste reduction and recycling programs.",
    },
    {
      id: 4,
      airline: "Sustainable Air",
      departure: "San Francisco (SFO)",
      arrival: "Amsterdam (AMS)",
      departureTime: "11:30 PM",
      arrivalTime: "7:45 PM",
      duration: "10h 15m",
      stops: "Nonstop",
      price: 679,
      rating: 4.7,
      reviews: 203,
      greenScore: 90,
      badges: ["Modern Fleet", "Carbon Offset", "Eco-Friendly"],
      description: "Flying the newest, most fuel-efficient aircraft with comprehensive sustainability programs.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sustainable Flights</h2>
        <Tabs defaultValue="recommended">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="price">Lowest Price</TabsTrigger>
            <TabsTrigger value="greenest">Greenest</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6">
        {listings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden">
            <div className="md:flex">
              <CardHeader className="md:w-1/3 border-r">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Plane className="h-5 w-5 text-green-600" />
                      <h3 className="text-xl font-bold">{listing.airline}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-sm mb-4">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="font-medium">{listing.rating}</span>
                      <span className="text-muted-foreground">({listing.reviews})</span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1 w-fit"
                  >
                    <Leaf className="h-3 w-3" />
                    Green Score: {listing.greenScore}
                  </Badge>
                </div>
              </CardHeader>
              <div className="flex flex-col md:w-2/3">
                <CardContent className="flex-1 p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                      <div className="text-center">
                        <div className="text-lg font-bold">{listing.departureTime}</div>
                        <div className="text-sm text-muted-foreground">{listing.departure}</div>
                      </div>
                      <div className="hidden md:block text-center text-muted-foreground">→</div>
                      <div className="text-center">
                        <div className="text-lg font-bold">{listing.arrivalTime}</div>
                        <div className="text-sm text-muted-foreground">{listing.arrival}</div>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-center md:text-right">
                      <div className="text-sm font-medium">{listing.duration}</div>
                      <div className="text-sm text-muted-foreground">{listing.stops}</div>
                    </div>
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
                    <div className="text-sm text-muted-foreground">round trip per person</div>
                    <div className="text-2xl font-bold">${listing.price}</div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">Select Flight</Button>
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
