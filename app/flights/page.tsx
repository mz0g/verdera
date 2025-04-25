import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SearchForm } from "@/components/search-form"
import { FlightListings } from "@/components/flight-listings"
import { GreenScoreCard } from "@/components/green-score-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export default function FlightsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/80 z-10" />
          <div
            className="relative h-[300px] bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=300&width=1200')" }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Sustainable Flights
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl">
                    Find the most eco-friendly flight options for your journey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2">
            <div className="container px-4 md:px-6">
              <SearchForm defaultTab="flights" />
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 lg:py-36">
          <div className="container px-4 md:px-6 pt-10">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <FlightListings />
              </div>
              <div className="space-y-6">
                <GreenScoreCard />
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      Carbon Offset Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-green-50 p-4">
                      <h3 className="font-medium text-green-800 mb-2">Reforestation Project</h3>
                      <p className="text-sm text-green-700">
                        Offset your flight emissions by supporting tree planting initiatives in affected areas.
                      </p>
                      <div className="mt-2 text-sm font-medium text-green-600">From $12 per ton of CO₂</div>
                    </div>
                    <div className="rounded-lg border bg-green-50 p-4">
                      <h3 className="font-medium text-green-800 mb-2">Renewable Energy</h3>
                      <p className="text-sm text-green-700">
                        Support wind and solar energy projects to offset your carbon footprint.
                      </p>
                      <div className="mt-2 text-sm font-medium text-green-600">From $15 per ton of CO₂</div>
                    </div>
                    <div className="rounded-lg border bg-green-50 p-4">
                      <h3 className="font-medium text-green-800 mb-2">Ocean Conservation</h3>
                      <p className="text-sm text-green-700">
                        Help protect marine ecosystems that naturally capture carbon.
                      </p>
                      <div className="mt-2 text-sm font-medium text-green-600">From $18 per ton of CO₂</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
