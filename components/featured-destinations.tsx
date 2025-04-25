import { Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function FeaturedDestinations() {
  const destinations = [
    {
      name: "Costa Rica",
      image: "/placeholder.svg?height=200&width=300",
      greenScore: 92,
      description: "Leader in eco-tourism with protected rainforests and renewable energy",
    },
    {
      name: "Iceland",
      image: "/placeholder.svg?height=200&width=300",
      greenScore: 95,
      description: "Powered by geothermal and hydroelectric energy with pristine landscapes",
    },
    {
      name: "New Zealand",
      image: "/placeholder.svg?height=200&width=300",
      greenScore: 90,
      description: "Committed to conservation with carbon-neutral initiatives and protected areas",
    },
    {
      name: "Slovenia",
      image: "/placeholder.svg?height=200&width=300",
      greenScore: 88,
      description: "Europe's green gem with sustainable tourism practices and natural preservation",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {destinations.map((destination, index) => (
        <Link href="#" key={index} className="group">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="relative">
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <Badge
                variant="outline"
                className="absolute top-3 right-3 bg-green-50/90 text-green-700 border-green-200 flex items-center gap-1"
              >
                <Leaf className="h-3 w-3" />
                Green Score: {destination.greenScore}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-1 group-hover:text-green-600">{destination.name}</h3>
              <p className="text-sm text-muted-foreground">{destination.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
