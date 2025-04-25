import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SearchForm } from "@/components/search-form"
import { CarListings } from "@/components/car-listings"
import { GreenScoreCard } from "@/components/green-score-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery } from "lucide-react"

export default function CarsPage() {
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
                    Eco-Friendly Car Rentals
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl">
                    Choose electric, hybrid, and fuel-efficient vehicles for your journey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2">
            <div className="container px-4 md:px-6">
              <SearchForm defaultTab="cars" />
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 lg:py-36">
          <div className="container px-4 md:px-6 pt-10">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <CarListings />
              </div>
              <div className="space-y-6">
                <GreenScoreCard />
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Battery className="h-5 w-5 text-green-600" />
                      EV Charging Stations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Find charging stations for your electric vehicle during your trip
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="font-medium">San Francisco</span>
                        <span className="text-green-600">142 stations</span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="font-medium">Los Angeles</span>
                        <span className="text-green-600">187 stations</span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="font-medium">Portland</span>
                        <span className="text-green-600">93 stations</span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="font-medium">Seattle</span>
                        <span className="text-green-600">112 stations</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Vancouver</span>
                        <span className="text-green-600">78 stations</span>
                      </div>
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
